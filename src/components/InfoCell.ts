import styled, { css } from 'styled-components'
import { theme } from '../styles/Theme'

type InfoCellPropsType = {
  profile?: boolean
  justify?: string
}

export const InfoCell = styled.section<InfoCellPropsType>`
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
