import { css } from 'lit';

export default css`
  .icon-button {
    background: transparent;
    border: 0;
    line-height: 0;
    cursor: pointer;
    color: var(--dt-text-1);
    padding: var(--dt-spacing-s);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    transition: var(--dt-transition-fast);
  }

  .icon-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .icon-button:hover {
    background-color: var(--dt-primary-surface-2);
    color: var(--dt-primary-text-1);
  }

  .icon-button:active {
    background-color: var(--dt-primary-surface-1);
    color: var(--dt-primary-text-1);
  }

  .icon-button > * {
    width: var(--dt-font-size-m);
    height: var(--dt-font-size-m);
  }

  input {
    padding: var(--dt-spacing-s) var(--dt-spacing-m);
    border: 1px solid var(--dt-surface-2);
    border-radius: 3px;
  }

  select {
    cursor: pointer;
    padding: var(--dt-spacing-s) var(--dt-spacing-m);
    border: 0;
    border: 1px solid var(--dt-surface-2);
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
    padding-right: calc(var(--dt-spacing-m) + var(--dt-spacing-xs) * 2 + 24px);
  }

  label:has(select) {
    display: flex;
    align-items: center;
    gap: var(--dt-spacing-s);
    position: relative;
  }

  label:has(select)::after {
    content: '';
    position: absolute;
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>')
      50% 50% no-repeat;
    background: var(--dt-surface-3);
    padding: 0 var(--dt-spacing-xs);
    width: 24px;
    bottom: 0;
    top: 0;
    right: 0;
    cursor: pointer;
    pointer-events: none;
  }
`;
