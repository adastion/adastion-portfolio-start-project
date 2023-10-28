import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from './../../../components/SectionTitle'
import { Text } from './../../../components/Text'
import { CardRecommendation } from './card_recommendation/CardRecommendation'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Container } from '../../../components/Container'

const cardListRecommendation = [
  {
    nameIcon: 'star',
    title: 'Great Quality!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
  },
  {
    nameIcon: 'star',
    title: 'Amazing work!',
    description:
      'Lorem ipsum dolor sit amet, ac dictum a urna viverra morbi. Morbi donec amet....',
  },
  {
    nameIcon: 'star',
    title: 'Great',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisc Morbi donec amet....',
  },
]

export const Recommendations = () => {
  return (
    <RecommendationsStyled>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>recommendations</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper as={'ul'} wrap={'wrap'} gap={theme.gapCard}>
            {cardListRecommendation.map((card, index) => (
              <CardRecommendation
                indexCard={index}
                nameIcon={card.nameIcon}
                title={card.title}
                description={card.description}
              />
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </RecommendationsStyled>
  )
}

const RecommendationsStyled = styled.section``
