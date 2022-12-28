import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module'
import World from "../assets/svg/world"
import Letter from "../assets/svg/letter"
import Money from "../assets/svg/money"

export class Card extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      value: { type: String },
      color: { type: String },
    }
  }
  constructor() {
    super()
    this.color = "blue-1"
  }
  render() {
    return html`
    <div class="home-card ${this.color}">
      <div class="container">
        <div class="card-l">
        ${(() => { 
            switch (this.title) {
              case "Tráfego":
              case "Trafego":
                return World
              case "Suporte":
                return Letter
              case "Financeiro":
                return Money
              default:
                break;
            }
          })()
        }
        <h3>${this.title}</h3>
        </div>
        <div class="card-r">
        <span>${this.value}</span>
        </div>
      </div>
    </div>
    `
  }

  static get styles() {
    return css`
    .white {
      background-color: var(--white);
    }
    .blue-1 {
      background-color: var(--blue-1);
    }
    .blue-2 {
      background-color: var(--blue-2);
    }
    .blue-3 {
      background-color: var(--blue-3);
    }
    .blue-4 {
      background-color: var(--blue-4);
    }
    .home-card {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.5em;
    }
    .home-card .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 80%;
      min-width: 80%;
    }
    .home-card .card-l,
    .home-card .contaienr {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
      .card-l svg, .card-l path {
        margin-right: 1em;
        fill: var(--white);
      }
      .home-card .card-l h3,
      .home-card .card-r span {
        color: var(--white);
        font-weight: 500;
      }
      .home-card .card-r span {
        font-size: 1.5rem;
      }
    @media only screen and (min-width: 280px) {
        .home-card {
          padding: 1.5em;
          min-width: 280px;
          width: 280px;
          max-width: 280px;
        }
      }
      
    `
  }
}

window.customElements.define('my-card', Card)
