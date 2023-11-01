import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { theme } from '../../../styles/Theme'
import { Container } from './../../../components/Container'
import { FlexWrapper } from './../../../components/FlexWrapper'
import { Text } from './../../../components/Text'
import { CardPrice } from './card_price/CardPrice'

const listServices = [
  'UI Design',
  'web development',
  'logo design',
  'seo optimization',
  'wordPress integration',
  '5 Websites',
  'unlimited user',
  '20 gB bandwith',
]

export const PricePlans = () => {
  return (
    <PricePlansStyled>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>Price plans</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper as={'ul'} gap={theme.gapCard}>
            <CardPrice
              title={'silver'}
              price={'0.00'}
              info={'For most businesses that want tooptimize web queries'}
              service={listServices}
            />
            <CardPrice
              title={'gold'}
              price={'50.00'}
              info={'For most businesses that want tooptimize web queries'}
              service={listServices}
              popularActive
            />
            <CardPrice
              title={'dimond'}
              price={'80.00'}
              info={'For most businesses that want tooptimize web queries'}
              service={listServices}
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </PricePlansStyled>
  )
}

const PricePlansStyled = styled.section`
  & ul {
    width: 100%;
    overflow-x: auto;
    max-width: 970px;

    & li {
      flex-grow: 1;
      flex-shrink: 0;
    }

    @media ${theme.media.tablet} {
      max-width: 576px;
    }

    @media ${theme.media.mobile} {
      max-width: 340px;
    }
  }
`
