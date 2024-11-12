import styled from 'styled-components'
import { DefaultTheme } from '../../styles/Theme'

const TableWrap = styled.section`
  & ul {
    padding: 42px 32px;
    width: 100%;
    background: ${DefaultTheme.colors.primaryBg};

    @media ${DefaultTheme.media.mobile} {
      max-width: 340px;
    }
  }
`

const Table = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, auto));
  gap: 20px;
  justify-content: center;
  padding-bottom: 30px;
  border-bottom: 2px solid ${DefaultTheme.colors.lineTable};

  & + li {
    margin-top: 30px;
  }

  &:last-child {
    border: unset;
    padding: 0;
  }

  & span + span {
    color: ${DefaultTheme.colors.primary};
    font-size: 10px;
    font-weight: 400;
    line-height: 100.9%;
    background: ${DefaultTheme.colors.secondaryBg};
    padding: 4px 7px;
    margin-left: 20px;
  }

  @media ${DefaultTheme.media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  }
`

export const S = {
  Table,
  TableWrap,
}
