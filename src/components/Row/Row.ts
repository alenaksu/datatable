import { LitElement, PropertyValues, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './Row.styles.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { consume } from '@lit/context';
import { TableContext, tableContext } from '../../lib/tableContext.js';
import chevronDown from '../../icons/chevronDown.js';
import commonStyles from '../../styles/common.styles.js';
import { ExpandChangeEvent } from '../../lib/events.js';
import chevronRight from '../../icons/chevronRight.js';

@customElement('dt-row')
export class TableRow extends LitElement {
  static styles = [commonStyles, styles];

  @property({ type: Boolean, reflect: true })
  expanded: boolean = false;

  @consume({ context: tableContext })
  table!: TableContext;

  @state()
  private loading = false;

  constructor() {
    super();
    this.setAttribute('role', 'row');
  }

  protected async updated(changedProperties: PropertyValues) {
    if (changedProperties.has('expanded')) {
      this.setAttribute('aria-expanded', String(this.expanded));
    }
  }

  private get hasDetailsSlot(): boolean {
    return this.querySelector(':scope > [slot="details"]') !== null;
  }

  private renderExpandIcon() {
    return this.expanded ? chevronDown : chevronRight;
  }

  async toggleExpanded(force?: boolean) {
    const newExpanded = force ?? !this.expanded;
    const expandChangeEvent = new ExpandChangeEvent({
      expanded: newExpanded,
    });
    this.dispatchEvent(expandChangeEvent);

    if (newExpanded) {
      this.loading = true;
      await expandChangeEvent.promise;
      this.loading = false;
    }

    this.expanded = newExpanded;
  }

  render() {
    return html`
      ${when(
        this.table?.expandable,
        () => html`
          <dt-cell class="expand-button">
            ${when(
              this.hasDetailsSlot && !this.loading,
              () => html`
                <button
                  class="button icon"
                  @click="${() => this.toggleExpanded()}"
                >
                  ${this.renderExpandIcon()}
                </button>
              `,
            )}
            ${when(this.loading, () => html` <dt-spinner class="loader"></dt-spinner> `)}
          </dt-cell>
        `,
      )}
      <slot></slot>
      ${when(
        this.table?.expandable,
        () => html`
          <div
            id="details"
            class="${classMap({ details: true, expanded: this.expanded })}"
          >
            <slot name="details"></slot>
          </div>
        `,
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-row': TableRow;
  }
}
