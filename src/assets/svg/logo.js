import { svg, html } from 'https://unpkg.com/lit-element/lit-element.js?module'

const content = svg`
<circle cx="11.9427" cy="8.73664" r="1.68321" fill="#1585DC" />
<circle cx="17.7939" cy="16.0305" r="1.44275" fill="#1585DC" />
<circle cx="23.2443" cy="16.8321" r="1.28244" fill="#1585DC" />
<circle cx="16.9924" cy="2.72519" r="1.44275" fill="#1585DC" />
<circle cx="21.6412" cy="8.33588" r="1.28244" fill="#1585DC" />
<circle cx="9.53816" cy="1.04198" r="1.04198" fill="#1585DC" />
<circle cx="4.40839" cy="6.97328" r="1.3626" fill="#1585DC" />
<circle cx="1.3626" cy="14.9885" r="1.3626" fill="#1585DC" />
<circle cx="1.28244" cy="23.084" r="1.28244" fill="#1585DC" />
<circle cx="7.69465" cy="15.3893" r="1.28244" fill="#1585DC" />
<circle cx="13.4656" cy="22.1221" r="1.12214" fill="#1585DC" />
<circle cx="20.0382" cy="24.2061" r="0.961832" fill="#1585DC" />
<path
  d="M1.36259 14.9886L1.20229 23.2443M1.36259 14.9886L7.77481 15.4695M1.36259 14.9886L4.32824 6.97329M1.20229 23.2443L7.77481 15.4695M1.20229 23.2443L13.3855 22.2824M7.77481 15.4695L4.32824 6.97329M7.77481 15.4695L12.0229 8.89695M7.77481 15.4695L17.874 16.1107M7.77481 15.4695L13.3855 22.2824M4.32824 6.97329L9.53816 1.04199M4.32824 6.97329L12.0229 8.89695M9.53816 1.04199L12.0229 8.89695M9.53816 1.04199L16.9924 2.7252M12.0229 8.89695L16.9924 2.7252M12.0229 8.89695L21.8015 8.33588M12.0229 8.89695L17.874 16.1107M16.9924 2.7252L21.8015 8.33588M21.8015 8.33588L17.874 16.1107M21.8015 8.33588L23.4046 16.9122M17.874 16.1107L23.4046 16.9122M17.874 16.1107L20.0382 24.2863M17.874 16.1107L13.3855 22.2824M23.4046 16.9122L20.0382 24.2863M20.0382 24.2863L13.3855 22.2824"
  stroke="#1585DC"
/>
<path
  d="M35.7538 19.8755C35.4909 19.8755 35.2699 19.7866 35.0906 19.609C34.9233 19.4313 34.8397 19.2122 34.8397 18.9516V6.92385C34.8397 6.66327 34.9293 6.44416 35.1086 6.26649C35.2878 6.08883 35.5029 6 35.7538 6C36.0167 6 36.2378 6.08883 36.417 6.26649C36.5963 6.44416 36.6859 6.66327 36.6859 6.92385V18.0278H43.1744C43.4373 18.0278 43.6584 18.1166 43.8376 18.2943C44.0169 18.4719 44.1065 18.691 44.1065 18.9516C44.1065 19.2122 44.0169 19.4313 43.8376 19.609C43.6584 19.7866 43.4373 19.8755 43.1744 19.8755H35.7538Z"
  fill="#19293E"
/>
<path
  d="M47.254 19.8755C46.9911 19.8755 46.77 19.7925 46.5908 19.6267C46.4235 19.4491 46.3399 19.2299 46.3399 18.9694V11.0634C46.3399 10.791 46.4235 10.5719 46.5908 10.406C46.77 10.2402 46.9911 10.1573 47.254 10.1573C47.5288 10.1573 47.7499 10.2402 47.9172 10.406C48.0845 10.5719 48.1681 10.791 48.1681 11.0634V18.9694C48.1681 19.2299 48.0845 19.4491 47.9172 19.6267C47.7499 19.7925 47.5288 19.8755 47.254 19.8755ZM47.254 8.57611C46.9314 8.57611 46.6505 8.46359 46.4116 8.23855C46.1845 8.00167 46.071 7.72333 46.071 7.40353C46.071 7.08374 46.1845 6.81133 46.4116 6.58629C46.6505 6.3494 46.9314 6.23096 47.254 6.23096C47.5766 6.23096 47.8515 6.3494 48.0785 6.58629C48.3175 6.81133 48.437 7.08374 48.437 7.40353C48.437 7.72333 48.3175 8.00167 48.0785 8.23855C47.8515 8.46359 47.5766 8.57611 47.254 8.57611Z"
  fill="#19293E"
/>
<path
  d="M54.8853 19.8577C54.5149 19.8577 54.2281 19.6623 54.025 19.2714L50.2251 11.3299C50.1295 11.1285 50.1175 10.9331 50.1892 10.7436C50.2729 10.5422 50.4282 10.3883 50.6552 10.2817C50.8584 10.1751 51.0615 10.1573 51.2647 10.2284C51.4798 10.2994 51.6411 10.4356 51.7486 10.637L55.2976 18.2232H54.4372L57.9504 10.637C58.0579 10.4356 58.2192 10.2994 58.4343 10.2284C58.6614 10.1573 58.8884 10.1751 59.1154 10.2817C59.3305 10.3764 59.4739 10.5245 59.5456 10.7258C59.6173 10.9272 59.6054 11.1285 59.5098 11.3299L55.7099 19.2714C55.5306 19.6623 55.2558 19.8577 54.8853 19.8577Z"
  fill="#19293E"
/>
<path
  d="M73.265 19.8755C73.0021 19.8755 72.7811 19.7866 72.6018 19.609C72.4345 19.4313 72.3509 19.2122 72.3509 18.9516V6.92385C72.3509 6.65143 72.4345 6.43231 72.6018 6.26649C72.7811 6.08883 73.0021 6 73.265 6C73.5518 6 73.7908 6.11252 73.982 6.33756L81.7969 16.642V6.92385C81.7969 6.65143 81.8866 6.43231 82.0658 6.26649C82.245 6.08883 82.4661 6 82.729 6C83.0038 6 83.2249 6.08883 83.3922 6.26649C83.5595 6.43231 83.6431 6.65143 83.6431 6.92385V18.9516C83.6431 19.2122 83.5595 19.4313 83.3922 19.609C83.2249 19.7866 83.0038 19.8755 82.729 19.8755C82.6095 19.8755 82.478 19.8518 82.3347 19.8044C82.2032 19.7452 82.0957 19.6623 82.012 19.5557L74.1971 9.25123V18.9516C74.1971 19.2122 74.1075 19.4313 73.9282 19.609C73.7609 19.7866 73.5399 19.8755 73.265 19.8755Z"
  fill="#19293E"
/>
<path
  d="M101.75 19.8755C101.152 19.8755 100.614 19.7274 100.136 19.4313C99.6585 19.1233 99.282 18.7088 99.0072 18.1877C98.7324 17.6665 98.595 17.0802 98.595 16.4288V7.95429C98.595 7.69372 98.6786 7.48052 98.8459 7.3147C99.0132 7.14888 99.2283 7.06598 99.4912 7.06598C99.754 7.06598 99.9691 7.14888 100.136 7.3147C100.304 7.48052 100.387 7.69372 100.387 7.95429V16.4288C100.387 16.9026 100.519 17.2993 100.782 17.6191C101.045 17.9389 101.367 18.0988 101.75 18.0988H102.359C102.574 18.0988 102.753 18.1817 102.897 18.3476C103.052 18.5134 103.13 18.7266 103.13 18.9871C103.13 19.2477 103.028 19.4609 102.825 19.6267C102.634 19.7925 102.383 19.8755 102.072 19.8755H101.75ZM97.7704 12.0405C97.5195 12.0405 97.3164 11.9695 97.161 11.8273C97.0057 11.6852 96.928 11.5075 96.928 11.2943C96.928 11.0575 97.0057 10.868 97.161 10.7258C97.3164 10.5837 97.5195 10.5126 97.7704 10.5126H101.911C102.162 10.5126 102.365 10.5837 102.52 10.7258C102.676 10.868 102.753 11.0575 102.753 11.2943C102.753 11.5075 102.676 11.6852 102.52 11.8273C102.365 11.9695 102.162 12.0405 101.911 12.0405H97.7704Z"
  fill="#19293E"
/>
<path
  d="M62.9928 19.3247C63.7695 19.7392 64.6538 19.9465 65.6456 19.9465C66.1953 19.9465 66.7688 19.8458 67.3663 19.6445C67.9757 19.4431 68.4836 19.1826 68.8899 18.8628C69.093 18.7088 69.1886 18.5252 69.1766 18.312C69.1647 18.0988 69.0571 17.9034 68.854 17.7257C68.6987 17.5954 68.5134 17.5362 68.2984 17.5481C68.0952 17.5481 67.904 17.6132 67.7248 17.7435C67.4858 17.9212 67.1691 18.0811 66.7748 18.2232C66.3924 18.3535 66.016 18.4186 65.6456 18.4186C64.9645 18.4186 64.361 18.2706 63.8352 17.9745C63.3095 17.6784 62.8972 17.2757 62.5985 16.7664C62.2997 16.2571 62.1504 15.6767 62.1504 15.0253C62.1504 14.3738 62.2758 13.7935 62.5268 13.2842C62.7777 12.763 63.1422 12.3544 63.6202 12.0583C64.1101 11.7622 64.6956 11.6141 65.3767 11.6141C65.9742 11.6141 66.482 11.7503 66.9003 12.0228C67.3185 12.2952 67.7083 12.5807 67.9354 13.0545C68.1754 13.6097 68.1893 13.9118 68.1893 14.2258H65.1354L64.4996 14.2169C64.0999 14.2141 63.7744 14.5361 63.7744 14.9323C63.7744 15.3265 64.0968 15.6477 64.4946 15.6477L69.0153 15.6471C69.2543 15.6471 69.4515 15.576 69.6068 15.4339C69.7622 15.2799 69.8398 15.0904 69.8398 14.8654C69.8398 13.9297 69.6606 13.1065 69.3021 12.3959C68.9556 11.6734 68.4477 11.1108 67.7786 10.7081C67.1094 10.2935 66.3088 10.0862 65.3767 10.0862C64.4327 10.0862 63.5963 10.2994 62.8673 10.7258C62.1384 11.1404 61.5648 11.7207 61.1466 12.4669C60.7403 13.2013 60.5372 14.054 60.5372 15.0253C60.5372 15.9846 60.7523 16.8374 61.1825 17.5836C61.6246 18.3179 62.228 18.8983 62.9928 19.3247Z"
  fill="#19293E"
/>
<path
  d="M88.9553 19.3247C89.732 19.7393 90.6163 19.9466 91.6081 19.9466C92.1577 19.9466 92.7313 19.8459 93.3288 19.6445C93.9382 19.4432 94.4461 19.1826 94.8523 18.8628C95.0555 18.7088 95.1511 18.5253 95.1391 18.3121C95.1272 18.0989 95.0196 17.9034 94.8165 17.7258C94.6611 17.5955 94.4759 17.5363 94.2608 17.5481C94.0577 17.5481 93.8665 17.6133 93.6873 17.7435C93.4483 17.9212 93.1316 18.0811 92.7373 18.2232C92.3549 18.3535 91.9785 18.4187 91.6081 18.4187C90.9269 18.4187 90.3235 18.2706 89.7977 17.9745C89.272 17.6784 88.8597 17.2757 88.561 16.7664C88.2622 16.2571 88.1129 15.6767 88.1129 15.0253C88.1129 14.3739 88.2383 13.7935 88.4893 13.2842C88.7402 12.7631 89.1047 12.3545 89.5826 12.0583C90.0726 11.7622 90.6581 11.6142 91.3392 11.6142C91.9367 11.6142 92.4445 11.7504 92.8628 12.0228C93.281 12.2952 93.6708 12.5807 93.8979 13.0545C94.1379 13.6097 94.1518 13.9118 94.1518 14.2258H91.0978L90.4621 14.2169C90.0624 14.2141 89.7369 14.5361 89.7369 14.9323C89.7369 15.3265 90.0593 15.6477 90.4571 15.6477L94.9778 15.6471C95.2168 15.6471 95.414 15.5761 95.5693 15.4339C95.7246 15.28 95.8023 15.0905 95.8023 14.8654C95.8023 13.9297 95.6231 13.1066 95.2646 12.3959C94.9181 11.6734 94.4102 11.1108 93.741 10.7081C93.0719 10.2936 92.2713 10.0863 91.3392 10.0863C90.3952 10.0863 89.5587 10.2995 88.8298 10.7259C88.1009 11.1404 87.5273 11.7208 87.1091 12.467C86.7028 13.2013 86.4997 14.0541 86.4997 15.0253C86.4997 15.9847 86.7148 16.8375 87.145 17.5837C87.5871 18.318 88.1905 18.8984 88.9553 19.3247Z"
  fill="#19293E"
/>
`

const Logo = html`
<svg
  width="104"
  height="26"
  viewBox="0 0 104 26"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
      ${content}    
</svg>
`

export default Logo