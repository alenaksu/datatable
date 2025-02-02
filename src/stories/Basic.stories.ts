import type { Meta, StoryObj } from '@storybook/web-components';
import { useState } from '@storybook/preview-api';
import { html } from 'lit';

import sampleData from './sampleData.js';

import '../index.js';

const meta = {
  title: 'Examples/Basic',
  component: 'dt-table',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({ pagination, expandable, sortable }) => {
    const [data, setData] = useState(
      pagination ? sampleData.slice(0, 10) : sampleData,
    );

    const handlePageChange = async (event: CustomEvent) => {
      const { page, perPage } = event.detail;

      setData(sampleData.slice((page - 1) * perPage, page * perPage));
    };

    return html`
      <dt-table
        ?expandable="${expandable}"
        ?pagination="${pagination}"
        @pagechange="${handlePageChange}"
        totalItems="${sampleData.length}"
      >
        <dt-column name="0" ?sortable="${sortable}">Name</dt-column>
        <dt-column name="1" ?sortable="${sortable}">Position</dt-column>
        <dt-column name="2" ?sortable="${sortable}">Office</dt-column>
        <dt-column name="3" ?sortable="${sortable}">Age</dt-column>
        <dt-column name="4" ?sortable="${sortable}">Start date</dt-column>
        <dt-column name="5" ?sortable="${sortable}">Salary</dt-column>

        ${data.map(
          ([name, position, office, age, startDate, salary, details]) => html`
            <dt-row>
              <dt-cell>${name}</dt-cell>
              <dt-cell>${position}</dt-cell>
              <dt-cell>${office}</dt-cell>
              <dt-cell>${age}</dt-cell>
              <dt-cell>${startDate}</dt-cell>
              <dt-cell>${salary}</dt-cell>

              <div slot="details">${details}</div>
            </dt-row>
          `,
        )}
      </dt-table>
    `;
  },
  args: {},
} satisfies Meta;

export const Default: StoryObj = {
  args: {},
};

export const WithPagination: StoryObj = {
  args: {
    pagination: true,
  },
};

export default meta;
