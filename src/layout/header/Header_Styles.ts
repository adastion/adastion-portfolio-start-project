import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  gap: 30px;

  & + * {
    margin-top: 138px;
  }
`
export const S = {
  Header,
}
