import { LitElement, PropertyValueMap, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import styles from './Table.styles.js';
import commonStyles from '../../styles/common.styles.js';

import { tableContext } from '../../tableContext.js';
import { when } from 'lit/directives/when.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ContextProvider } from '@lit/context';
import { classMap } from 'lit/directives/class-map.js';
import firstPage from '../../icons/firstPage.js';
import chevronLeft from '../../icons/chevronLeft.js';
import chevronRight from '../../icons/chevronRight.js';
import lastPage from '../../icons/lastPage.js';

@customElement('dt-table')
export class Table extends LitElement {
  static styles = [commonStyles, styles];

  @property()
  selection: 'none' | 'single' | 'multiple' = 'none';

  @property({ type: Boolean })
  pagination = false;

  @property({ type: Number })
  page = 1;

  @property({ type: Number })
  perPage = 10;

  @property({ type: Number })
  totalItems = 0;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: Boolean })
  expandable = false;

  @property()
  sortBy = '';

  @property()
  sortDirection: 'asc' | 'desc' | string = 'asc';

  @property()
  columns?: string;

  @query('slot:not([name])')
  defaultSlot!: HTMLSlotElement;

  @query('.container')
  container!: HTMLDivElement;

  private registeredColumns = new Set();

  private provider = new ContextProvider(this, {
    context: tableContext,
    initialValue: this,
  });

  handleBeforeClick() {
    this.page--;
  }

  handleNextClick() {
    this.page++;
  }

  handleFirstClick() {
    this.page = 1;
  }

  handleLastClick() {
    this.page = Math.ceil(this.totalItems / this.perPage);
  }

  handleUpdate(e: Event) {
    const target = e.target as HTMLInputElement;
    this.setAttribute(target.name, target.value);
  }

  resetScroll() {
    this.container.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  sort(by: string, direction?: 'asc' | 'desc' | string) {
    this.sortDirection =
      direction || (this.sortDirection === 'asc' ? 'desc' : 'asc');
    this.sortBy = by;

    this.dispatchEvent(
      new CustomEvent('sort', {
        detail: {
          sortBy: this.sortBy,
          sortDirection: this.sortDirection,
        },
      }),
    );
  }

  filter(filterBy: string, criteria: string | string[]) {
    this.dispatchEvent(
      new CustomEvent('filter', {
        detail: {
          filterBy,
          criteria,
        },
      }),
    );
  }

  protected willUpdate(changedProperties: PropertyValueMap<Table>): void {
    if (changedProperties.has('page') || changedProperties.has('perPage')) {
      if (changedProperties.has('perPage')) {
        this.page = 1;
      }

      if (this.hasUpdated) {
        this.dispatchEvent(
          new CustomEvent('pagechange', {
            detail: {
              page: this.page,
              perPage: this.perPage,
            },
          }),
        );
      }
    }

    this.notifyConsumers();
  }

  registerColumn(column: HTMLElement) {
    this.registeredColumns.add(column);
    this.requestUpdate();
  }

  unregisterColumn(column: HTMLElement) {
    this.registeredColumns.delete(column);
    this.requestUpdate();
  }

  private notifyConsumers() {
    this.provider.setValue(this, true);
  }

  firstUpdated() {
    this.setAttribute('role', 'table');

    new MutationObserver(() => {
      this.resetScroll();
    }).observe(this, { childList: true, subtree: true });
  }

  renderPagination() {
    const canBefore = this.page > 1;
    const canNext = this.page * this.perPage < this.totalItems;

    return html`
      <div class="pagination">
          <label for="perPage">
            Items per page: 
            <select
              id="perPage"
              @change="${this.handleUpdate}"
              name="perPage"
              value="${this.perPage}"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="100">100</option>
            </select>
          </label>

          <div>
            ${(this.page - 1) * this.perPage + 1} –
            ${Math.min(this.totalItems, this.page * this.perPage)} of
            ${this.totalItems}
          </div>

          <div>
              <button
                class="icon-button"
                @click="${this.handleFirstClick}"
                ?disabled="${!canBefore}"
              >${firstPage}</button>
            
              <button
                class="icon-button"
                @click="${this.handleBeforeClick}"
                ?disabled="${!canBefore}"
              >${chevronLeft}</button>
            
              <button
                class="icon-button"
                @click="${this.handleNextClick}"
                ?disabled="${!canNext}"
              >${chevronRight}</button>
            
              <button
                class="icon-button"
                @click="${this.handleLastClick}"
                ?disabled="${!canNext}"
              >${lastPage}</button>
          </div>
        </div>
      </div>
    `;
  }

  get isEmpty() {
    return this.defaultSlot?.assignedElements().length === 0;
  }

  render() {
    return html`
      <div class="filters"></div>

      <div class="container">
        ${when(
          this.loading,
          () => html`
            <div class="loader">
              <div class="spinner"></div>
            </div>
          `,
        )}
        <div
          class="${classMap({
            table: true,
            expandable: this.expandable,
          })}"
          style="${styleMap({
            '--column-count': this.registeredColumns.size,
            '--columns': this.columns,
          })}"
        >
          <div class="head">
            ${when(this.expandable, () => html`<div></div>`)}
            <slot name="head"></slot>
          </div>
          <slot></slot>
        </div>

        <slot name="caption">
          ${when(
            this.isEmpty,
            () => html`
              <dt-row>
                <dt-cell class="empty">No data available</dt-cell>
              </dt-row>
            `,
          )}
        </slot>
      </div>

      ${when(this.pagination, () => this.renderPagination())}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-table': Table;
  }
}
