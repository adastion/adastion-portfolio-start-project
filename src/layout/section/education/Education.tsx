import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Table } from '../../../components/table/Table'
import { theme } from '../../../styles/Theme'
import { SectionTitle } from './../../../components/SectionTitle'
import { Text } from './../../../components/Text'

export const Education = () => {
  return (
    <EducationStyled>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>Education</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper direction={'column'} as={'ul'}>
            <Table
              title={'University of Toronto'}
              date={'Jan 2016 - Dec 2021'}
              infoTitle={'Certificate of web training'}
              infoText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.'
              }
            />
            <Table
              title={'Programming Course'}
              date={'Jan 2016 - Dec 2021'}
              infoTitle={'Certificate of web training'}
              infoText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.'
              }
            />
            <Table
              title={'Web developer courses'}
              date={'Jan 2016 - Dec 2021'}
              infoTitle={'Certificate of web training'}
              infoText={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie         risus enim neque eget dui.'
              }
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </EducationStyled>
  )
}

const EducationStyled = styled.section`
  & ul {
    padding: 42px 32px;
    width: 100%;
    background: ${theme.colors.primaryBg};
  }
`
