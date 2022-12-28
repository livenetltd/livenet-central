import { svg, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

const content = svg`
<path d="M14 15H0.25V12.5H14V15Z" fill="#1585DC" />
<path d="M10.25 8.75H0.25V6.25H10.25V8.75Z" fill="#1585DC" />
<path d="M14 2.5H0.25V0H14V2.5Z" fill="#1585DC" />
<path
d="M14.375 6.625L18.8625 2.1375L18.825 5.7L17.025 7.5L18.825 9.3L18.8625 12.875L14.375 8.3875V6.625Z"
fill="#1585DC"
/>
`

const Button = html`
<svg
    width="19"
    height="15"
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    ${content}
</svg>
`

export default Button