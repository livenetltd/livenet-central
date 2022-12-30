import { html, css, LitElement } from 'https://unpkg.com/lit@2.1.3?module'

export class MyIndex extends LitElement {
  static styles = css`

  /*Seções*/
  section.atalhos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section h2 {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 1em;
  }
  my-card:not(:last-child) {
    margin-bottom: 1em;
  }
  /*Tabelas*/
  .table {
    text-align: center;
    border-collapse: separate;
    border-spacing: 0 1em;
    overflow-x: scroll;
  }
  .table th {
    font-size: 0.875rem;
    padding-bottom: 1em;
  }
  .table td {
    padding: 0 1.5em;
    font-size: 0.75rem;
  }
  
`

  constructor() {
    super()
  }

  render() {
    return html`
    <my-alert></my-alert>
    <!-- Atalhos -->
    <section class="atalhos">
      <h2>Atalhos</h2>
      <my-card title="Tráfego" value="542M" color="blue-1" ></my-card>
      <my-card title="Títulos" value="012" color="blue-2" ></my-card>
      <my-card title="Chamados" value="004" color="blue-3" ></my-card>
    </section>

    <section class="ultimas-faturas">
      <h2>Últimas Faturas</h2>
      <table class="table">
        <colgroup>
          <col class="col" />
          <col class="col" />
          <col class="col" />
        </colgroup>
        <tr class="table-head">
          <th>Valor</th>
          <th>Vencimento</th>
          <th>Status</th>
        </tr>
        <!-- BEGIN BLOCK_FATURAS -->
        <!-- BEGIN BLOCK_DADOSFATURAS -->
        <tr class="table-body">
          <td>R$100,00</td>
          <td>15/01/2023</td>
          <td><a href="#">Pago</a></td>
        </tr>
        <tr class="table-body">
          <td>R$100,00</td>
          <td>15/02/2023</td>
          <td><a href="#">Aberto</a></td>
        </tr>
        <tr class="table-body">
          <td>R$100,00</td>
          <td>15/03/2023</td>
          <td><a href="#">Aberto</a></td>
        </tr>
        <tr class="table-body">
          <td>R$100,00</td>
          <td>15/04/2023</td>
          <td><a href="#">Aberto</a></td>
        </tr>
        <tr class="table-body">
          <td>R$100,00</td>
          <td>15/05/2023</td>
          <td><a href="#">Aberto</a></td>
        </tr>
        <tr class="table-body">
          <td>R$100,00</td>
          <td>15/06/2023</td>
          <td><a href="#">Aberto</a></td>
        </tr>
        <!-- END BLOCK_DADOSFATURAS -->
        <!-- END BLOCK_FATURAS -->
      </table>
    </section>
    `
  }
}
customElements.define('my-index', MyIndex)

