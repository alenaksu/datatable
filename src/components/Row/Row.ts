import { LitElement, PropertyValues, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./Row.styles";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { consume } from "@lit/context";
import { TableContext, tableContext } from "../../tableContext";
import chevronUp from "../../icons/chevronUp";
import chevronDown from "../../icons/chevronDown";
import commonStyles from "../../styles/common.styles";

@customElement("dt-row")
export class TableRow extends LitElement {
  static styles = [commonStyles, styles];

  @property({ type: Boolean, reflect: true })
  expanded: boolean = false;

  @consume({ context: tableContext })
  table!: TableContext;

  protected firstUpdated(): void {
    this.setAttribute("role", "row");
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has("expanded")) {
      this.setAttribute("aria-expanded", String(this.expanded));
    }
  }

  private get hasDetailsSlot(): boolean {
    return this.querySelector(':scope > [slot="details"]') !== null;
  }

  render() {
    return html`
      ${when(
        this.table?.expandable,
        () => html`
          <dt-cell>
            ${when(
              this.hasDetailsSlot,
              () => html`
                <button
                  class="icon-button"
                  @click=${() => (this.expanded = !this.expanded)}
                  aria-expanded=${this.expanded}
                  aria-label=${this.expanded ? "Collapse" : "Expand"}
                  aria-controls="details"
                >
                  ${when(this.expanded, () => chevronUp, () => chevronDown)}
                  </button>
              `
            )}
          </dt-cell>
        `
      )}
      <slot></slot>
      ${when(
        this.table?.expandable,
        () => html`
          <div id="details" class="${classMap({ details: true, expanded: this.expanded })}">
            <slot name="details"></slot>
          </div>
        `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dt-row": TableRow;
  }
}
