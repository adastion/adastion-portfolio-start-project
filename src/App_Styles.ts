import styled from 'styled-components'
import { DefaultTheme } from './styles/Theme'

const App = styled.div`
  min-height: 100%;
  min-width: 375px;
  background: ${DefaultTheme.colors.pageBg};
  display: flex;
  justify-content: center;
  gap: 15px;
  position: relative;

  @media ${DefaultTheme.media.bigDesktop} {
    margin-bottom: 180px;
  }

  @media ${DefaultTheme.media.desktop} {
    padding: 0 15px;
  }
`

export const S = {
  App,
}
