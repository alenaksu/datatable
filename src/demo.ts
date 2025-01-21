import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { PageChangeEvent } from './lib/events';
import { Table } from './components/Table/Table';
import './index';

@customElement('demo-app')
export class DemoApp extends LitElement {
  @property({ type: Boolean })
  loading = false;

  @state()
  data: any = [];

  @state()
  totalItems = 0;

  @query('dt-table')
  table!: Table;

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.loadData();
  }

  async loadData() {
    this.loading = true;

    const params = new URLSearchParams();
    const page = this.table.page;
    const perPage = this.table.perPage;
    params.set('limit', perPage.toString());
    params.set('skip', ((page - 1) * perPage).toString());

    const response = await fetch(`https://dummyjson.com/products?${params}`);
    const { products, total } = await response.json();
    this.data = products;
    this.totalItems = total;

    this.loading = false;
  }

  handlePageChange(event: PageChangeEvent) {
    this.loadData();
  }

  render() {
    return html`
      <dt-table
        pagination
        expandable
        columns="min-content auto auto auto"
        totalItems=${this.totalItems}
        @pagechange="${this.handlePageChange}"
        ?loading=${this.loading}
        style="height: 95vh"
      >
        <dt-column>ID</dt-column>
        <dt-column sortable>Title</dt-column>
        <dt-column>Category</dt-column>
        <dt-column>Price</dt-column>

        ${map(
          this.data,
          (item: any) => html`
            <dt-row>
              <dt-cell>${item.id}</dt-cell>
              <dt-cell>${item.title}</dt-cell>
              <dt-cell>${item.category}</dt-cell>
              <dt-cell>${item.price}</dt-cell>

              <div slot="details"><p>${item.description}</p></div>
            </dt-row>
          `,
        )}
      </dt-table>
    `;
  }
}
