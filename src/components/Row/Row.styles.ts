import { css } from 'lit';

export default css`
  :host {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;

    background-color: var(--dt-row-background-color);
    transition: var(--dt-row-transition);
    border-top: var(--dt-row-border-width) var(--dt-row-border-style)
      var(--dt-row-border-color);
  }

  :host(:hover) {
    background-color: var(--dt-row-hover-background-color);
  }

  :host([expanded]) {
  }

  .expand-button {
    padding-block: 0;
    padding-inline: var(--dt-spacing-s);
  }

  .expand-button button {
    transition: transform var(--dt-transition-fast);
  }

  .expand-button.expanded button {
    transform: rotate(90deg);
  }

  .loader {
    height: 30px;
    width: 30px;
    padding: var(--dt-spacing-s);
    box-sizing: border-box;
  }

  .details {
    grid-column: 1 / -1;
    overflow: hidden;
    padding: var(--dt-spacing-m);
  }

  .details:not(.expanded) {
    display: none;
  }
`;
