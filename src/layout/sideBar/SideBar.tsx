import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Icon } from '../../components/Icons/Icon'
import { Picture } from '../../components/Picture'
import { SectionTitle } from '../../components/SectionTitle'
import { Text } from '../../components/Text'
import { theme } from '../../styles/Theme'
import avatarProfile from './../../assets/images/avatar_profile.jpg'
import avatarProfileWebp from './../../assets/images/avatar_profile.webp'
import { S } from './SideBar_Styles'
import { ProgressBar } from './progressBar/ProgressBar'
import { SocialNetwork } from './socialNetwork/SocialNetwork'
import { BurgerButton } from '../../components/menu/BurgerButton'

const listData = {
  languages: [
    {
      name: 'Bangla',
      percent: 100,
    },
    {
      name: 'English',
      percent: 80,
    },
    {
      name: 'Spanish',
      percent: 60,
    },
  ],

  skills: [
    {
      name: 'Html',
      percent: 90,
    },
    {
      name: 'CSS',
      percent: 85,
    },
    {
      name: 'Js',
      percent: 80,
    },
    {
      name: 'PHP',
      percent: 75,
    },
    {
      name: 'WordPress',
      percent: 85,
    },
  ],
  socialNetwork: [
    {
      name: 'faceboock',
    },
    {
      name: 'instagram',
    },
    {
      name: 'twitter',
    },
    {
      name: 'linkedin',
    },
    {
      name: 'youtube',
    },
    {
      name: 'dribbble',
    },
  ],
}

export const Profile: React.FC = () => {
  const [isOpenCurrent, setIsOpen] = useState(true)
  let openClose = () => {
    setIsOpen(!isOpenCurrent)
  }

  return (
    <S.Profile isOpen={isOpenCurrent}>
      <S.Content>
        <BurgerButton close onClick={openClose}>
          <span></span>
        </BurgerButton>
        <FlexWrapper direction={'column'} align={'stretch'}>
          <S.InfoCell>
            <FlexWrapper direction='column' align='center'>
              <Picture status={'active'} avatar width={'150px'} height={'150px'}>
                <source srcSet={avatarProfileWebp} type='image/webp' />
                <source srcSet={avatarProfile} type='image/png' />
                <img loading='lazy' src={avatarProfile} alt='avatar' />
              </Picture>
              <SectionTitle as={'h4'} size={'18px'} weight={'500'} margin={'15px'}>
                Rayan Adlardard
              </SectionTitle>
              <Text margin={'15px'}>Font-end Developer</Text>
              <FlexWrapper as={'ul'} justify={'space-between'}>
                {listData.socialNetwork.map((SN, index) => (
                  <SocialNetwork name={SN.name} key={index} />
                ))}
              </FlexWrapper>
            </FlexWrapper>
          </S.InfoCell>
          <S.InfoCell profile>
            <FlexWrapper
              as={'ul'}
              direction={'column'}
              justify={'space-between'}
              gap={'10px'}>
              <li>
                <Text margin={'0'} as={'span'}>
                  Age:
                </Text>
                <Text margin={'0'} as={'span'}>
                  24
                </Text>
              </li>
              <li>
                <Text margin={'0'} as={'span'}>
                  Residence:
                </Text>
                <Text margin={'0'} as={'span'}>
                  BD
                </Text>
              </li>
              <li>
                <Text margin={'0'} as={'span'}>
                  Freelance:
                </Text>
                <Text margin={'0'} as={'span'}>
                  Available
                </Text>
              </li>
              <li>
                <Text margin={'0'} as={'span'}>
                  Address:
                </Text>
                <Text margin={'0'} as={'span'}>
                  Dhaka,Bangladesh
                </Text>
              </li>
            </FlexWrapper>
          </S.InfoCell>
          <S.InfoCell>
            <SectionTitle as={'h4'} size={'18px'} weight={'500'} margin={'15px'}>
              languages
            </SectionTitle>
            <FlexWrapper
              as={'ul'}
              direction={'column'}
              justify={'space-between'}
              gap={'12px'}>
              {listData.languages.map((PB, index) => (
                <ProgressBar name={PB.name} percent={PB.percent} key={index} />
              ))}
            </FlexWrapper>
          </S.InfoCell>
          <S.InfoCell>
            <SectionTitle as={'h4'} size={'18px'} weight={'500'} margin={'15px'}>
              Skills
            </SectionTitle>
            <FlexWrapper
              as={'ul'}
              direction={'column'}
              justify={'space-between'}
              gap={'12px'}>
              {listData.skills.map((PB, index) => (
                <ProgressBar name={PB.name} percent={PB.percent} key={index} />
              ))}
            </FlexWrapper>
          </S.InfoCell>
          <S.InfoCell justify={'start'}>
            <SectionTitle as={'h4'} size={'18px'} weight={'500'} margin={'15px'}>
              Extra Skills
            </SectionTitle>
            <FlexWrapper
              as={'ul'}
              direction={'column'}
              justify={'space-between'}
              gap={'10px'}>
              <li>
                <Icon
                  fill={theme.colors.secondaryBg}
                  boxWidth={'15'}
                  boxHeight={'15'}
                  size={'15px'}
                  iconId={'square'}
                />
                <Text as={'span'}>Bootstrap, Materialize</Text>
              </li>
              <li>
                <Icon
                  fill={theme.colors.secondaryBg}
                  boxWidth={'15'}
                  boxHeight={'15'}
                  size={'15px'}
                  iconId={'square'}
                />
                <Text as={'span'}>Stylus, Sass, Less</Text>
              </li>
              <li>
                <Icon
                  fill={theme.colors.secondaryBg}
                  boxWidth={'15'}
                  boxHeight={'15'}
                  size={'15px'}
                  iconId={'square'}
                />
                <Text as={'span'}>Gulp, Webpack, Grunt</Text>
              </li>
              <li>
                <Icon
                  fill={theme.colors.secondaryBg}
                  boxWidth={'15'}
                  boxHeight={'15'}
                  size={'15px'}
                  iconId={'square'}
                />
                <Text as={'span'}>GIT Knowledge</Text>
              </li>
            </FlexWrapper>
          </S.InfoCell>
          <Button font={'14px'} sideBar padding={'10px'}>
            <span>Download cv</span>
            <Icon size={'14'} iconId={'download'} />
          </Button>
        </FlexWrapper>
      </S.Content>
    </S.Profile>
  )
}
