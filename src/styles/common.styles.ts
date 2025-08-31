import { css } from 'lit';

export default css`
  .button {
    cursor: pointer;

    padding: var(--dt-button-padding);

    outline: inherit;

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
    height: 30px;
    width: 30px;
    border-radius: 50%;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: var(--dt-button-icon-size);
    height: var(--dt-button-icon-size);
  }

  input {
    padding: var(--dt-input-padding);
    border: var(--dt-input-border-width) var(--dt-input-border-style)
      var(--dt-input-border-color);
    border-radius: var(--dt-input-border-radius);
    background-color: var(--dt-input-background-color);
    color: var(--dt-input-color);
  }

  select {
    cursor: pointer;
    padding: var(--dt-select-padding);
    border-width: var(--dt-select-border-width);
    border-style: var(--dt-select-border-style);
    border-color: var(--dt-select-border-color);
    border-radius: var(--dt-select-border-radius);
    background-color: var(--dt-select-background-color);
    color: var(--dt-select-color);
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
    background: color-mix(in srgb, currentColor 50%, transparent 0%);
    padding: 0 var(--dt-spacing-xs);
    width: 24px;
    bottom: 0;
    top: 0;
    right: 0;
    cursor: pointer;
    pointer-events: none;
  }
`;
