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

body {
    margin: 0;
  font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
