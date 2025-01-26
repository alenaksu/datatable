import { css, unsafeCSS } from 'lit';

const colors = [
  [50, 98.5],
  [100, 97],
  [200, 92.2],
  [300, 87],
  [400, 70.8],
  [500, 55.6],
  [600, 43.9],
  [700, 37.1],
  [800, 26.9],
  [900, 20.5],
  [950, 14.5],
];

export default css`
  :where(:host) {
    color-scheme: light;

    /* Colors */
    --dt-color-primary: hsl(180, 33%, 51%);
    --dt-color-accent: hsl(189, 100%, 77%);
    --dt-color-neutral: hsl(0, 0%, 55%);

    ${unsafeCSS(
      colors
        .map(
          ([value, lightness]) => `
          --dt-color-primary-${value}: hsl(from var(--dt-color-primary) h s ${lightness}%);
          --dt-color-accent-${value}: hsl(from var(--dt-color-accent) h s ${lightness}%);
          --dt-color-neutral-${value}: hsl(from var(--dt-color-neutral) h s ${lightness}%);
        `,
        )
        .join('\n'),
    )}

    --dt-text-1: var(--dt-color-neutral-900);
    --dt-text-2: var(--dt-color-neutral-700);

    --dt-primary-text-1: var(--dt-color-primary-900);
    --dt-primary-text-2: var(--dt-color-primary-700);

    --dt-surface-1: var(--dt-color-neutral-50);
    --dt-surface-2: var(--dt-color-neutral-100);
    --dt-surface-3: var(--dt-color-neutral-400);
    --dt-surface-4: var(--dt-color-neutral-600);

    --dt-primary-surface-1: var(--dt-color-primary-50);
    --dt-primary-surface-2: var(--dt-color-primary-100);
    --dt-primary-surface-3: var(--dt-color-primary-400);
    --dt-primary-surface-4: var(--dt-color-primary-600);

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
    --dt-table-background: var(--dt-surface-1);

    /* Pagination */
    --dt-table-pagination-gap: var(--dt-spacing-xl);
    --dt-table-pagination-margin: var(--dt-spacing-m);
    --dt-table-pagination-font-family: var(--dt-font-sans);

    /* Caption */
    --dt-table-caption-font-style: italic;
    --dt-table-caption-padding: var(--dt-spacing-m);

    /* Cell */
    --dt-cell-padding: var(--dt-spacing-s);
    --dt-cell-font-size: var(--dt-font-size-m);
    --dt-cell-line-height: var(--dt-line-height-loose);
    --dt-cell-white-space: nowrap;

    /* Head */
    --dt-table-head-background: var(--dt-surface-2);

    /* Column Header */
    --dt-column-header-padding: var(--dt-spacing-s);
    --dt-column-header-font-family: var(--dt-font-sans);
    --dt-column-header-font-weight: var(--dt-font-weight-bold);
    --dt-column-header-font-size: var(--dt-font-size-s);
    --dt-column-header-line-height: var(--dt-line-height-loose);
    --dt-column-header-color: var(--dt-text-2);
    --dt-column-header-white-space: nowrap;

    /* Row */
    --dt-row-background-color: transparent;
    --dt-row-hover-background-color: var(--dt-surface-1);
    --dt-row-transition: background-color var(--dt-transition-fast);
    --dt-row-border-color: var(--dt-surface-2);
    --dt-row-border-width: 1px;
    --dt-row-border-style: solid;
    --dt-row-details-padding: var(--dt-spacing-s);

    /* Progress Bar */
    --dt-progress-bar-color: var(--dt-text-2);
    --dt-progress-bar-background: var(--dt-surface-1);
    --dt-progress-bar-height: 4px;
    --dt-progress-bar-width: 70%;

    /* Spinner */
    --dt-spinner-size: 48px;
    --dt-spinner-width: 2px;
    --dt-spinner-color: var(--dt-primary-text-2);
  }

  :where(:host) {
    color-scheme: dark;
    ${unsafeCSS(
      [...colors]
        .reverse()
        .map(
          ([_, lightness], index) => `
            --dt-color-primary-${colors[index][0]}: hsl(from var(--dt-color-primary) h s ${lightness}%);
            --dt-color-accent-${colors[index][0]}: hsl(from var(--dt-color-accent) h s ${lightness}%);
            --dt-color-neutral-${colors[index][0]}: hsl(from var(--dt-color-neutral) h s ${lightness}%);
          `,
        )
        .join('\n'),
    )}
  }
`;
