import styled from 'styled-components'
import { Container } from './../../components/Container'
import { Banner } from './banner/Banner'

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <Banner />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  gap: 30px;

  & + * {
    margin-top: 138px;
  }
`
