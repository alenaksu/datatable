import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }
  
  .progress-bar {
    height: var(--dt-progress-bar-height);
    position: relative;
    background: var(--dt-progress-bar-background);
    overflow: hidden;
  }

  .progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: var(--dt-progress-bar-width);
    height: var(--dt-progress-bar-height);
    background: var(--dt-progress-bar-color);
    box-sizing: border-box;
    animation: progress-animation 2s cubic-bezier(0.44, 0, 0.56, 1) infinite;
  }

  @keyframes progress-animation {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;
