import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Button } from '../../../components/Button'

const Portfolio = styled.section`
  & nav {
    & + * {
      margin-top: 50px;
    }

    & ul {
      width: 100%;
      overflow-x: auto;

      & li {
        font-size: 18px;
        font-weight: 500;
        flex-grow: 1;
        flex-shrink: 0;

        & ${Button} {
          background: unset;
          padding: 0;
          text-transform: capitalize;

          &:hover,
          &:focus-visible {
            opacity: 0.7;
            color: ${theme.colors.secondaryBg};
          }

          &.active {
            color: ${theme.colors.secondaryBg};

            &:hover,
            &:focus-visible {
              opacity: unset;
              color: ${theme.colors.secondaryBg};
              cursor: auto;
            }
          }
        }
      }

      @media ${theme.media.mobile} {
        max-width: 340px;
        justify-content: start;
      }
    }
  }
`

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  justify-items: center;
  gap: 20px;

  & li a {
    display: inline-block;
    position: relative;
    z-index: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      opacity: 0;
      z-index: -1;
    }

    &::before {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      background: ${theme.colors.secondaryBg};
    }

    &::after {
      content: '+';
      font-size: 85px;
      line-height: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:hover,
    &:focus-visible {
      &::before,
      &::after {
        transition: all 0.3s ease-in-out;
        z-index: 1;
        opacity: 0.9;
      }
    }

    & img {
      aspect-ratio: 1/0.971;
      object-fit: cover;
    }
  }
`

export const S = {
  Portfolio,
  GridWrapper,
}
