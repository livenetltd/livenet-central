import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module'

class Footer extends LitElement {
    static get properties() {
        return {
            year: { type: Number }
        }
    }

    constructor() {
        super()
        this.year = new Date().getFullYear()
    }

    render() {
        return html`
        <footer>
            <div class="ft1"></div>
            <div class="ft2"></div>
            <div class="ft3"></div>
            <div class="ft4">
            <p>LiveNet &copy; 2014 - ${this.year}</p>
            <p>Todos os direitos reservados</p>
            </div>
        </footer>
        `
    }

    static get styles() {
        return css`
        footer {
            width: 100%;
            margin-top: 10em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        footer > div {
            height: 65px;
            width: 100%;
        }
        footer .ft1 {
            background-color: var(--blue-1) !important;
        }
        footer .ft2 {
            background-color: var(--blue-2) !important;
        }
        footer .ft3 {
            background-color: var(--blue-3) !important;
        }
        footer .ft4 {
            background-color: var(--blue-4) !important;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        footer .ft4 > p {
            color: #3f587a;
            font-size: 0.563rem;
            font-weight: bold;
        }
        `
    }
}

window.customElements.define('my-footer', Footer)