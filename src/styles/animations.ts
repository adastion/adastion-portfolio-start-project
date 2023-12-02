import { keyframes } from 'styled-components'

export const animateToggleTheme = keyframes`
  0% {
  transform: scale(0);
  width: 0;
}

100% {
  transform: scale(1);
  width: 100%;
  }
  `
