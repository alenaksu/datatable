import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .spinner {
    width: var(--dt-spinner-size);
    max-width: 100%;
    aspect-ratio: 1 / 1;
    border: var(--dt-spinner-width) solid var(--dt-spinner-color);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
