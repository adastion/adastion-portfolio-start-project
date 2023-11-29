import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html,
body,
#root {
    height: 100%;
}

body {
    margin: 0;
  font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body[data-theme='light'] {
  --primary: #2B2B2B;
  --secondary: #767676;
  --lineTable: #F0F0F6;
  --primaryBg: #fff;
  --secondaryBg: #ffb400;
  --pageBg: #F0F0F6;
  --onlineUser: #7EB942;
}

body[data-theme='dark'] {
    --primary: #d2d2d2;
    --secondary: #9c9a9a;
    --lineTable: #60839d;
    --primaryBg: #161617;
    --secondaryBg: #6374a0;
    --pageBg: #0f0f0f;
    --onlineUser: #7EB942;
}

a, button {
    cursor: revert;
}

ol, ul, menu {
    list-style: none;
}

img {
    max-width: 100%;
}

table {
    border-collapse: collapse;
}

input, textarea {
    -webkit-user-select: auto;
}


textarea {
    white-space: revert;
}

meter {
    -webkit-appearance: revert;
    appearance: revert;
}


:where(pre) {
    all: revert;
}


::placeholder {
    color: unset;
}

::marker {
    content: initial;
}


:where([hidden]) {
    display: none;
}


:where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
}

/* apply back the draggable feature - exist only in Chromium and Safari */
:where([draggable="true"]) {
    -webkit-user-drag: element;
}

/* Revert Modal native behavior */
:where(dialog:modal) {
    all: revert;
}
`
