import React from 'react'
import avatarProfile from './../../../assets/images/avatar_profile.jpg'
import avatarProfileWebp from './../../../assets/images/avatar_profile.webp'
import { Icon } from '../../../components/Icons/Icon'
import { Button } from '../../../components/Button'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { InfoCell } from '../../../components/InfoCell'
import { Picture } from '../../../components/Picture'


export const Profile: React.FC = () => {
  return (
    <ProfileStyled>
      <FlexWrapper direction={'column'} align={'stretch'}>
        <InfoCell>
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
              <li>
                <Button width={'24px'} circle>
                  <Icon size={'14px'} iconId={'faceboock'} />
                </Button>
              </li>
              <li>
                <Button width={'24px'} circle>
                  <Icon size={'14px'} iconId={'instagram'} />
                </Button>
              </li>
              <li>
                <Button width={'24px'} circle>
                  <Icon size={'14px'} iconId={'twitter'} />
                </Button>
              </li>
              <li>
                <Button width={'24px'} circle>
                  <Icon size={'14px'} iconId={'linkedin'} />
                </Button>
              </li>
              <li>
                <Button width={'24px'} circle>
                  <Icon size={'14px'} iconId={'youtube'} />
                </Button>
              </li>
              <li>
                <Button width={'24px'} circle>
                  <Icon size={'14px'} iconId={'dribbble'} />
                </Button>
              </li>
            </FlexWrapper>
          </FlexWrapper>
        </InfoCell>
        <InfoCell profile>
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
        </InfoCell>
        {/* <InfoCell>
          <SectionTitle as={'h4'} size={'18px'} weight={'500'} margin={'15px'}>
            Languages
          </SectionTitle>
          <FlexWrapper
            as={'ul'}
            direction={'column'}
            justify={'space-between'}
            gap={'10px'}>
            <S.ProgressBar percent='100'>
              <Text margin={'0'} as={'span'}>
                Bangla
              </Text>
              <Text margin={'0'} as={'span'}>
                100%
              </Text>
            </S.ProgressBar>
            <ProgressBar percent='80'>
              <Text margin={'0'} as={'span'}>
                English
              </Text>
              <Text margin={'0'} as={'span'}>
                80%
              </Text>
            </ProgressBar>
            <ProgressBar percent='60'>
              <Text margin={'0'} as={'span'}>
                Spanish
              </Text>
              <Text margin={'0'} as={'span'}>
                60%
              </Text>
            </ProgressBar>
          </FlexWrapper>
        </InfoCell>
        <InfoCell>
          <SectionTitle as={'h4'} size={'18px'} weight={'500'} margin={'15px'}>
            Skills
          </SectionTitle>
          <FlexWrapper
            as={'ul'}
            direction={'column'}
            justify={'space-between'}
            gap={'10px'}>
            <ProgressBar percent={'90'}>
              <Text margin={'0'} as={'span'}>
                Html
              </Text>
              <Text margin={'0'} as={'span'}>
                90%
              </Text>
            </ProgressBar>
            <ProgressBar percent={'85'}>
              <Text margin={'0'} as={'span'}>
                CSS
              </Text>
              <Text margin={'0'} as={'span'}>
                85%
              </Text>
            </ProgressBar>
            <ProgressBar percent={'80'}>
              <Text margin={'0'} as={'span'}>
                Js
              </Text>
              <Text margin={'0'} as={'span'}>
                80%
              </Text>
            </ProgressBar>
            <ProgressBar percent={'75'}>
              <Text margin={'0'} as={'span'}>
                PHP
              </Text>
              <Text margin={'0'} as={'span'}>
                75%
              </Text>
            </ProgressBar>
            <ProgressBar percent={'85'}>
              <Text margin={'0'} as={'span'}>
                WordPress
              </Text>
              <Text margin={'0'} as={'span'}>
                85%
              </Text>
            </ProgressBar>
          </FlexWrapper>
        </InfoCell> */}
        <InfoCell justify={'start'}>
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
        </InfoCell>
        <Button font={'14px'} sideBar padding={'10px'}>
          <span>Download cv</span>
          <Icon size={'14'} iconId={'download'} />
        </Button>
      </FlexWrapper>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.aside`
  background: ${theme.colors.primaryBg};
  max-width: 305px;
  width: 100%;
  height: 100%;
  padding: 50px 42px 25px;

  & ul {
    width: 100%;
  }

  & ${Picture} {
    & + h4 {
      margin-top: 30px;
    }
  }

  @media ${theme.media.bigDesktop} {
    position: absolute;
    left: -110vw;
  }
`
