import styled, { css } from 'styled-components'
import { Button } from '../../components/Button'
import { Picture } from '../../components/Picture'
import { theme } from '../../styles/Theme'
import { BurgerButton } from './../../components/menu/BurgerButton'

type ProfilePropsType = {
  isOpen?: boolean
}

type InfoCellPropsType = {
  profile?: boolean
  justify?: string
}

type ProgressBarPropsType = {
  percent: number
}

const Profile = styled.aside<ProfilePropsType>`
  @media ${theme.media.bigDesktop} {
    position: absolute;
    left: -110vw;
  }

  ${props =>
    props.isOpen &&
    css<ProfilePropsType>`
      @media ${theme.media.bigDesktop} {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        backdrop-filter: brightness(0.5);
      }
    `}
`

const Content = styled.div`
  background: ${theme.colors.primaryBg};
  max-width: 305px;
  width: 100%;
  padding: 50px 42px 25px;

  & ul {
    width: 100%;
  }

  & ${Picture} {
    & + h4 {
      margin-top: 30px;
    }
  }

  @media ${theme.media.bigDesktop} {
    max-width: 375px;

    & ${BurgerButton} {
      display: flex;

      z-index: 15;
      top: -14px;
      right: 0;
      left: 90%;
    }
  }
`

const ProgressBar = styled.li<ProgressBarPropsType>`
  position: relative;
  z-index: 2;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 3px;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 1;
  }

  &::before {
    bottom: -5px;
    height: 4px;
    border: 0.5px solid ${theme.colors.secondaryBg};
    overflow: hidden;
  }

  &::after {
    bottom: -4px;
    left: 1px;
    width: calc(${props => props.percent || 1}% - 1%);
    height: 2px;
    background: ${theme.colors.secondaryBg};
    border-radius: 3px;
  }
`

const InfoCell = styled.section<InfoCellPropsType>`
  padding: 25px 0;
  border-bottom: 2px solid ${theme.colors.lineTable};

  & ul li {
    display: flex;
    justify-content: ${props => props.justify || 'space-between'};
    align-items: center;
    gap: 12px;
  }

  & + ${Button} {
    margin-top: 25px;
  }

  ${props =>
    props.profile &&
    css<InfoCellPropsType>`
      & ul li {
        & > * {
          color: ${theme.colors.primary};
        }

        & span {
          display: inline-block;
        }

        & span:first-child {
          background: ${theme.colors.secondaryBg};
          padding: 0 7px;
        }
      }
    `}
`

export const S = {
  Profile,
  ProgressBar,
  InfoCell,
  Content,
}
