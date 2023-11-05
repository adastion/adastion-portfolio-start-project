import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Picture } from '../../../components/Picture'
import { Button } from '../../../components/Button'
import { Text } from '../../../components/Text'
import { BurgerButton } from '../../../components/burgerButton/BurgerButton'

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

  & ${BurgerButton} {
    display: none;
  }

  @media ${theme.media.bigDesktop} {
    position: relative;

    & ${BurgerButton} {
      display: flex;
      top: 35px;
      left: 30px;
      transition: all 0.3s cubic-bezier(0.52, -0.6, 0.485, 1.65);

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @media ${theme.media.desktop} {
    padding: 0;

    & ${BurgerButton} {
      & + * {
        margin-top: 45px;
      }
    }
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
