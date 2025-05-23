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
  render: ({ pagination, loading }) => {
    const [data, setData] = useState(
      pagination ? sampleData.slice(0, 10) : sampleData,
    );

    const handlePageChange = async (event: CustomEvent) => {
      const { page, perPage } = event.detail;

      setData(sampleData.slice((page - 1) * perPage, page * perPage));
    };

    return html`
      <dt-table
        ?loading="${loading}"
        ?pagination="${pagination}"
        @pagechange="${handlePageChange}"
        totalItems="${sampleData.length}"
        style="height: 400px"
      >
        <dt-column>Name</dt-column>
        <dt-column>Position</dt-column>
        <dt-column>Office</dt-column>
        <dt-column>Age</dt-column>
        <dt-column>Start date</dt-column>
        <dt-column>Salary</dt-column>

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

export const Pagination: StoryObj = {
  args: {
    pagination: true,
  },
};

export const Loading: StoryObj = {
  args: {
    loading: true,
  },
};

export default meta;
