import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { theme } from '../../../styles/Theme'

const GridWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: ${theme.gapCard};
  align-items: center;
  justify-items: center;
`
const CardServices = styled.div`
  background: ${theme.colors.primaryBg};
  width: 100%;
  height: 100%;

  & svg + * {
    margin-top: 25px;
  }

  & ${Button}:empty {
    display: none;
  }
`

export const S = {
  GridWrap,
  CardServices,
}
