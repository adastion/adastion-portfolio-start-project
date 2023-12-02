import styled, { css } from 'styled-components'
import { Button } from '../../../components/Button'
import { DefaultTheme } from '../../../styles/Theme'

type CardPricePropsType = {
  popular?: boolean
}

const PricePlans = styled.section`
  & ul {
    width: 100%;
    overflow-x: auto;
    max-width: 970px;

    & li {
      flex-grow: 1;
      flex-shrink: 0;
    }

    @media ${DefaultTheme.media.tablet} {
      max-width: 576px;
    }

    @media ${DefaultTheme.media.mobile} {
      max-width: 340px;
    }
  }
`

const CardPrice = styled.li<CardPricePropsType>`
  max-width: 310px;
  padding: 54px 31px 24px;
  background: ${DefaultTheme.colors.primaryBg};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  text-align: center;

  & h2 small {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    color: ${DefaultTheme.colors.secondary};
  }

  & ul li {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    color: ${DefaultTheme.colors.secondary};

    & span.activeColor {
      color: ${DefaultTheme.colors.primary};
    }
  }

  & ${Button} {
    align-self: center;
    margin-top: 20px;
  }

  ${props =>
    props.popular &&
    css<CardPricePropsType>`
      position: relative;

      &::before {
        content: 'most popular';
        width: 100%;
        max-height: 30px;
        text-transform: capitalize;
        background: ${DefaultTheme.colors.secondaryBg};
        color: ${DefaultTheme.colors.primary};
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        vertical-align: middle;
        padding: 6px;
        font-size: 15px;
      }

      & ${Button} {
        background: ${DefaultTheme.colors.secondaryBg};

        &:hover {
          color: ${DefaultTheme.colors.primaryBg};
        }
      }
    `}
`

export const S = {
  PricePlans,
  CardPrice,
}
