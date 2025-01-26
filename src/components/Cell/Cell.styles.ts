import { css } from 'lit';

export default css`
  :host {
    display: contents;
  }

  .cell {
    display: flex;
    align-items: center;

    padding: var(--dt-cell-padding);
    font-size: var(--dt-cell-font-size);
    line-height: var(--dt-cell-line-height);
    white-space: var(--dt-cell-white-space);
    grid-column: span var(--span, 1);
  }
`;
