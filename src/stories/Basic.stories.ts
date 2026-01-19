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
  render: ({ pagination, loading, data }) => {
    const [chunk, setData] = useState(pagination ? data.slice(0, 10) : data);

    const handlePageChange = async (event: CustomEvent) => {
      const { page, perPage } = event.detail;

      setData(data.slice((page - 1) * perPage, page * perPage));
    };

    return html`
      <dt-table
        ?loading="${loading}"
        ?pagination="${pagination}"
        @pagechange="${handlePageChange}"
        totalItems="${data.length}"
        style="height: 400px"
      >
        <dt-column>Name</dt-column>
        <dt-column>Position</dt-column>
        <dt-column>Office</dt-column>
        <dt-column>Age</dt-column>
        <dt-column>Start date</dt-column>
        <dt-column>Salary</dt-column>

        ${(chunk as typeof sampleData).map(
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
        <div slot="caption" style="text-align: center;">Employee Data</div>
        <div slot="empty-message">No employees found.</div>
      </dt-table>
    `;
  },
  args: {},
} satisfies Meta;

export const Default: StoryObj = {
  args: { data: sampleData },
};

export const Pagination: StoryObj = {
  args: {
    pagination: true,
    data: sampleData,
  },
};

export const Loading: StoryObj = {
  args: {
    loading: true,
    data: sampleData,
  },
};

export const Empty: StoryObj = {
  args: {
    pagination: true,
    data: [],
  },
};

export default meta;
