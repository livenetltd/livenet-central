import { svg, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

const content = svg`
<path
    d="M2.25 3.7619C1.00781 3.7619 0 4.76971 0 6.0119C0 6.71971 0.332813 7.38534 0.9 7.8119L11.1 15.4619C11.6344 15.8603 12.3656 15.8603 12.9 15.4619L23.1 7.8119C23.6672 7.38534 24 6.71971 24 6.0119C24 4.76971 22.9922 3.7619 21.75 3.7619H2.25ZM0 9.0119V18.7619C0 20.4166 1.34531 21.7619 3 21.7619H21C22.6547 21.7619 24 20.4166 24 18.7619V9.0119L13.8 16.6619C12.7312 17.4635 11.2688 17.4635 10.2 16.6619L0 9.0119Z"
    fill="#19293E"
/>
`

const Letter = html`
<svg
width="24"
height="25"
viewBox="0 0 24 25"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
    ${content}
</svg>
`

export default Letter
