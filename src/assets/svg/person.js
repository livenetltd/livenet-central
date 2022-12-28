import { svg, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

const content = svg`
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
`

const Person = html`
<svg
width="24"
height="28"
viewBox="0 0 24 28"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
${content}
</svg>
`

export default Person