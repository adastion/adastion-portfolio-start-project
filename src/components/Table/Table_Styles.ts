import styled from 'styled-components'
import { theme } from '../../styles/Theme'

const TableWrap = styled.section`
  & ul {
    padding: 42px 32px;
    width: 100%;
    background: ${theme.colors.primaryBg};

    @media ${theme.media.mobile} {
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
  border-bottom: 2px solid ${theme.colors.lineTable};

  & + li {
    margin-top: 30px;
  }

  &:last-child {
    border: unset;
    padding: 0;
  }

  & span + span {
    color: ${theme.colors.primaryBg};
    font-size: 10px;
    font-weight: 400;
    line-height: 100.9%;
    background: ${theme.colors.secondaryBg};
    padding: 4px 7px;
    margin-left: 20px;
  }

  @media ${theme.media.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  }
`

export const S = {
  Table,
  TableWrap,
}
