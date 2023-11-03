import { SectionTitle } from '../../../components/SectionTitle'
import { theme } from '../../../styles/Theme'
import { Container } from './../../../components/Container'
import { FlexWrapper } from './../../../components/FlexWrapper'
import { Text } from './../../../components/Text'
import { S } from './PricePlans_Styles'
import { CardPrice } from './cardPrice/CardPrice'

const cardPriceList = {
  cardData: [
    {
      title: 'silver',
      price: 0.0,
      info: 'For most businesses that want tooptimize web queries',
      popularActive: false,
      services: [
        {
          checked: true,
          service: 'UI Design',
        },
        {
          checked: true,
          service: 'web development',
        },
        {
          checked: false,
          service: 'logo design',
        },
        {
          checked: false,
          service: 'seo optimization',
        },
        {
          checked: false,
          service: 'wordPress integration',
        },
        {
          checked: false,
          service: '5 Websites',
        },
        {
          checked: false,
          service: 'unlimited user',
        },
        {
          checked: false,
          service: '20 gB bandwith',
        },
      ],
    },
    {
      title: 'gold',
      price: 50.0,
      info: 'For most businesses that want tooptimize web queries',
      popularActive: true,
      services: [
        {
          checked: true,
          service: 'UI Design',
        },
        {
          checked: true,
          service: 'web development',
        },
        {
          checked: true,
          service: 'logo design',
        },
        {
          checked: true,
          service: 'seo optimization',
        },
        {
          checked: false,
          service: 'wordPress integration',
        },
        {
          checked: false,
          service: '5 Websites',
        },
        {
          checked: false,
          service: 'unlimited user',
        },
        {
          checked: false,
          service: '20 gB bandwith',
        },
      ],
    },
    {
      title: 'dimond',
      price: 80.0,
      info: 'For most businesses that want tooptimize web queries',
      popularActive: false,
      services: [
        {
          checked: true,
          service: 'UI Design',
        },
        {
          checked: true,
          service: 'web development',
        },
        {
          checked: true,
          service: 'logo design',
        },
        {
          checked: true,
          service: 'seo optimization',
        },
        {
          checked: true,
          service: 'wordPress integration',
        },
        {
          checked: true,
          service: '5 Websites',
        },
        {
          checked: true,
          service: 'unlimited user',
        },
        {
          checked: true,
          service: '20 gB bandwith',
        },
      ],
    },
  ],
}

export const PricePlans = () => {
  return (
    <S.PricePlans>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>Price plans</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper as={'ul'} gap={theme.gapCard}>
            {cardPriceList.cardData.map((C, index) => (
              <CardPrice
                title={C.title}
                price={C.price}
                info={C.info}
                popularActive={C.popularActive}
                services={C.services}
                key={index}
              />
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.PricePlans>
  )
}
