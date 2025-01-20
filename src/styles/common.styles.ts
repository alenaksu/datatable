import { css } from 'lit';

export default css`
  .icon-button {
    background: transparent;
    border: 0;
    padding: 0;
    line-height: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: var(--color-neutral-600);
    padding: var(--spacing-2x-small);
  }

  .icon-button > svg {
    width: 100%;
    height: 100%;
  }

  input {
    padding: var(--spacing-x-small) var(--spacing-medium);
    border: 1px solid var(--color-neutral-200);
    border-radius: 3px;
  }

  select {
    cursor: pointer;
    padding: var(--spacing-x-small) var(--spacing-medium);
    border: 0;
    border: 1px solid var(--color-neutral-200);
    position: relative;
    vertical-align: middle;
    border-radius: 3px;
  }

  select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  label > select {
    appearance: none;
    padding-right: calc(var(--spacing-medium) + var(--spacing-2x-small) * 2 + 24px);
  }

  label:has(select) {
    display: flex;
    align-items: center;
    gap: var(--spacing-x-small);
    position: relative;
  }

  label:has(select)::after {
    content: '';
    position: absolute;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>')
      50% 50% no-repeat;
    background: var(--color-neutral-600);
    padding: 0 var(--spacing-2x-small);
    width: 24px;
    bottom: 0;
    top: 0;
    right: 0;
    cursor: pointer;
    pointer-events: none;
  }
`;
