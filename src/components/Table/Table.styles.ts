import { css } from 'lit';
import theme from '../../styles/theme.styles.js';

export default css`
  ${theme}

  :host {
    display: flex;
    flex-direction: column;

    --dt-cell-padding: 1rem;
    --dt-cell-spacing: 0rem;
  }

  .container {
    overflow: auto;
    overscroll-behavior: contain;
    position: relative;
    flex-grow: 1;
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
    gap: var(--dt-table-pagination-gap);
    margin-top: var(--dt-table-pagination-margin);
  }

  .head {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;

    background-color: var(--dt-table-head-background);

    top: 0px;
    position: sticky;
  }

  .caption {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    font-style: var(--dt-table-caption-font-style);
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
