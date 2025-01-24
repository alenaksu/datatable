import { LitElement, PropertyValueMap, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import styles from './Table.styles.js';
import commonStyles from '../../styles/common.styles.js';

import { TableContext, tableContext } from '../../lib/tableContext.js';
import { when } from 'lit/directives/when.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ContextProvider } from '@lit/context';
import { classMap } from 'lit/directives/class-map.js';
import firstPage from '../../icons/firstPage.js';
import chevronLeft from '../../icons/chevronLeft.js';
import chevronRight from '../../icons/chevronRight.js';
import lastPage from '../../icons/lastPage.js';
import { FilterEvent, PageChangeEvent, SortEvent } from '../../lib/events.js';
import { SortDirection } from '../../types.js';
import { delayed } from '../../lib/template.js';

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
  sortDirection: SortDirection = 'asc';

  @property()
  columns?: string;

  @query('slot:not([name])')
  defaultSlot!: HTMLSlotElement;

  @query('slot[name=head]')
  headSlot!: HTMLSlotElement;

  @query('.container')
  container!: HTMLDivElement;

  @state()
  private columnCount = 0;

  private provider: ContextProvider<{
    __context__: TableContext;
  }> = new ContextProvider(this, {
    context: tableContext,
    initialValue: this,
  });

  constructor() {
    super();

    this.setAttribute('role', 'table');
  }

  private handleBeforeClick() {
    this.page--;
  }

  private handleNextClick() {
    this.page++;
  }

  private handleFirstClick() {
    this.page = 1;
  }

  private handleLastClick() {
    this.page = Math.ceil(this.totalItems / this.perPage);
  }

  private handleUpdatePerPage(e: Event) {
    const target = e.target as HTMLInputElement;
    this.setAttribute(target.name, target.value);
  }

  private resetScroll() {
    this.container.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  protected async willUpdate(changedProperties: PropertyValueMap<Table>) {
    if (changedProperties.has('page') || changedProperties.has('perPage')) {
      if (changedProperties.has('perPage')) {
        this.page = 1;
      }

      if (this.hasUpdated) {
        this.dispatchEvent(
          new PageChangeEvent({ page: this.page, perPage: this.perPage }),
        );
      }
    }

    this.notifyConsumers();
  }

  private notifyConsumers() {
    this.provider.setValue(this, true);
  }

  private updateColumns() {
    this.columnCount = this.headSlot.assignedElements().length;
  }

  protected firstUpdated() {
    this.updateColumns();
    
    new MutationObserver(() => {
      this.resetScroll();
    }).observe(this, { childList: true, subtree: true });
  }

  get isEmpty() {
    return this.defaultSlot?.assignedElements().length === 0;
  }

  sort(by: string, direction?: SortDirection) {
    this.sortDirection =
      direction || (this.sortDirection === 'asc' ? 'desc' : 'asc');
    this.sortBy = by;

    this.dispatchEvent(
      new SortEvent({ sortBy: by, sortDirection: this.sortDirection }),
    );
  }

  filter(filterBy: string, criteria: string) {
    this.dispatchEvent(new FilterEvent({ filterBy, criteria }));
  }

  private renderPagination() {
    const canBefore = this.page > 1;
    const canNext = this.page * this.perPage < this.totalItems;

    return html`
      <div class="pagination">
          <label for="perPage">
            Items per page: 
            <select
              id="perPage"
              @change="${this.handleUpdatePerPage}"
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

  render() {
    return html`
      <div class="filters"></div>

      <div class="container">
        <div
          class="${classMap({
            table: true,
            expandable: this.expandable,
          })}"
          style="${styleMap({
            '--column-count': this.columnCount,
            '--columns': this.columns,
          })}"
        >
          <div class="head">
            ${when(this.expandable, () => html`<div></div>`)}
            <slot name="head" @slotchange="${this.updateColumns}"></slot>

            ${when(this.loading, () =>
              delayed(html`<dt-progress-bar class="loader"></dt-progress-bar>`),
            )}
          </div>
          <slot></slot>
        </div>

        <div class="caption">
          <slot name="caption">
            ${when(this.isEmpty, () => html` No data available `)}
          </slot>
        </div>
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
