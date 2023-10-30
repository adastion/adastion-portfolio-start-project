import styled from 'styled-components'
import { theme } from '../styles/Theme'

export const FooterStyled = styled.footer`
  background: ${theme.colors.primaryBg};
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  font-size: 15px;
  text-transform: capitalize;
  padding: 18px;
  min-height: 60px;
  margin-top: 70px;
`
