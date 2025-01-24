import { TemplateResult } from 'lit';
import { until } from 'lit/directives/until.js';

/**
 * Waits for a given amount of time before resolving.
 */
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Delays the rendering of a template by a given amount of time.
 */
export const delayed = (template: TemplateResult, ms: number = 500) =>
  until(wait(ms).then(() => Promise.resolve(template)));
