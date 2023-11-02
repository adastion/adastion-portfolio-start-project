import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/Icons/Icon'
import { Picture } from '../../../components/Picture'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { theme } from '../../../styles/Theme'
import myPhoto from './../../../assets/images/your_Image_1.png'
import myPhotoWebp from './../../../assets/images/your_Image_1.webp'
import { S } from './Banner_Styles'
import { BurgerButton } from './../../../components/menu/BurgerButton'

export const Banner = () => {
  return (
    <S.Banner>
      <BurgerButton>
        <span></span>
      </BurgerButton>
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
    </S.Banner>
  )
}
