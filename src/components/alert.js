import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module'

export class Alert extends LitElement {
  static get properties() {
    return {
      title: { type: String }
    }
  }
  render() {
    return html`
    <div class="alert">
      <article>
        <h4>${this.title}</h4>
        <p>
          Sua conexão se encontrada bloqueada, clique <a href="#">aqui</a> e
          receba mais alguns dias de prazo para pagamento.
        </p>
      </article>
    </div>
    `
  }

  static get styles() {
    return css`
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

    @media only screen and (min-width: 624px) {
      .home-card {
        min-width: 624px;
        width: 624px;
        max-width: 624px;
      }
    }
    `
  }
}

window.customElements.define('my-alert', Alert)
