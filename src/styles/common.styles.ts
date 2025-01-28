import { css } from 'lit';

export default css`
  .button {
    cursor: pointer;

    padding: var(--dt-spacing-s);

    border-radius: var(--dt-button-border-radius);
    border-style: var(--dt-button-border-style);
    border-width: var(--dt-button-border-width);
    transition: var(--dt-button-transition);

    font-family: var(--dt-button-font-family);
    font-size: var(--dt-button-font-size);
    font-weight: var(--dt-button-font-weight);
    line-height: var(--dt-button-line-height);

    color: var(--dt-button-color);
    background-color: var(--dt-button-background-color);
    border-color: var(--dt-button-border-color);
  }

  .button.icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    line-height: 0;
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .button:not(:disabled):hover {
    background-color: var(--dt-button-hover-background-color);
    border-color: var(--dt-button-hover-border-color);
    color: var(--dt-button-hover-color);
  }

  .button:not(:disabled):active {
    background-color: var(--dt-button-active-background-color);
    border-color: var(--dt-button-active-border-color);
    color: var(--dt-button-active-color);
  }

  .button.icon > * {
    width: var(--dt-font-size-m);
    height: var(--dt-font-size-m);
  }

  input {
    padding: var(--dt-spacing-s) var(--dt-spacing-m);
    border: 1px solid var(--dt-color-neutral-200);
    border-radius: 3px;
  }

  select {
    cursor: pointer;
    padding: var(--dt-spacing-s) var(--dt-spacing-m);
    border: 0;
    border: 1px solid var(--dt-color-neutral-200);
    color: var(--dt-color-neutral-900);
    background: none;
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
    background: var(--dt-color-neutral-400);
    padding: 0 var(--dt-spacing-xs);
    width: 24px;
    bottom: 0;
    top: 0;
    right: 0;
    cursor: pointer;
    pointer-events: none;
  }
`;
