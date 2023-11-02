import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Picture } from '../../../components/Picture'
import { Button } from '../../../components/Button'
import { Text } from '../../../components/Text'

const Banner = styled.section`
  background: ${theme.colors.primaryBg || '#F0F0F6'};
  color: ${theme.colors.primary};
  padding: 0 30px;

  & > ${FlexWrapper} {
    & > ${FlexWrapper} {
      flex-shrink: 30;
    }

    & ${Picture} {
      align-self: end;
    }
  }

  & h1 {
    & span {
      color: ${theme.colors.secondaryBg};
    }
  }

  & p {
    max-width: 424px;
  }

  & ${Button}:hover {
    & svg {
      transform: rotate(-45deg);
    }
  }

  @media ${theme.media.desktop} {
    padding: 0;
  }

  @media ${theme.media.mobile} {
    & > ${FlexWrapper} {
      flex-direction: column;

      & > ${FlexWrapper} {
        padding: 32px;
      }

      & ${Picture} {
        align-self: auto;
      }
    }

    & ${Text} {
      margin-top: 90px;
    }

    & ${Button} {
      margin-top: 34px;
    }
  }
`

export const S = {
  Banner,
}
