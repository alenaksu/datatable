import { css } from 'lit';

export default css`
  :where(:host) {
    /* Colors */
    --dt-color-primary-50: hsl(204 100% 97.1%);
    --dt-color-primary-100: hsl(204 93.8% 93.7%);
    --dt-color-primary-200: hsl(200.6 94.4% 86.1%);
    --dt-color-primary-300: hsl(199.4 95.5% 73.9%);
    --dt-color-primary-400: hsl(198.4 93.2% 59.6%);
    --dt-color-primary-500: hsl(198.6 88.7% 48.4%);
    --dt-color-primary-600: hsl(200.4 98% 39.4%);
    --dt-color-primary-700: hsl(201.3 96.3% 32.2%);
    --dt-color-primary-800: hsl(201 90% 27.5%);
    --dt-color-primary-900: hsl(202 80.3% 23.9%);
    --dt-color-primary-950: hsl(202.3 73.8% 16.5%);

    --dt-color-neutral-50: hsl(0 0% 97.5%);
    --dt-color-neutral-100: hsl(240 4.8% 95.9%);
    --dt-color-neutral-200: hsl(240 5.9% 90%);
    --dt-color-neutral-300: hsl(240 4.9% 83.9%);
    --dt-color-neutral-400: hsl(240 5% 64.9%);
    --dt-color-neutral-500: hsl(240 3.8% 46.1%);
    --dt-color-neutral-600: hsl(240 5.2% 33.9%);
    --dt-color-neutral-700: hsl(240 5.3% 26.1%);
    --dt-color-neutral-800: hsl(240 3.7% 15.9%);
    --dt-color-neutral-900: hsl(240 5.9% 10%);
    --dt-color-neutral-950: hsl(240 7.3% 8%);

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
`;
