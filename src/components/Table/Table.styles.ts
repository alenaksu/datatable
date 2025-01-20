import { css } from 'lit';
import theme from '../../styles/theme.styles.js';

export default css`
  ${theme}

  :host {
    display: block;

    --max-table-height: 70vh;
    --height: auto;
  }

  .container {
    max-height: var(--max-table-height);
    height: var(--height);
    overflow: auto;
    overscroll-behavior: contain;
    position: relative;
  }

  .table {
    --min-width: min-content;
    --max-width: auto;
    --column-count: 0;
    --columns: repeat(
      var(--column-count),
      minmax(var(--min-width), var(--max-width))
    );

    --grid-columns: var(--columns);

    display: grid;
    grid-template-columns: var(--grid-columns);
    text-align: left;
    width: 100%;
    border: none;
    border-collapse: collapse;
    box-sizing: border-box;
  }

  .table.expandable {
    --grid-columns: min-content var(--columns);
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--spacing-2x-large);
    margin-top: var(--spacing-medium);
  }

  .pagination > *::part(form-control) {
    display: flex;
    gap: var(--spacing-small);
    align-items: center;
  }

  .pagination > *::part(form-control-label) {
    text-align: right;
  }

  .pagination sl-icon-button {
    font-size: var(--font-size-x-large);
  }

  .pagination sl-select::part(display-input) {
    max-width: 2rem;
  }

  slot[name='caption'] > dt-row,
  slot[name='caption']::slotted(dt-row) {
    grid-column: 1 / -1;
    font-style: italic;
  }

  .head {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;

    background-color: var(--color-neutral-50);

    top: 0px;
    position: sticky;
  }

  .loader {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: color-mix(
      in oklch,
      var(--color-neutral-500),
      transparent 20%
    );
  }

  .spinner {
    width: 64px;
    height: 64px;
    border: 2px solid var(--color-neutral-0);
    border-bottom-color: var(--color-neutral-500);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
