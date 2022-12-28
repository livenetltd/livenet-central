import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module'
import Logo from "../assets/svg/logo"
import Notification from "../assets/svg/notification"
import Button from "../assets/svg/button"
import Home from "../assets/svg/home"
import Person from "../assets/svg/person"
import Money from "../assets/svg/money"
import World from "../assets/svg/world"
import Letter from "../assets/svg/letter"
import Exit from "../assets/svg/exit"
  

class Header extends LitElement {
    static get properties() {
        return {
          active: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.active = false
    }

    _handleClick() {
        this.active = this.active === true ? false : true
    }
    render() {
        return html`
        <header>
            <div class="header-padding">
                <div class="header-l">
                    <a href="#">
                       ${Logo}
                    </a>
                </div>
                <div class="header-r">
                    <div class="header-notificacao">
                        ${Notification}
                    </div>
                    <div class="header-botao" @click="${this._handleClick}">
                        ${Button}
                    </div>
                </div>
            </div>
            </header>

            <nav class="header-nav ${this.active === true ? "header-nav-open" : ""}">
            <div class="container">
                <ul class="nav-items">
                <li>
                    <a href="/">
                    <div>
                        ${Home}
                        <span>Inicio</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="/login.html">
                    <div>
                        <span>Login</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div>
                        ${Person}
                        <span>Dados</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div>
                        ${Notification}
                        <span>Notificacoes</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div>
                        ${Money}
                        <span>Financeiro</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div>
                        ${World}
                        <span>Acesso</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div>
                        ${Letter}
                        <span>Suporte</span>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div>
                        ${Exit}
                        <span>Sair</span>
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            </nav>

        `
    }

    static get styles() {
        return css`
        header,
        .header-padding {
        display: flex;
        align-items: center;
        }
        header {
        background: rgba(226, 242, 246, 0.8);
        box-shadow: 0px 4px 24px rgba(21, 133, 220, 0.17);
        backdrop-filter: blur(4px);
        justify-content: center;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 2;
        }
        .header-padding {
        width: 85%;
        padding: 1em 0;
        justify-content: space-between;
        }
        .header-l,
        .header-r {
        display: flex;
        align-items: center;
        }
        .header-r a,
        .header-l div {
        padding: 0.25em;
        }
        .header-botao,
        .header-notificacao {
        cursor: pointer;
        }
        .notification-icon-hide {
        display: none;
        }
        .header-r div:not(:last-child) {
        margin-right: 1em;
        }
        .header-nav {
        position: fixed;
        display: none;
        width: 100%;
        height: 100vh;
        background: rgba(226, 242, 246, 0.8);
        top: 0;
        justify-content: center;
        align-items: center;
        animation-name: nav-closing;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        backdrop-filter: blur(4px);
        }
        .nav-items a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1rem;
        }
        .nav-items li {
        margin-bottom: 2.188em;
        }
        .nav-items svg {
        margin-right: 2.75em;
        }
        .nav-items div {
        display: flex;
        align-items: center;
        }
        .header-nav-open {
        animation-name: nav-opening;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        }

        @keyframes nav-opening {
        from {
            opacity: 0;
        }
        to {
            display: flex;
            opacity: 1;
            z-index: 1;
        }
        }
        @keyframes nav-closing {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 0;
        }
        100% {
            display: flex;
            z-index: -99999;
        }
        }

        `
    }
}

window.customElements.define('my-header', Header)