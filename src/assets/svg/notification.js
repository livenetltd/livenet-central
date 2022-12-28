import { svg, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

const content = svg`
<g clip-path="url(#clip0_695_1092)">
  <path
    d="M12 22C13.1 22 14 21.1 14 20H9.99999C9.99999 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.62999 5.36 5.99999 7.92 5.99999 11V16L4.70999 17.29C4.07999 17.92 4.51999 19 5.40999 19H18.58C19.47 19 19.92 17.92 19.29 17.29L18 16Z"
    fill="#1585DC"
  />
</g>
<defs>
  <clipPath id="clip0_695_1092">
    <rect width="24" height="24" fill="white" />
  </clipPath>
</defs>
`

const Notification = html`
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
      ${content}    
</svg>
`

export default Notification

