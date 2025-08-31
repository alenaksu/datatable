import { css } from 'lit';

export default css`
  :host {
    display: flex;
    flex-direction: column;
    position: relative;

    color: var(--dt-table-color);
    background-color: var(--dt-table-background);
  }

  .container {
    overflow: auto;
    overscroll-behavior: contain;
    position: relative;
    flex-grow: 1;
  }

  .head {
    animation: scroll-shadow-sticky linear forwards;
    animation-timeline: scroll(nearest block);
    z-index: 1;
  }

  @keyframes scroll-shadow-sticky {
    /* start with no shadow */
    0% {
      box-shadow: none;
    }

    /* end with shadow pushing out right */
    10% {
      box-shadow: 0 3px 5px -2px hsl(220 40% 2% / calc(10% + 3%)),
        0 7px 14px -5px hsl(220 40% 2% / calc(10% + 5%));
    }

    100% {
      box-shadow: 0 3px 5px -2px hsl(220 40% 2% / calc(10% + 3%)),
        0 7px 14px -5px hsl(220 40% 2% / calc(10% + 5%));
    }
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
    width: 100%;
    border-collapse: collapse;
    box-sizing: border-box;
  }

  .table.expandable {
    --grid-columns: minmax(min-content, 50px) var(--columns);
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--dt-table-pagination-gap);
    margin-top: var(--dt-table-pagination-margin);
    padding: var(--dt-table-pagination-padding);
    font-family: var(--dt-table-pagination-font-family);
  }

  .controls {
    display: flex;
    gap: var(--dt-table-controls-gap);
  }

  .head {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;

    background-color: var(--dt-table-head-background);

    top: 0px;
    position: sticky;
    align-items: flex-start;
  }

  .caption {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    padding: var(--dt-table-caption-padding);
    font-style: var(--dt-table-caption-font-style);
  }

  .loader {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .s-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: color-mix(in oklab, var(--dt-table-background), transparent 50%);
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
