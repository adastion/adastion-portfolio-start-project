import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { Table } from '../../../components/table/Table'
import { S } from '../../../components/table/Table_Styles'
import { DefaultTheme } from '../../../styles/Theme'

const tableEducationList = [
  {
    title: 'University of Toronto',
    date: 'Jan 2016 - Dec 2021',
    infoTitle: 'Certificate of web training',
    infoText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.',
  },
  {
    title: 'Programming Course',
    date: 'Jan 2016 - Dec 2021',
    infoTitle: 'Certificate of web training',
    infoText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.',
  },
  {
    title: 'Web developer courses',
    date: 'Jan 2016 - Dec 2021',
    infoTitle: 'Certificate of web training',
    infoText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.',
  },
]

export const Education: React.FC = () => {
  return (
    <S.TableWrap id={'cv'}>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>Education</SectionTitle>
          <Text width={DefaultTheme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper direction={'column'} as={'ul'}>
            {tableEducationList.map(T => (
              <Table
                title={T.title}
                date={T.date}
                infoTitle={T.infoTitle}
                infoText={T.infoText}
              />
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.TableWrap>
  )
}
