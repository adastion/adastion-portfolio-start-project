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

  & button {
    position: relative;
    top: 35px;
    left: 30px;
    width: 30px;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    & span {
      display: inline-block;
      width: 100%;
      height: 2px;
      background: ${theme.colors.secondaryBg};
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      background: ${theme.colors.secondaryBg};
      transition: all 0.1s ease-in;
    }

    &::before {
      transform: translateY(-8px);
    }

    &::after {
      transform: translateY(8px);
    }

    &:hover {
      & span {
        z-index: -1;
      }

      &::before {
        transform: rotate(45deg) translateY(0);
        transform-origin: center;
      }

      &::after {
        transform: rotate(-45deg) translateY(0);
        transform-origin: cenetr;
      }
    }

    @media ${theme.media.bigDesktop} {
      display: flex;
    }

    @media ${theme.media.desktop} {
      & + * {
        margin-top: 45px;
      }
    }
  }

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