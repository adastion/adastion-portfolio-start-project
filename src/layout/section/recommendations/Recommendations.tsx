import React from 'react'
import avatrPreview1 from '../../../assets/images/ava_1.jpg'
import avatrPreview1Webp from '../../../assets/images/ava_1.webp'
import avatrPreview2 from '../../../assets/images/ava_2.jpg'
import avatrPreview2Webp from '../../../assets/images/ava_2.webp'
import avatrPreview3 from '../../../assets/images/ava_3.jpg'
import avatrPreview3Webp from '../../../assets/images/ava_3.webp'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { DefaultTheme } from '../../../styles/Theme'
import { SectionTitle } from './../../../components/SectionTitle'
import { Text } from './../../../components/Text'
import { S } from './Recommendations_Styles'
import { CardRecommendation } from './cardRecommendation/CardRecommendation'

const cardListRecommendation = [
  {
    nameIcon: 'star',
    title: 'Great Quality!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
    dataUser: {
      picture: [avatrPreview1, avatrPreview1Webp],
      name: 'James Gouse',
      profession: 'Graphic Designer',
    },
  },
  {
    nameIcon: 'star',
    title: 'Amazing work!',
    description:
      'Lorem ipsum dolor sit amet, ac dictum a urna viverra morbi. Morbi donec amet....',
    dataUser: {
      picture: [avatrPreview2, avatrPreview2Webp],
      name: 'Tiana Philips',
      profession: 'Photographer',
    },
  },
  {
    nameIcon: 'star',
    title: 'Great',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisc Morbi donec amet....',
    dataUser: {
      picture: [avatrPreview3, avatrPreview3Webp],
      name: 'Talan Westervelt',
      profession: 'Business man',
    },
  },
]

export const Recommendations: React.FC = () => {
  return (
    <S.Recommendations>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>recommendations</SectionTitle>
          <Text width={DefaultTheme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper as={'ul'} gap={DefaultTheme.gapCard}>
            {cardListRecommendation.map((C, index) => (
              <CardRecommendation
                indexCard={index}
                nameIcon={C.nameIcon}
                title={C.title}
                description={C.description}
                dataUser={C.dataUser}
                key={index}
              />
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Recommendations>
  )
}
