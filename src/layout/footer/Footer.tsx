import styled from 'styled-components'
import { DefaultTheme } from '../../styles/Theme'
import { Container } from '../../components/Container'
import { Icon } from '../../components/Icons/Icon'

export const Footer = () => {
  return (
    <Container>
      <FooterStyled>
        <Icon size={'24px'} iconId={'copyright'} />
        <small>2021 All Rights Reserved.Ojjomedia</small>
      </FooterStyled>
    </Container>
  )
}

export const FooterStyled = styled.footer`
  background: ${DefaultTheme.colors.primaryBg};
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  font-size: 15px;
  text-transform: capitalize;
  padding: 18px;
  min-height: 60px;
  margin-top: 70px;

  @media ${DefaultTheme.media.bigDesktop} {
    margin-bottom: 80px;
  }
`
