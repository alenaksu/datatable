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

  .details {
    grid-column: 1 / -1;
    overflow: hidden;
    padding: var(--spacing-small);
  }

  .details:not(.expanded) {
    display: none;
  }
`;
