import { css, unsafeCSS } from 'lit';

const swatches = [
  0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000,
];

const colors = [
  [1, 0],
  [0.96, 0.02],
  [0.93, 0.04],
  [0.87, 0.07],
  [0.79, 0.11],
  [0.68, 0.17],
  [0.59, 0.23],
  [0.5, 0.28],
  [0.48, 0.29],
  [0.43, 0.24],
  [0.38, 0.18],
  [0.26, 0.12],
  [0, 0],
];

const generateSwatches = (swatches: number[], colors: number[][]) =>
  [...colors]
    .map(
      ([l, c], index) => `
    --dt-color-primary-${
      swatches[index]
    }: oklch(from var(--dt-color-primary) ${(l * 100).toFixed(
        1,
      )}% calc(min(${c}, c)) h);
    --dt-color-accent-${swatches[index]}: oklch(from var(--dt-color-accent) ${(
        l * 100
      ).toFixed(1)}% calc(min(${c}, c)) h);
    --dt-color-neutral-${
      swatches[index]
    }: oklch(from var(--dt-color-neutral) ${(l * 100).toFixed(
        1,
      )}% calc(min(${c}, c)) h);
  `,
    )
    .join('\n');

export default css`
  :where(:host) {
    color-scheme: light;

    /* Colors */
    --dt-color-primary: hsl(201, 100%, 28.8%);
    --dt-color-accent: hsl(189, 100%, 77%);
    --dt-color-neutral: hsl(0, 0%, 55%);

    ${unsafeCSS(generateSwatches(swatches, colors))}

    /* Transition */
    --dt-transition-fast: 150ms;
    --dt-transition-medium: 350ms;
    --dt-transition-slow: 600ms;

    /* Spacing */
    --dt-spacing-xs: 0.25rem;
    --dt-spacing-s: 0.5rem;
    --dt-spacing-m: 1rem;
    --dt-spacing-l: 1.5rem;
    --dt-spacing-xl: 1.75rem;

    /* Font size*/
    --dt-font-size-xs: 0.5rem;
    --dt-font-size-s: 0.75rem;
    --dt-font-size-m: 1rem;
    --dt-font-size-l: 1.25rem;
    --dt-font-size-xl: 1.5rem;

    /* Font family */
    --dt-font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
      Cantarell, Noto Sans, sans-serif;
    --dt-font-serif: ui-serif, serif;
    --dt-font-mono: Dank Mono, Operator Mono, Inconsolata, Fira Mono,
      ui-monospace, SF Mono, Monaco, Droid Sans Mono, Source Code Pro, monospace;

    /* Font weight */
    --dt-font-weight-light: 300;
    --dt-font-weight-normal: 400;
    --dt-font-weight-semibold: 500;
    --dt-font-weight-bold: 700;

    /* Line height */
    --dt-line-height-dense: 1.2;
    --dt-line-height-normal: 1.6;
    --dt-line-height-loose: 2.133;

    /* Table */
    --dt-table-background: var(--dt-color-neutral-50);
    --dt-table-color: var(--dt-color-neutral-900);

    /* Pagination */
    --dt-table-pagination-gap: var(--dt-spacing-xl);
    --dt-table-pagination-margin: var(--dt-spacing-m);
    --dt-table-pagination-font-family: var(--dt-font-sans);
    --dt-table-pagination-padding: var(--dt-spacing-m);

    /* Caption */
    --dt-table-caption-font-style: italic;
    --dt-table-caption-padding: var(--dt-spacing-m);

    /* Cell */
    --dt-cell-padding: var(--dt-spacing-s);
    --dt-cell-font-size: var(--dt-font-size-m);
    --dt-cell-line-height: var(--dt-line-height-loose);
    --dt-cell-white-space: nowrap;

    /* Head */
    --dt-table-head-background: var(--dt-color-neutral-200);

    /* Column Header */
    --dt-column-header-padding: var(--dt-spacing-s);
    --dt-column-header-font-family: var(--dt-font-sans);
    --dt-column-header-font-weight: var(--dt-font-weight-bold);
    --dt-column-header-font-size: var(--dt-font-size-s);
    --dt-column-header-line-height: var(--dt-line-height-loose);
    --dt-column-header-color: var(--dt-color-neutral-700);
    --dt-column-header-white-space: nowrap;

    /* Row */
    --dt-row-background-color: transparent;
    --dt-row-hover-background-color: var(--dt-color-neutral-50);
    --dt-row-transition: background-color var(--dt-transition-fast);
    --dt-row-border-color: var(--dt-color-neutral-100);
    --dt-row-border-width: 1px;
    --dt-row-border-style: solid;
    --dt-row-details-padding: var(--dt-spacing-s);

    /* Progress Bar */
    --dt-progress-bar-color: var(--dt-color-primary-500);
    --dt-progress-bar-background: var(--dt-neutra-200);
    --dt-progress-bar-height: 4px;
    --dt-progress-bar-width: 70%;

    /* Spinner */
    --dt-spinner-size: 48px;
    --dt-spinner-width: 2px;
    --dt-spinner-bar-color: var(--dt-color-primary-500);
    --dt-spinner-track-color: var(--dt-color-neutral-200);

    /* Button */
    --dt-button-padding: var(--dt-spacing-s);
    --dt-button-font-family: var(--dt-font-sans);
    --dt-button-font-size: var(--dt-font-size-m);
    --dt-button-font-weight: var(--dt-font-weight-semibold);
    --dt-button-line-height: var(--dt-line-height-normal);
    --dt-button-border-radius: 3px;
    --dt-button-border-width: 0;
    --dt-button-border-style: solid;
    --dt-button-transition: var(--dt-transition-fast) background-color,
      var(--dt-transition-fast) color, var(--dt-transition-fast) border-color;

    --dt-button-background-color: transparent;
    --dt-button-border-color: var(--dt-color-primary-700);
    --dt-button-color: var(--dt-color-netrual-800);

    --dt-button-hover-background-color: var(--dt-color-primary-100);
    --dt-button-hover-border-color: var(--dt-color-primary-400);
    --dt-button-hover-color: var(--dt-color-primary-800);

    --dt-button-active-background-color: var(--dt-color-primary-200);
    --dt-button-active-border-color: var(--dt-color-primary-500);
    --dt-button-active-color: var(--dt-color-primary-900);

    /* Input */
    --dt-input-padding: var(--dt-spacing-s);
    --dt-input-border-width: 1px;
    --dt-input-border-style: solid;
    --dt-input-border-color: var(--dt-color-neutral-200);
    --dt-input-border-radius: 3px;
    --dt-iinput-background-color: var(--dt-color-neutral-0);
    --dt-input-color: var(--dt-color-neutral-900);

    /* Select */
    --dt-select-padding: var(--dt-spacing-s);
    --dt-select-border-width: 1px;
    --dt-select-border-style: solid;
    --dt-select-border-color: var(--dt-color-neutral-200);
    --dt-select-border-radius: 3px;
    --dt-select-background-color: var(--dt-color-neutral-0);
    --dt-select-color: var(--dt-color-neutral-900);
  }

  @media (prefers-color-scheme: dark) {
    :where(:host) {
      color-scheme: dark;
      ${unsafeCSS(generateSwatches([...swatches].reverse(), colors))}
    }
  }
`;
