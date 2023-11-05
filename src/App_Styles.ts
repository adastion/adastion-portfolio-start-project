import styled from 'styled-components'
import { theme } from './styles/Theme'

const App = styled.div`
  min-height: 100%;
  min-width: 375px;
  background: ${theme.colors.pageBg};
  display: flex;
  justify-content: center;
  gap: 15px;
  position: relative;

  @media ${theme.media.bigDesktop} {
    margin-bottom: 180px;
  }

  @media ${theme.media.desktop} {
    padding: 0 15px;
  }
`

export const S = {
  App,
}
