import { html, css, LitElement } from 'https://unpkg.com/lit@2.1.3?module'

export class MyLoad extends LitElement {
  static styles = css`
    .load {
        display: flex;
        flex-direction: column;
        position: fixed;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: var(--white);
        animation-name: fade-out;
        animation-duration: ${Math.random() * 1.5 + 0.5}s;
        z-index: 99999;
        animation-fill-mode: forwards;
    }
    .load svg {
        width: 100px;
        height: auto;
        margin-bottom: 5em;
    }
    
    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 1;
            z-index: 99999;
        }
        100% {
            opacity: 0;
            z-index: -999999;
        }
    }
    .lds-facebook {
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-facebook div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: var(--blue-1);
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      }
      .lds-facebook div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
      }
      .lds-facebook div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
      }
      .lds-facebook div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
      }
      @keyframes lds-facebook {
        0% {
          top: 8px;
          height: 64px;
        }
        50%, 100% {
          top: 24px;
          height: 32px;
        }
      }
    
    `

  render() {
    return html`
    <div class="load">
        <svg width="246" height="253" viewBox="0 0 246 253" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="119.784" cy="87.6275" r="16.8824" fill="#1585DC"/>
            <circle cx="178.471" cy="160.785" r="14.4706" fill="#1585DC"/>
            <circle cx="233.137" cy="168.824" r="12.8627" fill="#1585DC"/>
            <circle cx="170.431" cy="27.3334" r="14.4706" fill="#1585DC"/>
            <circle cx="217.059" cy="83.6079" r="12.8627" fill="#1585DC"/>
            <circle cx="95.6667" cy="10.451" r="10.451" fill="#1585DC"/>
            <circle cx="44.2157" cy="69.9411" r="13.6667" fill="#1585DC"/>
            <circle cx="13.6667" cy="150.333" r="13.6667" fill="#1585DC"/>
            <circle cx="12.8627" cy="231.529" r="12.8627" fill="#1585DC"/>
            <circle cx="77.1765" cy="154.353" r="12.8627" fill="#1585DC"/>
            <circle cx="135.059" cy="221.882" r="11.2549" fill="#1585DC"/>
            <circle cx="200.98" cy="242.784" r="9.64706" fill="#1585DC"/>
            <path d="M13.6667 150.333L12.0588 233.137M13.6667 150.333L77.9804 155.157M13.6667 150.333L43.4117 69.9411M12.0588 233.137L77.9804 155.157M12.0588 233.137L134.255 223.49M77.9804 155.157L43.4117 69.9411M77.9804 155.157L120.588 89.2352M77.9804 155.157L179.274 161.588M77.9804 155.157L134.255 223.49M43.4117 69.9411L95.6667 10.4509M43.4117 69.9411L120.588 89.2352M95.6667 10.4509L120.588 89.2352M95.6667 10.4509L170.431 27.3333M120.588 89.2352L170.431 27.3333M120.588 89.2352L218.667 83.6078M120.588 89.2352L179.274 161.588M170.431 27.3333L218.667 83.6078M218.667 83.6078L179.274 161.588M218.667 83.6078L234.745 169.627M179.274 161.588L234.745 169.627M179.274 161.588L200.98 243.588M179.274 161.588L134.255 223.49M234.745 169.627L200.98 243.588M200.98 243.588L134.255 223.49" stroke="#1585DC" stroke-width="5"/>
        </svg>
        <div>
        <div class="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    </div>
    `
  }
}
customElements.define('my-load', MyLoad)

