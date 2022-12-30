import { html, css, LitElement } from 'https://unpkg.com/lit@2.1.3?module'

export class MyCard extends LitElement {

  static properties = {
    title: {type: String},
    value: {type: String},
    color: {type: String},
    icon: {type: String}
  };

  constructor() {
    super()
  }

  loadIcon(icon) {
    fetch(icon)
        .then(res => res.text())
        .then(txt => {
            const parser = new DOMParser()
            const svg = parser.parseFromString(txt, "text/html")
            this.icon = html`${svg.querySelector('svg')}`
        
        })
  }

  render() {
    return html`
    <div class="home-card ${this.color}">
        <div class="container">
            <div class="card-l">
            ${
              this.title === 'Tráfego' ? this.loadIcon('src/assets/world.svg')
              : this.title === 'Títulos' ? this.loadIcon('src/assets/money.svg')
              : this.loadIcon('src/assets/letter.svg')
            }
            ${this.icon}
            <h3>${this.title}</h3>
            </div>
            <div class="card-r">
                <span>${this.value}</span>
            </div>
        </div>
    </div>
    
    `
  }

  static styles = css`
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
    padding: 1.5em;
    justify-content: space-between;
    min-width: 100vw;
  }
  .home-card:not(:last-child) {
    margin-bottom: 1em;
  }
  .home-card .card-l,
  .home-card {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .home-card .card-l svg {
    margin-right: 1em;
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
      min-width: 280px;
      width: 280px;
    }
  }
  
  `
}
customElements.define('my-card', MyCard)
