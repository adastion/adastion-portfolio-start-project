import { SectionTitle } from '../SectionTitle'
import { Text } from '../Text'
import { S } from './Table_Styles'

type TablePropsType = {
  title: string
  date: string
  infoTitle: string
  infoText: string
}

export const Table: React.FC<TablePropsType> = (props: TablePropsType) => {
  return (
    <S.Table>
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
    </S.Table>
  )
}
