import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Table } from '../../../components/Table/Table'
import { Text } from '../../../components/Text'
import { theme } from '../../../styles/Theme'

export const WorkHistory = () => {
  return (
    <WorkHistoryStyled>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>WorkHistory</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper direction={'column'} as={'ul'}>
            <Table
              title={'Lead Web Designer'}
              date={'Jan 2016 - Dec 2021'}
              infoTitle={'Certificate of web training'}
              infoText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.'
              }
            />
            <Table
              title={'Junior Web Designer'}
              date={'Jan 2016 - Dec 2021'}
              infoTitle={'Certificate of web training'}
              infoText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.'
              }
            />
            <Table
              title={'Senior Web Designer'}
              date={'Jan 2016 - Dec 2021'}
              infoTitle={'Certificate of web training'}
              infoText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.'
              }
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </WorkHistoryStyled>
  )
}

const WorkHistoryStyled = styled.section`
  & ul {
    padding: 42px 32px;
    width: 100%;
    background: ${theme.colors.primaryBg};
  }
`
