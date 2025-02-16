export class ExtendableEvent<T = any> extends CustomEvent<T> {
  private promises: Array<Promise<void>> = [];

  waitUntil(promise: Promise<void>) {
    this.promises.push(promise);
  }

  get expanded() {
    return !!this.promises.length;
  }

  get promise() {
    return Promise.all(this.promises);
  }
}

interface SortChangeEventDetail {
  sortBy: string;
  sortDirection: 'asc' | 'desc';
}
export class SortChangeEvent extends CustomEvent<SortChangeEventDetail> {
  constructor(detail: SortChangeEventDetail) {
    super('sortchange', {
      detail,
      bubbles: true,
    });
  }
}

interface FilterChangeEventDetail {
  filterBy: string;
  criteria: string;
}
export class FilterChangeEvent extends CustomEvent<FilterChangeEventDetail> {
  constructor(detail: FilterChangeEventDetail) {
    super('filterchange', {
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