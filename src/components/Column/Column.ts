import { LitElement, PropertyValues, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './Column.styles.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { consume } from '@lit/context';
import { TableContext, tableContext } from '../../lib/tableContext.js';
import commonStyles from '../../styles/common.styles.js';
import sortAsc from '../../icons/sortAsc.js';
import sortDesc from '../../icons/sortDesc.js';

@customElement('dt-column')
export class TableHeader extends LitElement {
  static styles = [commonStyles, styles];

  @property({ type: Boolean, reflect: true })
  sortable = false;

  @property({ type: Boolean, reflect: true })
  filterable = false;

  @property()
  name!: string;

  @consume({ context: tableContext, subscribe: true })
  table!: TableContext;

  constructor() {
    super();

    this.slot = 'head';
    this.setAttribute('role', 'columnheader');
  }

  protected updated(_changedProperties: PropertyValues): void {
    if (!this.name) {
      if (this.sortable || this.filterable) {
        throw new Error(
          `When setting a column as sortable or filterable, a name must be provided: ${this.outerHTML}`,
        );
      }
    }
  }

  renderSortIcon() {
    const sorted = this.table.sortBy === this.name;
    const icon = !sorted
      ? sortAsc
      : this.table.sortDirection === 'asc'
      ? sortAsc
      : sortDesc;

    return html`
      <button
        class="${classMap({
          'sort-icon': true,
          button: true,
          icon: true,
          sorted,
        })}"
      >
        ${icon}
      </button>
    `;
  }

  renderFilter() {
    return html`
      <slot name="filter">
        <div class="filter-input">
          <input
            type="text"
            name="${this.filterable!}"
            @change=${(e: Event) =>
              this.table.filter(
                this.name,
                (e.target as HTMLInputElement).value,
              )}
          />
        </div>
      </slot>
    `;
  }

  render() {
    return html`
      <div
        class="${classMap({
          container: true,
          sortable: this.sortable,
          filterable: this.filterable,
        })}"
      >
        <div
          class="label"
          @click="${this.sortable
            ? () => this.table.sort(this.name)
            : undefined}"
        >
          <slot></slot>
          ${when(this.sortable, () => this.renderSortIcon())}
        </div>

        ${when(this.filterable, () => this.renderFilter())}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-column': TableHeader;
  }
}
