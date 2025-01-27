import { css } from 'lit';

export default css`
  .container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: var(--dt-spacing-xs);
    padding: var(--dt-column-header-padding);
    height: 100%;
    box-sizing: border-box;
  }

  .label {
    display: flex;
    align-items: center;
    height: 100%;

    gap: var(--dt-spacing-xs);
    color: var(--dt-column-header-color);
    font-family: var(--dt-column-header-font-family);
    font-weight: var(--dt-column-header-font-weight);
    font-size: var(--dt-column-header-font-size);
    line-height: var(--dt-column-header-line-height);
    white-space: var(--dt-column-header-white-space);

    text-transform: uppercase;
    
  }

  .sortable .label {
    cursor: pointer;
  }

  .sort-icon {
    transition: opacity ease-in-out var(--dt-transition-fast);
    opacity: 0;
  }

  .sort-icon.sorted {
    opacity: 1;
  }

  .label:hover .sort-icon.sorted {
    color: var(--dt-color-neutral-700);
  }

  .label:hover .sort-icon {
    opacity: 1;
  }

  .filter-input {
    position: relative;
  }

  .filter-input > input {
    padding: var(--dt-spacing-s);
    padding-left: calc(var(--dt-spacing-s) + 24px);
  }

  .filter-input::before {
    content: '';
    background: var(--dt-color-neutral-400);
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/></svg>')
      50% 50% no-repeat;

    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: var(--dt-spacing-s);
    aspect-ratio: 1 / 1;
  }
`;
