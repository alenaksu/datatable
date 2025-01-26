import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './Cell.styles.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('dt-cell')
export class TableCell extends LitElement {
  static styles = [styles];

  @property({ type: Number })
  span = 1;

  constructor() {
    super();
    this.setAttribute('role', 'cell');
  }

  render() {
    return html`
      <div class="cell" style="${styleMap({ '--span': this.span })}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-cell': TableCell;
  }
}
