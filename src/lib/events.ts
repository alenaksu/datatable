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
export class SortEvent extends ExtendableEvent<SortEventDetail> {
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
export class FilterEvent extends ExtendableEvent<FilterEventDetail> {
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
export class PageChangeEvent extends ExtendableEvent<PageChangeEventDetail> {
  constructor(detail: PageChangeEventDetail) {
    super('pagechange', {
      detail,
      bubbles: true,
    });
  }
}