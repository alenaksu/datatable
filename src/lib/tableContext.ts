import { createContext } from '@lit/context';
import { SortDirection } from '../types';

export type TableContext = {
  sortBy: string;
  sortDirection: SortDirection;
  sort: (by: string, direction?: SortDirection) => void;
  filter: (filterBy: string, criteria: string) => void;
  expandable: boolean;
};

export const tableContext = createContext<TableContext>('table');
