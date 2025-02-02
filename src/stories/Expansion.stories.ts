import type { Meta, StoryObj } from '@storybook/web-components';
import { useState } from '@storybook/preview-api';
import { html } from 'lit';

import sampleData from './sampleData.js';

import '../index.js';
import { ExpandChangeEvent } from '../lib/events.js';

const meta = {
  title: 'Examples/Expansion',
  component: 'dt-table',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({ lazy }) => {
    const handleExpandChange = (event: ExpandChangeEvent) => {
      const { expanded } = event.detail;

      if (expanded && lazy) {
        event.waitUntil(new Promise((resolve) => setTimeout(resolve, 2000)));
      }
    };

    return html`
      <dt-table
        expandable
        totalItems="${sampleData.length}"
        @expandchange="${handleExpandChange}"
      >
        <dt-column>Name</dt-column>
        <dt-column>Position</dt-column>
        <dt-column>Office</dt-column>
        <dt-column>Age</dt-column>
        <dt-column>Start date</dt-column>
        <dt-column>Salary</dt-column>

        ${sampleData.map(
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

export const LazyLoading: StoryObj = {
  args: {
    lazy: true,
  },
};

export default meta;
