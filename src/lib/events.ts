export class ExtendableEvent<T = any> extends CustomEvent<T> {
  private promises: Array<Promise<void>> = [];

  waitUntil(promise: Promise<void>) {
    this.promises.push(promise);
  }

  get promise() {
    return Promise.all(this.promises);
  }
}

interface SortEventDetail {
  sortBy: string;
  sortDirection: 'asc' | 'desc';
}
export class SortEvent extends CustomEvent<SortEventDetail> {
  constructor(detail: SortEventDetail) {
    super('sort', {
      detail,
      bubbles: true,
    });
  }
}

interface FilterEventDetail {
  filterBy: string;
  criteria: string;
}
export class FilterEvent extends CustomEvent<FilterEventDetail> {
  constructor(detail: FilterEventDetail) {
    super('filter', {
      detail,
      bubbles: true,
    });
  }
}

interface PageChangeEventDetail {
  page: number;
  perPage: number;
}
export class PageChangeEvent extends CustomEvent<PageChangeEventDetail> {
  constructor(detail: PageChangeEventDetail) {
    super('pagechange', {
      detail,
      bubbles: true,
    });
  }
}

interface ExpandChangeEventDetail {
  expanded: boolean;
}
export class ExpandChangeEvent extends ExtendableEvent<ExpandChangeEventDetail> {
  constructor(detail: ExpandChangeEventDetail) {
    super('expandchange', {
      detail,
      bubbles: true,
    });
  }
}