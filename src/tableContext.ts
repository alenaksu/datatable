import { createContext } from '@lit/context';

export type TableContext = {
    sortBy: string;
    sortDirection: 'asc' | 'desc' | string;
    sort: (by: string, direction?: 'asc' | 'desc' | string) => void;
    filter: (filterBy: string, criteria: string | string[]) => void;
    registerColumn: (column: HTMLElement) => void;
    unregisterColumn: (column: HTMLElement) => void;
    expandable: boolean;
};

export const tableContext = createContext<TableContext>('table');