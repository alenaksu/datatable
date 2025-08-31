import { css as h, unsafeCSS as z, svg as g, LitElement as v, html as l } from "lit";
import { property as d, query as C, state as O, customElement as m } from "lit/decorators.js";
import { createContext as L, ContextProvider as I, consume as S } from "@lit/context";
import { when as p } from "lit/directives/when.js";
import { styleMap as M } from "lit/directives/style-map.js";
import { classMap as f } from "lit/directives/class-map.js";
import { until as T } from "lit/directives/until.js";
const B = [
  0,
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950,
  1e3
], D = [
  [1, 0],
  [0.96, 0.02],
  [0.93, 0.04],
  [0.87, 0.07],
  [0.79, 0.11],
  [0.68, 0.17],
  [0.59, 0.23],
  [0.5, 0.28],
  [0.48, 0.29],
  [0.43, 0.24],
  [0.38, 0.18],
  [0.26, 0.12],
  [0, 0]
], E = (e, t) => [...t].map(
  ([a, r], o) => `
    --dt-color-primary-${e[o]}: oklch(from var(--dt-color-primary) ${(a * 100).toFixed(
    1
  )}% calc(min(${r}, c)) h);
    --dt-color-accent-${e[o]}: oklch(from var(--dt-color-accent) ${(a * 100).toFixed(1)}% calc(min(${r}, c)) h);
    --dt-color-neutral-${e[o]}: oklch(from var(--dt-color-neutral) ${(a * 100).toFixed(
    1
  )}% calc(min(${r}, c)) h);
  `
).join(`
`), A = h`
  :where(:host) {
    color-scheme: light;

    /* Colors */
    --dt-color-primary: hsl(201, 100%, 28.8%);
    --dt-color-accent: hsl(189, 100%, 77%);
    --dt-color-neutral: hsl(0, 0%, 55%);

    ${z(E(B, D))}

    /* Transition */
    --dt-transition-fast: 150ms;
    --dt-transition-medium: 350ms;
    --dt-transition-slow: 600ms;

    /* Spacing */
    --dt-spacing-xs: 0.25rem;
    --dt-spacing-s: 0.5rem;
    --dt-spacing-m: 1rem;
    --dt-spacing-l: 1.5rem;
    --dt-spacing-xl: 1.75rem;

    /* Font size*/
    --dt-font-size-xs: 0.5rem;
    --dt-font-size-s: 0.75rem;
    --dt-font-size-m: 1rem;
    --dt-font-size-l: 1.25rem;
    --dt-font-size-xl: 1.5rem;

    /* Font family */
    --dt-font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
      Cantarell, Noto Sans, sans-serif;
    --dt-font-serif: ui-serif, serif;
    --dt-font-mono: Dank Mono, Operator Mono, Inconsolata, Fira Mono,
      ui-monospace, SF Mono, Monaco, Droid Sans Mono, Source Code Pro, monospace;

    /* Font weight */
    --dt-font-weight-light: 300;
    --dt-font-weight-normal: 400;
    --dt-font-weight-semibold: 500;
    --dt-font-weight-bold: 700;

    /* Line height */
    --dt-line-height-dense: 1.2;
    --dt-line-height-normal: 1.6;
    --dt-line-height-loose: 2.133;

    /* Table */
    --dt-table-background: var(--dt-color-neutral-50);
    --dt-table-color: var(--dt-color-neutral-900);

    /* Pagination */
    --dt-table-pagination-gap: var(--dt-spacing-xl);
    --dt-table-pagination-margin: var(--dt-spacing-m);
    --dt-table-pagination-font-family: var(--dt-font-sans);
    --dt-table-pagination-padding: var(--dt-spacing-m);

    /* Caption */
    --dt-table-caption-font-style: italic;
    --dt-table-caption-padding: var(--dt-spacing-m);

    /* Cell */
    --dt-cell-padding: var(--dt-spacing-s);
    --dt-cell-font-size: var(--dt-font-size-m);
    --dt-cell-line-height: var(--dt-line-height-loose);
    --dt-cell-white-space: nowrap;

    /* Head */
    --dt-table-head-background: var(--dt-color-neutral-200);

    /* Column Header */
    --dt-column-header-padding: var(--dt-spacing-s);
    --dt-column-header-font-family: var(--dt-font-sans);
    --dt-column-header-font-weight: var(--dt-font-weight-bold);
    --dt-column-header-font-size: var(--dt-font-size-s);
    --dt-column-header-line-height: var(--dt-line-height-loose);
    --dt-column-header-color: var(--dt-color-neutral-700);
    --dt-column-header-white-space: nowrap;

    /* Row */
    --dt-row-background-color: transparent;
    --dt-row-hover-background-color: var(--dt-color-neutral-50);
    --dt-row-transition: background-color var(--dt-transition-fast);
    --dt-row-border-color: var(--dt-color-neutral-100);
    --dt-row-border-width: 1px;
    --dt-row-border-style: solid;
    --dt-row-details-padding: var(--dt-spacing-s);

    /* Progress Bar */
    --dt-progress-bar-color: var(--dt-color-primary-500);
    --dt-progress-bar-background: var(--dt-neutra-200);
    --dt-progress-bar-height: 4px;
    --dt-progress-bar-width: 70%;

    /* Spinner */
    --dt-spinner-size: 48px;
    --dt-spinner-width: 2px;
    --dt-spinner-bar-color: var(--dt-color-primary-500);
    --dt-spinner-track-color: var(--dt-color-neutral-200);

    /* Button */
    --dt-button-padding: var(--dt-spacing-s);
    --dt-button-font-family: var(--dt-font-sans);
    --dt-button-font-size: var(--dt-font-size-m);
    --dt-button-font-weight: var(--dt-font-weight-semibold);
    --dt-button-line-height: var(--dt-line-height-normal);
    --dt-button-border-radius: 3px;
    --dt-button-border-width: 0;
    --dt-button-border-style: solid;
    --dt-button-transition: var(--dt-transition-fast) background-color,
      var(--dt-transition-fast) color, var(--dt-transition-fast) border-color;

    --dt-button-background-color: transparent;
    --dt-button-border-color: var(--dt-color-primary-700);
    --dt-button-color: var(--dt-color-netrual-800);

    --dt-button-hover-background-color: var(--dt-color-neutral-100);
    --dt-button-hover-border-color: var(--dt-color-primary-400);
    --dt-button-hover-color: var(--dt-color-primary-800);

    --dt-button-active-background-color: var(--dt-color-primary-200);
    --dt-button-active-border-color: var(--dt-color-primary-500);
    --dt-button-active-color: var(--dt-color-primary-900);

    /* Input */
    --dt-input-padding: var(--dt-spacing-s);
    --dt-input-border-width: 1px;
    --dt-input-border-style: solid;
    --dt-input-border-color: var(--dt-color-neutral-200);
    --dt-input-border-radius: 3px;
    --dt-input-background-color: var(--dt-color-neutral-50);
    --dt-input-color: var(--dt-color-neutral-900);

    /* Select */
    --dt-select-padding: var(--dt-spacing-s);
    --dt-select-border-width: 1px;
    --dt-select-border-style: solid;
    --dt-select-border-color: var(--dt-color-neutral-200);
    --dt-select-border-radius: 3px;
    --dt-select-background-color: var(--dt-color-neutral-50);
    --dt-select-color: var(--dt-color-neutral-900);
  }

  @media (prefers-color-scheme: dark) {
    :where(:host) {
      color-scheme: dark;
      ${z(E([...B].reverse(), D))}
    }
  }
`, N = h`
  ${A}

  :host {
    display: flex;
    flex-direction: column;
    position: relative;

    color: var(--dt-table-color);
    background-color: var(--dt-table-background);
  }

  .container {
    overflow: auto;
    overscroll-behavior: contain;
    position: relative;
    flex-grow: 1;
  }

  .head {
    animation: scroll-shadow-sticky linear forwards;
    animation-timeline: scroll(nearest block);
    z-index: 1;
  }

  @keyframes scroll-shadow-sticky {
    /* start with no shadow */
    0% {
      box-shadow: none;
    }

    /* end with shadow pushing out right */
    10% {
      box-shadow: 0 3px 5px -2px hsl(220 40% 2% / calc(10% + 3%)),
        0 7px 14px -5px hsl(220 40% 2% / calc(10% + 5%));
    }

    100% {
      box-shadow: 0 3px 5px -2px hsl(220 40% 2% / calc(10% + 3%)),
        0 7px 14px -5px hsl(220 40% 2% / calc(10% + 5%));
    }
  }

  .table {
    --min-width: min-content;
    --max-width: auto;
    --column-count: 0;
    --columns: repeat(
      var(--column-count),
      minmax(var(--min-width), var(--max-width))
    );

    --grid-columns: var(--columns);

    display: grid;
    grid-template-columns: var(--grid-columns);
    width: 100%;
    border-collapse: collapse;
    box-sizing: border-box;
  }

  .table.expandable {
    --grid-columns: minmax(min-content, 50px) var(--columns);
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--dt-table-pagination-gap);
    margin-top: var(--dt-table-pagination-margin);
    padding: var(--dt-table-pagination-padding);
    font-family: var(--dt-table-pagination-font-family);
  }

  .controls {
    display: flex;
    gap: var(--dt-table-controls-gap);
  }

  .head {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;

    background-color: var(--dt-table-head-background);

    top: 0px;
    position: sticky;
    align-items: flex-start;
  }

  .caption {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    padding: var(--dt-table-caption-padding);
    font-style: var(--dt-table-caption-font-style);
  }

  .loader {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .s-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: color-mix(in oklab, var(--dt-table-background), transparent 50%);
  } 

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, k = h`
  .button {
    cursor: pointer;

    padding: var(--dt-spacing-s);

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
    width: var(--dt-font-size-m);
    height: var(--dt-font-size-m);
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
    background: var(--dt-color-neutral-400);
    padding: 0 var(--dt-spacing-xs);
    width: 24px;
    bottom: 0;
    top: 0;
    right: 0;
    cursor: pointer;
    pointer-events: none;
  }
`, _ = L("table"), U = g`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0M4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"/>
    </svg>
`, q = g`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
    </svg>
`, F = g`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
    </svg>
`, H = g`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"/>
    </svg>
`;
class R extends CustomEvent {
  constructor() {
    super(...arguments), this.promises = [];
  }
  waitUntil(t) {
    this.promises.push(t);
  }
  get expanded() {
    return !!this.promises.length;
  }
  get promise() {
    return Promise.all(this.promises);
  }
}
class Z extends CustomEvent {
  constructor(t) {
    super("sortchange", {
      detail: t,
      bubbles: !0
    });
  }
}
class V extends CustomEvent {
  constructor(t) {
    super("filterchange", {
      detail: t,
      bubbles: !0
    });
  }
}
class X extends CustomEvent {
  constructor(t) {
    super("pagechange", {
      detail: t,
      bubbles: !0
    });
  }
}
class W extends R {
  constructor(t) {
    super("expandchange", {
      detail: t,
      bubbles: !0
    });
  }
}
const G = (e) => new Promise((t) => setTimeout(t, e)), J = (e, t = 500) => T(G(t).then(() => Promise.resolve(e)));
var K = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, c = (e, t, a, r) => {
  for (var o = r > 1 ? void 0 : r ? Q(t, a) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (o = (r ? s(t, a, o) : s(o)) || o);
  return r && o && K(t, a, o), o;
};
let i = class extends v {
  constructor() {
    super(), this.selection = "none", this.pagination = !1, this.page = 1, this.perPage = 10, this.totalItems = 0, this.loading = !1, this.expandable = !1, this.sortBy = "", this.sortDirection = "asc", this.columnCount = 0, this.provider = new I(this, {
      context: _,
      initialValue: this
    }), this.setAttribute("role", "table");
  }
  handleBeforeClick() {
    this.page--;
  }
  handleNextClick() {
    this.page++;
  }
  handleFirstClick() {
    this.page = 1;
  }
  handleLastClick() {
    this.page = Math.ceil(this.totalItems / this.perPage);
  }
  handleUpdatePerPage(e) {
    const t = e.target;
    this.setAttribute(t.name, t.value);
  }
  resetScroll() {
    this.container.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  async willUpdate(e) {
    (e.has("page") || e.has("perPage")) && (e.has("perPage") && (this.page = 1), this.hasUpdated && this.dispatchEvent(
      new X({ page: this.page, perPage: this.perPage })
    )), this.notifyConsumers();
  }
  notifyConsumers() {
    this.provider.setValue(this, !0);
  }
  updateColumns() {
    this.columnCount = this.headSlot.assignedElements().length;
  }
  firstUpdated() {
    this.updateColumns(), new MutationObserver(() => {
      this.resetScroll();
    }).observe(this, { childList: !0, subtree: !0 });
  }
  get isEmpty() {
    var e;
    return ((e = this.defaultSlot) == null ? void 0 : e.assignedElements().length) === 0;
  }
  sort(e, t) {
    this.sortBy === e ? this.sortDirection = t || (this.sortDirection === "asc" ? "desc" : "asc") : this.sortDirection = t || "asc", this.sortBy = e, this.dispatchEvent(
      new Z({ sortBy: e, sortDirection: this.sortDirection })
    );
  }
  filter(e, t) {
    this.dispatchEvent(new V({ filterBy: e, criteria: t }));
  }
  renderPagination() {
    const e = this.page > 1, t = this.page * this.perPage < this.totalItems;
    return l`
      <div class="pagination" part="pagination">
          <label for="perPage">
            Items per page: 
            <select
              id="perPage"
              @change="${this.handleUpdatePerPage}"
              name="perPage"
              value="${this.perPage}"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="100">100</option>
            </select>
          </label>

          <div>
            ${(this.page - 1) * this.perPage + 1} –
            ${Math.min(this.totalItems, this.page * this.perPage)} of
            ${this.totalItems}
          </div>

          <div class="controls">
              <button
                class="button icon"
                @click="${this.handleFirstClick}"
                ?disabled="${!e}"
              >${U}</button>
            
              <button
                class="button icon"
                @click="${this.handleBeforeClick}"
                ?disabled="${!e}"
              >${q}</button>
            
              <button
                class="button icon"
                @click="${this.handleNextClick}"
                ?disabled="${!t}"
              >${F}</button>
            
              <button
                class="button icon"
                @click="${this.handleLastClick}"
                ?disabled="${!t}"
              >${H}</button>
          </div>
        </div>
      </div>
    `;
  }
  render() {
    return l`
      <div class="filters"></div>

      <div class="container">
        <div
          class="${f({
      table: !0,
      expandable: this.expandable
    })}"
          style="${M({
      "--column-count": this.columnCount,
      "--columns": this.columns
    })}"
          part="table"
        >
          <div class="head" part="head">
            ${p(this.expandable, () => l`<div></div>`)}
            <slot name="head" @slotchange="${this.updateColumns}"></slot>
          </div>

          <slot @slotchange="${() => this.requestUpdate()}"></slot>
        </div>

        <div class="caption" part="caption">
          <slot name="caption">
            ${p(this.isEmpty, () => l` No data available `)}
          </slot>
        </div>
      </div>

      ${p(
      this.loading,
      () => J(
        l`
            <div class="s-loader">
              <dt-spinner></dt-spinner>
            </div>
          `,
        300
      )
    )}
      ${p(this.pagination, () => this.renderPagination())}
    `;
  }
};
i.styles = [k, N];
c([
  d()
], i.prototype, "selection", 2);
c([
  d({ type: Boolean })
], i.prototype, "pagination", 2);
c([
  d({ type: Number })
], i.prototype, "page", 2);
c([
  d({ type: Number })
], i.prototype, "perPage", 2);
c([
  d({ type: Number })
], i.prototype, "totalItems", 2);
c([
  d({ type: Boolean, reflect: !0 })
], i.prototype, "loading", 2);
c([
  d({ type: Boolean })
], i.prototype, "expandable", 2);
c([
  d()
], i.prototype, "sortBy", 2);
c([
  d()
], i.prototype, "sortDirection", 2);
c([
  d()
], i.prototype, "columns", 2);
c([
  C("slot:not([name])")
], i.prototype, "defaultSlot", 2);
c([
  C("slot[name=head]")
], i.prototype, "headSlot", 2);
c([
  C(".container")
], i.prototype, "container", 2);
c([
  O()
], i.prototype, "columnCount", 2);
i = c([
  m("dt-table")
], i);
const Y = h`
  .container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    
    height: 100%;
    box-sizing: border-box;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    text-transform: uppercase;

    gap: var(--dt-spacing-xs);
    color: var(--dt-column-header-color);
    padding: var(--dt-column-header-padding);
    font-family: var(--dt-column-header-font-family);
    font-weight: var(--dt-column-header-font-weight);
    font-size: var(--dt-column-header-font-size);
    line-height: var(--dt-column-header-line-height);
    white-space: var(--dt-column-header-white-space);
  }

  .sortable .label {
    cursor: pointer;
  }

  .sortable .label:hover {
    background-color: var(--dt-color-neutral-200);
  }

  .sort-icon {
    line-height: 0;
  }

  .sort-icon > svg {
    width: 14px;
    height: 14px;
    transition: opacity ease-in-out var(--dt-transition-fast);
    opacity: 0.2;
  }

  .sort-icon.sorted > svg {
    opacity: 1;
    fill: var(--dt-color-neutral-800);
  }

  .label:hover .sort-icon > svg {
    opacity: 1;
  }

  .filter {
    padding: var(--dt-column-header-padding);
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
`, tt = g`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 320 512">
        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
    </svg>
`, et = g`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 320 512">
        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
        <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
    </svg>
`, ot = g`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 320 512">
        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
    </svg>
`;
var rt = Object.defineProperty, at = Object.getOwnPropertyDescriptor, w = (e, t, a, r) => {
  for (var o = r > 1 ? void 0 : r ? at(t, a) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (o = (r ? s(t, a, o) : s(o)) || o);
  return r && o && rt(t, a, o), o;
};
let u = class extends v {
  constructor() {
    super(), this.sortable = !1, this.filterable = !1, this.slot = "head", this.setAttribute("role", "columnheader");
  }
  updated(e) {
    if (!this.name && (this.sortable || this.filterable))
      throw new Error(
        `When setting a column as sortable or filterable, a name must be provided: ${this.outerHTML}`
      );
  }
  renderSortIcon() {
    const e = this.table.sortBy === this.name, t = e ? this.table.sortDirection === "asc" ? tt : this.table.sortDirection === "desc" ? et : void 0 : ot;
    return l`
      <div
        class="${f({
      "sort-icon": !0,
      sorted: e
    })}"
      >
        ${t}
      </div>
    `;
  }
  renderFilter() {
    return l`
      <div class="filter">
        <slot name="filter">
          <div class="filter-input">
            <input
              type="text"
              name="${this.filterable}"
              @change=${(e) => this.table.filter(
      this.name,
      e.target.value
    )}
            />
          </div>
        </slot>
      </div>
    `;
  }
  render() {
    return l`
      <div
        class="${f({
      container: !0,
      sortable: this.sortable,
      filterable: this.filterable
    })}"
      >
        <div
          class="label"
          @click="${this.sortable ? () => this.table.sort(this.name) : void 0}"
        >
          <slot></slot>
          ${p(this.sortable, () => this.renderSortIcon())}
        </div>

        ${p(this.filterable, () => this.renderFilter())}
      </div>
    `;
  }
};
u.styles = [k, Y];
w([
  d({ type: Boolean, reflect: !0 })
], u.prototype, "sortable", 2);
w([
  d({ type: Boolean, reflect: !0 })
], u.prototype, "filterable", 2);
w([
  d()
], u.prototype, "name", 2);
w([
  S({ context: _, subscribe: !0 })
], u.prototype, "table", 2);
u = w([
  m("dt-column")
], u);
const nt = h`
  :host {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;

    background-color: var(--dt-row-background-color);
    transition: var(--dt-row-transition);
    border-top: var(--dt-row-border-width) var(--dt-row-border-style)
      var(--dt-row-border-color);
  }

  :host(:hover) {
    background-color: var(--dt-row-hover-background-color);
  }

  :host([expanded]) {
  }

  .expand-button {
    padding-block: 0;
    padding-inline: var(--dt-spacing-s);
  }

  .expand-button button {
    transition: transform var(--dt-transition-fast);
  }

  .expand-button.expanded button {
    transform: rotate(90deg);
  }

  .loader {
    height: 30px;
    width: 30px;
    padding: var(--dt-spacing-s);
    box-sizing: border-box;
  }

  .details {
    grid-column: 1 / -1;
    overflow: hidden;
    padding: var(--dt-spacing-m);
  }

  .details:not(.expanded) {
    display: none;
  }
`;
var st = Object.defineProperty, it = Object.getOwnPropertyDescriptor, y = (e, t, a, r) => {
  for (var o = r > 1 ? void 0 : r ? it(t, a) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (o = (r ? s(t, a, o) : s(o)) || o);
  return r && o && st(t, a, o), o;
};
let b = class extends v {
  constructor() {
    super(), this.expanded = !1, this.loading = !1, this.setAttribute("role", "row");
  }
  async updated(e) {
    e.has("expanded") && this.setAttribute("aria-expanded", String(this.expanded));
  }
  get hasDetailsSlot() {
    return this.querySelector(':scope > [slot="details"]') !== null;
  }
  async toggleExpanded(e) {
    const t = e ?? !this.expanded, a = new W({
      expanded: t
    });
    this.dispatchEvent(a), t && a.expanded && (this.loading = !0, await a.promise, this.loading = !1), this.expanded = t;
  }
  render() {
    var e, t;
    return l`
      ${p(
      (e = this.table) == null ? void 0 : e.expandable,
      () => l`
          <dt-cell
            class="${f({
        "expand-button": !0,
        expanded: this.expanded
      })}"
          >
            ${p(
        this.hasDetailsSlot && !this.loading,
        () => l`
                <button
                  class="button icon"
                  @click="${() => this.toggleExpanded()}"
                >
                  ${F}
                </button>
              `
      )}
            ${p(
        this.loading,
        () => l` <dt-spinner class="loader"></dt-spinner> `
      )}
          </dt-cell>
        `
    )}
      <slot></slot>
      ${p(
      (t = this.table) == null ? void 0 : t.expandable,
      () => l`
          <div class="${f({ details: !0, expanded: this.expanded })}">
            <slot name="details"></slot>
          </div>
        `
    )}
    `;
  }
};
b.styles = [k, nt];
y([
  d({ type: Boolean, reflect: !0 })
], b.prototype, "expanded", 2);
y([
  S({ context: _ })
], b.prototype, "table", 2);
y([
  O()
], b.prototype, "loading", 2);
b = y([
  m("dt-row")
], b);
const lt = h`
  :host {
    display: contents;
  }

  .cell {
    display: flex;
    align-items: center;

    padding: var(--dt-cell-padding);
    font-size: var(--dt-cell-font-size);
    line-height: var(--dt-cell-line-height);
    white-space: var(--dt-cell-white-space);
    grid-column: span var(--span, 1);
  }
`;
var dt = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, j = (e, t, a, r) => {
  for (var o = r > 1 ? void 0 : r ? ct(t, a) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (o = (r ? s(t, a, o) : s(o)) || o);
  return r && o && dt(t, a, o), o;
};
let x = class extends v {
  constructor() {
    super(), this.span = 1, this.setAttribute("role", "cell");
  }
  render() {
    return l`
      <div class="cell" style="${M({ "--span": this.span })}">
        <slot></slot>
      </div>
    `;
  }
};
x.styles = [lt];
j([
  d({ type: Number })
], x.prototype, "span", 2);
x = j([
  m("dt-cell")
], x);
const pt = h`
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
    animation: progress-animation 2.5s cubic-bezier(0.7, 0, 0.2, 1) infinite;
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
var ht = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, gt = (e, t, a, r) => {
  for (var o = r > 1 ? void 0 : r ? ut(t, a) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (o = (r ? s(t, a, o) : s(o)) || o);
  return r && o && ht(t, a, o), o;
};
let $ = class extends v {
  render() {
    return l`<div class="progress-bar"></div>`;
  }
};
$.styles = [pt];
$ = gt([
  m("dt-progress-bar")
], $);
const bt = h`
  :host {
    display: inline-block;
  }

  .spinner {
    width: calc(var(--dt-spinner-size) - 2 * var(--dt-spinner-width));
    max-width: 100%;
    aspect-ratio: 1;
    border: var(--dt-spinner-width) solid var(--dt-spinner-track-color);
    border-right-color: var(--dt-spinner-bar-color);
    border-radius: 50%;
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
var vt = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, ft = (e, t, a, r) => {
  for (var o = r > 1 ? void 0 : r ? mt(t, a) : t, n = e.length - 1, s; n >= 0; n--)
    (s = e[n]) && (o = (r ? s(t, a, o) : s(o)) || o);
  return r && o && vt(t, a, o), o;
};
let P = class extends v {
  render() {
    return l`<div class="spinner"></div>`;
  }
};
P.styles = [bt];
P = ft([
  m("dt-spinner")
], P);
