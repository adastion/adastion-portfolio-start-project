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
      <button>
        <span></span>
      </button>
      <FlexWrapper gap={'30px 10px'} justify={'space-between'} align={'center'}>
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
          <img loading='lazy' src={myPhoto} alt='photo' />
        </Picture>
      </FlexWrapper>
    </BannerStyled>
  )
}

const BannerStyled = styled.section`
  background: ${theme.colors.primaryBg || '#F0F0F6'};
  color: ${theme.colors.primary};

  & button {
    position: relative;
    top: 35px;
    left: 30px;
    width: 30px;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    & span {
      display: inline-block;
      width: 100%;
      height: 2px;
      background: ${theme.colors.secondaryBg};
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      background: ${theme.colors.secondaryBg};
      transition: all 0.1s ease-in;
    }

    &::before {
      transform: translateY(-8px);
    }

    &::after {
      transform: translateY(8px);
    }

    &:hover {
      & span {
        z-index: -1;
      }

      &::before {
        transform: rotate(45deg) translateY(0);
        transform-origin: center;
      }

      &::after {
        transform: rotate(-45deg) translateY(0);
        transform-origin: cenetr;
      }
    }

    @media ${theme.media.bigDesktop} {
      display: flex;
    }

    @media ${theme.media.desktop} {
      & + * {
        margin-top: 45px;
      }
    }
  }

  & > ${FlexWrapper} {
    & > ${FlexWrapper} {
      flex-shrink: 30;
    }

    & ${Picture} {
      align-self: end;
    }
  }

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

  @media ${theme.media.mobile} {
    & > ${FlexWrapper} {
      flex-direction: column;

      & > ${FlexWrapper} {
        padding: 32px;
      }

      & ${Picture} {
        align-self: auto;
      }
    }

    & ${Text} {
      margin-top: 90px;
    }

    & ${Button} {
      margin-top: 34px;
    }
  }
`
