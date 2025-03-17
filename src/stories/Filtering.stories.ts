import type { Meta, StoryObj } from '@storybook/web-components';
import { useState } from '@storybook/preview-api';
import { html } from 'lit';

import sampleData from './sampleData.js';

import '../index.js';
import { FilterChangeEvent } from '../lib/events.js';

interface TableProps {}

const meta = {
  title: 'Examples/Filtering',
  component: 'dt-table',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({}) => {
    const [data, setData] = useState([...sampleData]);

    const handleFilterChange = async (event: FilterChangeEvent) => {
      const { criteria, filterBy } = event.detail;

      if (!criteria) {
        setData(sampleData);
        return;
      }

      setData(
        sampleData.slice().filter((item) => {
          item[Number(filterBy)].toLowerCase().includes(criteria.toLowerCase());
        }),
      );
    };

    return html`
      <dt-table
        @filterchange="${handleFilterChange}"
        totalItems="${sampleData.length}"
      >
        <dt-column name="0" filterable>Name</dt-column>
        <dt-column name="1" filterable>Position</dt-column>
        <dt-column name="2" filterable>Office</dt-column>
        <dt-column name="3" filterable>Age</dt-column>
        <dt-column name="4" filterable>Start date</dt-column>
        <dt-column name="5" filterable>Salary</dt-column>

        ${data.map(
          ([name, position, office, age, startDate, salary, _details]) => html`
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
