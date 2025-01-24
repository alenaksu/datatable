import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './Spinner.styles.js';

@customElement('dt-spinner')
export class Spinner extends LitElement {
  static styles = [styles];

  render() {
    return html`<div class="spinner"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-spinner': Spinner;
  }
}
