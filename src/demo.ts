import { html, LitElement } from 'lit';
import './index';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

@customElement('demo-app')
export class DemoApp extends LitElement {
  @property({ type: Boolean })
  loading = false;

  @state()
  data: any = [];

  @state()
  totalItems = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.loading = true;
    const response = await fetch('https://dummyjson.com/products');
    const { products, total } = await response.json();
    this.data = products;
    this.totalItems = total;
    this.loading = false;
  }

  async handlePageChange(event: CustomEvent) {
    this.loading = true;
    const params = new URLSearchParams();
    const page = event.detail.page;
    const perPage = event.detail.perPage;
    params.set('limit', perPage.toString());
    params.set('skip', ((page - 1) * perPage).toString());

    const response = await fetch(`https://dummyjson.com/products?${params}`);
    const { products, total } = await response.json();
    this.data = products;
    this.totalItems = total;
    this.loading = false;
  }

  render() {
    return html`
      <dt-table
        pagination
        ?loading=${this.loading}
        expandable
        columns="min-content auto auto auto"
        totalItems=${this.totalItems}
        @pagechange="${this.handlePageChange}"
      >
        <dt-column>ID</dt-column>
        <dt-column>Title</dt-column>
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
