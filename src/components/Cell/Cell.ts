import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './Cell.styles.js';

@customElement('dt-cell')
export class TableCell extends LitElement {
  static styles = [styles];

  protected firstUpdated(): void {
    this.setAttribute('role', 'cell');
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-cell': TableCell;
  }
}