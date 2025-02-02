import type { Meta, StoryObj } from '@storybook/web-components';
import { useState } from '@storybook/preview-api';
import { html } from 'lit';

import sampleData from './sampleData.js';

import '../index.js';
import { SortChangeEvent } from '../lib/events.js';

interface TableProps {
  pagination: boolean;
  loading: boolean;
  expandable: boolean;
  sortable: boolean;
}

const meta = {
  title: 'Examples/Sorting',
  component: 'dt-table',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({  }) => {
    const [data, setData] = useState([...sampleData]);

    const handleSortChange = async (event: SortChangeEvent) => {
      const { sortBy, sortDirection } = event.detail;

      setData(
        sampleData
          .slice()
          .sort((a, b) =>
            sortDirection === 'asc'
              ? a[Number(sortBy)].localeCompare(b[Number(sortBy)])
              : b[Number(sortBy)].localeCompare(a[Number(sortBy)]),
          ),
      );
    };

    return html`
      <dt-table
        @sortchange="${handleSortChange}"
        totalItems="${sampleData.length}"
      >
        <dt-column name="0" sortable>Name</dt-column>
        <dt-column name="1" sortable>Position</dt-column>
        <dt-column name="2" sortable>Office</dt-column>
        <dt-column name="3" sortable>Age</dt-column>
        <dt-column name="4" sortable>Start date</dt-column>
        <dt-column name="5" sortable>Salary</dt-column>

        ${data.map(
          ([name, position, office, age, startDate, salary, details]) => html`
            <dt-row>
              <dt-cell>${name}</dt-cell>
              <dt-cell>${position}</dt-cell>
              <dt-cell>${office}</dt-cell>
              <dt-cell>${age}</dt-cell>
              <dt-cell>${startDate}</dt-cell>
              <dt-cell>${salary}</dt-cell>
            </dt-row>
          `,
        )}
      </dt-table>
    `;
  },
  args: {},
} satisfies Meta;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {},
};

export default meta;
