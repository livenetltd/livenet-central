import { LitElement, html, css } from "https://unpkg.com/lit@2.1.3?module"

class MyHeader extends LitElement {

    static properties = {
        logo: {type: String},
        menu: {type: String},
        notification: {type: String},
        home: {type: String},
        money: {type: String},
        world: {type: String},
        letter: {type: String},
        exit: {type: String}
    }

    loadIcon(icon, variable) {
        fetch(icon)
            .then(res => res.text())
            .then(txt => {
                const parser = new DOMParser()
                const svg = parser.parseFromString(txt, "text/html");
                const element = html`${svg.querySelector('svg')}`
                
                this[variable] = element
        })

        return this[variable]
    }

    render() {
        return html`
        <header>
            <div class="header-padding">
            <div class="header-l">
                <a href="/">
                ${this.loadIcon('src/assets/logo.svg', 'logo')}
                </a>
            </div>
            <div class="header-r">
                ${this.loadIcon('src/assets/notification.svg', 'notification')}
                ${this.loadIcon('src/assets/menu.svg', 'menu')}
            </div>
            </div>
        </header>
        
        <nav class="header-nav">
            <div class="container">
            <ul class="nav-items">
                <li>
                <a href="/">
                    <div>
                    <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_673_1528)">
                        <path
                            d="M23.9917 10.6458C23.9917 11.3958 23.3667 11.9833 22.6583 11.9833H21.325L21.3542 18.6583C21.3542 18.7708 21.3458 18.8833 21.3333 18.9958V19.6667C21.3333 20.5875 20.5875 21.3333 19.6667 21.3333H19C18.9542 21.3333 18.9083 21.3333 18.8625 21.3292C18.8042 21.3333 18.7458 21.3333 18.6875 21.3333H17.3333H16.3333C15.4125 21.3333 14.6667 20.5875 14.6667 19.6667V18.6667V16C14.6667 15.2625 14.0708 14.6667 13.3333 14.6667H10.6667C9.92917 14.6667 9.33333 15.2625 9.33333 16V18.6667V19.6667C9.33333 20.5875 8.5875 21.3333 7.66667 21.3333H6.66667H5.3375C5.275 21.3333 5.2125 21.3292 5.15 21.325C5.1 21.3292 5.05 21.3333 5 21.3333H4.33333C3.4125 21.3333 2.66667 20.5875 2.66667 19.6667V15C2.66667 14.9625 2.66667 14.9208 2.67083 14.8833V11.9833H1.33333C0.583333 11.9833 0 11.4 0 10.6458C0 10.2708 0.125 9.9375 0.416667 9.64583L11.1 0.333333C11.3917 0.0416667 11.725 0 12.0167 0C12.3083 0 12.6417 0.0833333 12.8917 0.291667L23.5333 9.64583C23.8667 9.9375 24.0333 10.2708 23.9917 10.6458Z"
                            fill="#19293E"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_673_1528">
                            <rect width="24" height="21.3333" fill="white" />
                        </clipPath>
                        </defs>
                    </svg>
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
                    <svg
                        width="24"
                        height="28"
                        viewBox="0 0 24 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_673_1532)">
                        <path
                            d="M12 13.7143C15.7875 13.7143 18.8571 10.6446 18.8571 6.85714C18.8571 3.06964 15.7875 0 12 0C8.2125 0 5.14286 3.06964 5.14286 6.85714C5.14286 10.6446 8.2125 13.7143 12 13.7143ZM9.55179 16.2857C4.275 16.2857 0 20.5607 0 25.8375C0 26.7161 0.7125 27.4286 1.59107 27.4286H22.4089C23.2875 27.4286 24 26.7161 24 25.8375C24 20.5607 19.725 16.2857 14.4482 16.2857H9.55179Z"
                            fill="#19293E"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_673_1532">
                            <rect width="24" height="27.4286" fill="white" />
                        </clipPath>
                        </defs>
                    </svg>
                    <span>Dados</span>
                    </div>
                </a>
                </li>
                <li>
                <a href="#">
                    <div>
                    <svg
                        width="24"
                        height="29"
                        viewBox="0 0 24 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_673_1656)">
                        <path
                            d="M12.002 28.4286C13.7422 28.4286 15.166 27.1363 15.166 25.5568H8.83791C8.83791 27.1363 10.2459 28.4286 12.002 28.4286ZM21.4941 19.8132V12.6337C21.4941 8.22551 18.8996 4.53526 14.375 3.55885V2.58244C14.375 1.39064 13.315 0.428589 12.002 0.428589C10.6889 0.428589 9.62892 1.39064 9.62892 2.58244V3.55885C5.08853 4.53526 2.50984 8.21115 2.50984 12.6337V19.8132L0.469033 21.6655C-0.527639 22.5701 0.168449 24.1209 1.57645 24.1209H22.4116C23.8196 24.1209 24.5315 22.5701 23.5349 21.6655L21.4941 19.8132Z"
                            fill="#19293E"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_673_1656">
                            <rect
                            width="24"
                            height="28"
                            fill="white"
                            transform="translate(0 0.428589)"
                            />
                        </clipPath>
                        </defs>
                    </svg>
                    <span>Notificacoes</span>
                    </div>
                </a>
                </li>
                <li>
                <a href="#">
                    <div>
                    <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M2.66667 3.09525C1.19583 3.09525 0 4.29108 0 5.76191V16.4286C0 17.8994 1.19583 19.0952 2.66667 19.0952H21.3333C22.8042 19.0952 24 17.8994 24 16.4286V5.76191C24 4.29108 22.8042 3.09525 21.3333 3.09525H2.66667ZM5.33333 16.4286H2.66667V13.7619C4.1375 13.7619 5.33333 14.9577 5.33333 16.4286ZM2.66667 8.42858V5.76191H5.33333C5.33333 7.23275 4.1375 8.42858 2.66667 8.42858ZM18.6667 16.4286C18.6667 14.9577 19.8625 13.7619 21.3333 13.7619V16.4286H18.6667ZM21.3333 8.42858C19.8625 8.42858 18.6667 7.23275 18.6667 5.76191H21.3333V8.42858ZM12 15.0952C9.79167 15.0952 8 13.3036 8 11.0952C8 8.88691 9.79167 7.09525 12 7.09525C14.2083 7.09525 16 8.88691 16 11.0952C16 13.3036 14.2083 15.0952 12 15.0952Z"
                        fill="#19293E"
                        />
                    </svg>
                    <span>Financeiro</span>
                    </div>
                </a>
                </li>
                <li>
                <a href="#">
                    <div>
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_673_1538)">
                        <path
                            d="M2.70469 9.80878L3.14531 10.5775C3.53437 11.2572 4.17188 11.7588 4.92656 11.9744L7.64062 12.7478C8.44687 12.9775 9 13.7135 9 14.5525V16.4228C9 16.9385 9.29062 17.4072 9.75 17.6369C10.2094 17.8666 10.5 18.3353 10.5 18.851V20.6791C10.5 21.4103 11.1984 21.94 11.9016 21.7385C12.6562 21.5228 13.2422 20.9182 13.4344 20.1541L13.5656 19.6291C13.7625 18.8369 14.2781 18.1572 14.9859 17.7541L15.3656 17.5385C16.0687 17.14 16.5 16.39 16.5 15.5838V15.1947C16.5 14.5994 16.2609 14.0275 15.8391 13.6057L15.6562 13.4228C15.2344 13.001 14.6625 12.7619 14.0672 12.7619H12.0469C11.5266 12.7619 11.0109 12.626 10.5562 12.3682L8.93906 11.4447C8.7375 11.3275 8.58281 11.14 8.50781 10.9197C8.35781 10.4697 8.55937 9.98221 8.98594 9.77128L9.2625 9.63065C9.57188 9.47596 9.93281 9.44784 10.2609 9.56034L11.3484 9.92128C11.7328 10.0478 12.1547 9.90253 12.375 9.56971C12.5953 9.24159 12.5719 8.80565 12.3187 8.50096L11.6812 7.7369C11.2125 7.1744 11.2172 6.35409 11.6953 5.80096L12.4313 4.94315C12.8438 4.46034 12.9094 3.77128 12.5953 3.22284L12.4828 3.02596C12.3187 3.01659 12.1594 3.0119 11.9953 3.0119C7.64531 3.0119 3.95625 5.86659 2.70469 9.80878ZM21.75 12.7619C21.75 11.0369 21.3 9.41503 20.5125 8.00409L19.3125 8.4869C18.5766 8.78221 18.1969 9.60253 18.4453 10.3525L19.2375 12.7291C19.4016 13.2166 19.8 13.5869 20.2969 13.7088L21.6609 14.051C21.7172 13.6291 21.7453 13.1978 21.7453 12.7619H21.75ZM24 12.7619C24 19.39 18.6281 24.7619 12 24.7619C5.37188 24.7619 0 19.39 0 12.7619C0 6.13378 5.37188 0.761902 12 0.761902C18.6281 0.761902 24 6.13378 24 12.7619Z"
                            fill="#19293E"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_673_1538">
                            <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.761902)"
                            />
                        </clipPath>
                        </defs>
                    </svg>
                    <span>Acesso</span>
                    </div>
                </a>
                </li>
                <li>
                <a href="#">
                    <div>
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M2.25 3.7619C1.00781 3.7619 0 4.76971 0 6.0119C0 6.71971 0.332813 7.38534 0.9 7.8119L11.1 15.4619C11.6344 15.8603 12.3656 15.8603 12.9 15.4619L23.1 7.8119C23.6672 7.38534 24 6.71971 24 6.0119C24 4.76971 22.9922 3.7619 21.75 3.7619H2.25ZM0 9.0119V18.7619C0 20.4166 1.34531 21.7619 3 21.7619H21C22.6547 21.7619 24 20.4166 24 18.7619V9.0119L13.8 16.6619C12.7312 17.4635 11.2688 17.4635 10.2 16.6619L0 9.0119Z"
                        fill="#19293E"
                        />
                    </svg>
                    <span>Suporte</span>
                    </div>
                </a>
                </li>
                <li>
                <a href="#">
                    <div>
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M7.5 5.2619C8.32969 5.2619 9 4.59159 9 3.7619C9 2.93221 8.32969 2.2619 7.5 2.2619H4.5C2.01562 2.2619 0 4.27753 0 6.7619V18.7619C0 21.2463 2.01562 23.2619 4.5 23.2619H7.5C8.32969 23.2619 9 22.5916 9 21.7619C9 20.9322 8.32969 20.2619 7.5 20.2619H4.5C3.67031 20.2619 3 19.5916 3 18.7619V6.7619C3 5.93221 3.67031 5.2619 4.5 5.2619H7.5ZM23.6484 13.5775C23.8734 13.3666 24 13.0713 24 12.7619C24 12.4525 23.8734 12.1572 23.6484 11.9463L16.8984 5.57128C16.5703 5.2619 16.0922 5.17753 15.6797 5.35565C15.2672 5.53378 15 5.94159 15 6.3869V9.7619H9C8.17031 9.7619 7.5 10.4322 7.5 11.2619V14.2619C7.5 15.0916 8.17031 15.7619 9 15.7619H15V19.1369C15 19.5869 15.2672 19.99 15.6797 20.1682C16.0922 20.3463 16.5703 20.2619 16.8984 19.9525L23.6484 13.5775Z"
                        fill="#19293E"
                        />
                    </svg>
                    <span>Sair</span>
                    </div>
                </a>
                </li>
            </ul>
            </div>
        </nav>
      
        `
    }

    static styles = css`
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

customElements.define('my-header', MyHeader)