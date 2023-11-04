import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

const Recommendations = styled.section`
  & ul {
    width: 100%;
    overflow-x: auto;
    max-width: 970px;

    & li {
      flex-grow: 1;
      flex-shrink: 0;
    }

    @media ${theme.media.tablet} {
      max-width: 576px;
    }

    @media ${theme.media.mobile} {
      max-width: 310px;
    }
  }
`

const CardRecommendation = styled.li`
  display: grid;
  max-width: 310px;
  background: ${theme.colors.primaryBg};
  padding: 25px;
`

const Rtating = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`

export const S = {
  Recommendations,
  CardRecommendation,
  Rtating,
}
