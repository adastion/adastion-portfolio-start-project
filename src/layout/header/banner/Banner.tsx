import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import myPhoto from './../../../assets/images/your_Image_1.png'
import myPhotoWebp from './../../../assets/images/your_Image_1.webp'
import { Icon } from '../../../components/Icons/Icon'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Button } from '../../../components/Button'
import { Picture } from '../../../components/Picture'

export const Banner = () => {
  return (
    <BannerStyled>
      <FlexWrapper gap={'10px'} justify={'center'} align={'center'}>
        <FlexWrapper direction={'column'} align={'start'} padding={'25px'}>
          <SectionTitle margin={'2px'} size={'48px'} transform>
            I’m Rayan Adlrdard
          </SectionTitle>
          <SectionTitle margin={'18px'} as={'h1'} size={'48px'} transform>
            <span> Front-end</span> Developer
          </SectionTitle>
          <Text
            margin={'25px'}
            size={'16px'}
            position={'start'}
            color={theme.colors.primary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat
            placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
          </Text>
          <Button as={'a'}>
            <span>HIRE ME</span>
            <Icon iconId={'arrowRight'} size={'16px'} />
          </Button>
        </FlexWrapper>
        <Picture>
          <source srcSet={myPhotoWebp} type='image/webp' />
          <source srcSet={myPhoto} type='image/png' />
          <img src={myPhoto} alt='photo' />
        </Picture>
      </FlexWrapper>
    </BannerStyled>
  )
}

const BannerStyled = styled.section`
  background: ${theme.colors.primaryBg || '#F0F0F6'};
  color: ${theme.colors.primary};

  & h1 {
    & span {
      color: ${theme.colors.secondaryBg};
    }
  }

  & p {
    max-width: 424px;
  }

  & ${Button}:hover {
    & svg {
      transform: rotate(-45deg);
    }
  }
`
