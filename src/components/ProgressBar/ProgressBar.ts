import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './ProgressBar.styles.js';

@customElement('dt-progress-bar')
export class ProgressBar extends LitElement {
  static styles = [styles];

  render() {
    return html`<div class="progress-bar"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dt-progress-bar': ProgressBar;
  }
}
