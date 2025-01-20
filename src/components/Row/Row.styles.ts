import { css } from 'lit';

export default css`
  :host {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;

    background-color: var(--color-neutral-0);
    transition: background-color var(--transition-fast);
    border-top: 1px solid var(--color-neutral-200);
    cursor: pointer;
  }

  :host(:hover) {
    background-color: var(--color-neutral-100);
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