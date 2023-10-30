import styled, { css } from 'styled-components'
import { theme } from '../../../../styles/Theme'

type ProgressBarPropsType = {
  percent: number
}

type InfoCellPropsType = {
  profile?: boolean
  justify?: string
}

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
    width: calc(${props => props.percent || '1'}% - 1%);
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

  & + button {
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
  ProgressBar,
  InfoCell,
}
