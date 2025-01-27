import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .spinner {
    width: var(--dt-spinner-size);
    max-width: 100%;
    aspect-ratio: 1;
    border: var(--dt-spinner-width) solid var(--dt-spinner-track-color);
    border-right-color: var(--dt-spinner-bar-color);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: relative;
  }

  @keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }
`;
