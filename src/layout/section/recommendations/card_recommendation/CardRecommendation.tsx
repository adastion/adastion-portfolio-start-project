import React from 'react'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/Icons/Icon'
import { Text } from './../../../../components/Text'
import avatrPreview1 from './../../../../assets/images/ava_1.jpg'
import avatrPreview1Webp from './../../../../assets/images/ava_1.webp'
import avatrPreview2 from './../../../../assets/images/ava_2.jpg'
import avatrPreview2Webp from './../../../../assets/images/ava_2.webp'
import avatrPreview3 from './../../../../assets/images/ava_3.jpg'
import avatrPreview3Webp from './../../../../assets/images/ava_3.webp'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Picture } from '../../../../components/Picture'

type CardRecommendationPropdType = {
  nameIcon: string
  title: string
  description: string
  indexCard: number
}

const listUsers = [
  {
    picture: [avatrPreview1, avatrPreview1Webp],
    name: 'James Gouse',
    profession: 'Graphic Designer',
  },
  {
    picture: [avatrPreview2, avatrPreview2Webp],
    name: 'Tiana Philips',
    profession: 'Photographer',
  },
  {
    picture: [avatrPreview3, avatrPreview3Webp],
    name: 'Talan Westervelt',
    profession: 'Business man',
  },
]

export const CardRecommendation = (props: CardRecommendationPropdType) => {
  return (
    <CardRecommendationStyled>
      <Rtating>
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
        <Icon iconId={props.nameIcon} fill={theme.colors.secondaryBg} size={'18px'} />
      </Rtating>
      <SectionTitle as={'h4'} margin={'18px'} size={'18px'} weight={'500'}>
        {props.title}
      </SectionTitle>
      <Text margin={'30px'} position={'start'}>
        {props.description}
      </Text>
      <FlexWrapper gap={'20px'}>
        <Picture avatar width={'80px'} height={'80px'}>
          <source srcSet={listUsers[props.indexCard].picture[1]} type='image/webp' />
          <img loading='lazy' src={listUsers[props.indexCard].picture[0]} alt='avatar' />
        </Picture>
        <FlexWrapper direction={'column'} justify={'center'}>
          <SectionTitle as={'h4'} margin={'5px'} size={'18px'} weight={'500'}>
            {listUsers[props.indexCard].name}
          </SectionTitle>
          <Text margin={'30px'} position={'start'}>
            {listUsers[props.indexCard].profession}
          </Text>
        </FlexWrapper>
      </FlexWrapper>
    </CardRecommendationStyled>
  )
}

const CardRecommendationStyled = styled.li`
  display: grid;
  max-width: 310px;
  background: ${theme.colors.primaryBg};
  padding: 25px;
`

const Rtating = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`
