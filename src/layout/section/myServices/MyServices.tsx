import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Text } from '../../../components/Text'
import { DefaultTheme } from '../../../styles/Theme'
import { Container } from './../../../components/Container'
import { SectionTitle } from './../../../components/SectionTitle'
import { CardServices } from './cardServices/CardServices'
import { S } from './MyServices_Styles'

const cardDataList = [
  {
    iconCard: 'coding',
    name: 'web development',
    description: 'blog, e-commerce',
  },
  {
    iconCard: 'ilustration',
    name: 'uI/uX design',
    description: 'Mobile app, website design',
  },
  {
    iconCard: 'microphone',
    name: 'sound design',
    description: 'Voice Over, Beat Making',
  },
  {
    iconCard: 'gameDevelopment',
    name: 'game design',
    description: 'Character Design, Props & Objects',
  },
  {
    iconCard: 'photographer',
    name: 'photography',
    description: 'portrait, product photography',
  },
  {
    iconCard: '',
    name: 'advertising',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.',
    btnName: 'ORDER NOW',
  },
]

export const MyServices: React.FC = () => {
  return (
    <section id={'myServices'}>
      <Container>
        <FlexWrapper align='center' direction='column'>
          <SectionTitle>My services</SectionTitle>
          <Text width={DefaultTheme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <S.GridWrap>
            {cardDataList.map((C, index) => (
              <CardServices
                iconCard={C.iconCard}
                name={C.name}
                description={C.description}
                addBtn={C.btnName}
                key={index}
              />
            ))}
          </S.GridWrap>
        </FlexWrapper>
      </Container>
    </section>
  )
}
