import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { SectionTitle } from '../SectionTitle'
import { Text } from './../../components/Text'

type TablePropsType = {
  title: string
  date: string
  infoTitle: string
  infoText: string
}

export const Table = (props: TablePropsType) => {
  return (
    <TableStyled>
      <div>
        <SectionTitle size={'18px'} weight={'500'}>
          {props.title}
        </SectionTitle>
        <Text size={'15px'} position={'start'}>
          <span>Student</span>
          <span>{props.date}</span>
        </Text>
      </div>
      <div>
        <SectionTitle size={'18px'} weight={'500'}>
          {props.infoTitle}
        </SectionTitle>
        <Text size={'15px'} position={'start'} width={'536px'} flex>
          {props.infoText}
        </Text>
      </div>
    </TableStyled>
  )
}

const TableStyled = styled.li`
  display: grid;
  grid-template-columns: 2fr 3fr;
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
`
