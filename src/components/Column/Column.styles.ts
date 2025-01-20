import { css } from 'lit';

export default css`
  :host {
    display: flex;
    align-items: flex-start;

    padding: var(--spacing-medium);
    font-family: var(--font-sans);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-small);
    line-height: var(--line-height-dense);

    white-space: nowrap;
  }

  .container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: var(--spacing-2x-small);
  }

  .sortable {
  }

  .label {
    display: flex;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
  }

  .sort-icon {
    padding: var(--spacing-2x-small);
    transition: opacity ease-in-out var(--transition-fast);
  }

  .sort-icon.sorted {
    opacity: 1;
  }

  .label:hover .sort-icon.sorted {
    color: var(--color-primary-600);
  }

  .label:hover .sort-icon {
    opacity: 1;
  }

  .filter-input {
    position: relative;
  }

  .filter-input > input {
    padding: var(--spacing-x-small);
    padding-left: calc(var(--spacing-x-small) + 24px);
  }

  .filter-input::before {
    content: '';
    background: var(--color-neutral-500);
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/></svg>')
      50% 50% no-repeat;

    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: var(--spacing-x-small);
    aspect-ratio: 1 / 1;
  }
`;
