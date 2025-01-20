import { css } from 'lit';

export default css`
  :host {
    display: flex;
    align-items: center;

    padding: var(--spacing-medium);
    font-size: var(--font-size-medium);
    line-height: var(--line-height-dense);
    white-space: nowrap;
    vertical-align: middle;
  }
`;