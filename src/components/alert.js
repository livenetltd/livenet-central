import { html, css, LitElement } from 'https://unpkg.com/lit@2.1.3?module'

export class MyAlert extends LitElement {
  static styles = css`
  .alert {
    background-color: #e75656;
    margin-bottom: 2em;
    padding: 1em;
  }
  .alert h4 {
    margin-bottom: 1em;
  }
  .alert h4,
  .alert p,
  .alert p a {
    color: var(--white);
  }
  `

  constructor() {
    super()
  }

  render() {
    return html`
    <div class="alert">
    <article>
        <h4>Acesso Bloqueado!</h4>
        <p>
        Sua conexão se encontrada bloqueada, clique <a href="#">aqui</a> e
        receba mais alguns dias de prazo para pagamento.
        </p>
    </article>
    </div>
    `
  }
}
customElements.define('my-alert', MyAlert)

