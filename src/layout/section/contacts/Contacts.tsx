import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { MapContainer } from '../../../components/yandex_map/MapContainer'
import { Button } from './../../../components/Button'
import { Icon } from './../../../components/Icons/Icon'
import { SectionTitle } from './../../../components/SectionTitle'
import { S } from './Contacts_Styles'

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id={'contacts'}>
      <Container>
        <FlexWrapper gap={'20px 30px'} justify={'space-between'}>
          <S.ContactsItem>
            <SectionTitle margin={'50px'}>Leave us your info</SectionTitle>
            <S.StyledForm>
              <ul>
                <li>
                  <SectionTitle
                    as={'label'}
                    size={'18px'}
                    weight={'500'}
                    margin={'8px'}
                    htmlFor='name'>
                    Your Full Name ( Required)
                  </SectionTitle>
                  <input id='name' type='text' />
                </li>
                <li>
                  <SectionTitle
                    as={'label'}
                    size={'18px'}
                    weight={'500'}
                    margin={'8px'}
                    htmlFor='email'>
                    Your Email ( Required)
                  </SectionTitle>
                  <input id='email' type='email' />
                </li>
                <li>
                  <SectionTitle
                    as={'label'}
                    size={'18px'}
                    weight={'500'}
                    margin={'8px'}
                    htmlFor='subject'>
                    Subject
                  </SectionTitle>
                  <input id='subject' type='text' />
                </li>
                <li>
                  <SectionTitle
                    as={'label'}
                    size={'18px'}
                    weight={'500'}
                    margin={'8px'}
                    htmlFor='message'>
                    Your Message
                  </SectionTitle>
                  <textarea id='message'></textarea>
                </li>
              </ul>
              <Button type='submit' sideBar>
                send message
              </Button>
            </S.StyledForm>
          </S.ContactsItem>
          <S.ContactsItem>
            <SectionTitle margin={'50px'}>Contact information</SectionTitle>
            <FlexWrapper
              as={'ul'}
              direction={'column'}
              gap={'22px'}
              justify={'space-between'}>
              <S.CardContacts>
                <Button as={'div'} circle>
                  <Icon
                    iconId={'location'}
                    boxWidth={'18px'}
                    boxHeight={'18px'}
                    size={'18'}
                  />
                </Button>
                <FlexWrapper direction={'column'} gap={'16px'}>
                  <li>
                    <span>Country:</span>
                    <span>Bangladesh</span>
                  </li>
                  <li>
                    <span>City:</span>
                    <span>Dhaka</span>
                  </li>
                  <li>
                    <span>Streat:</span>
                    <span>35 vhatara, Badda</span>
                  </li>
                </FlexWrapper>
              </S.CardContacts>
              <S.CardContacts>
                <Button as={'div'} circle>
                  <Icon
                    iconId={'mail'}
                    boxWidth={'18px'}
                    boxHeight={'18px'}
                    size={'18'}
                  />
                </Button>
                <FlexWrapper direction={'column'} gap={'25px'}>
                  <li>
                    <span>Email:</span>
                    <span>youremail@gmail.com</span>
                  </li>
                  <li>
                    <span>Skype:</span>
                    <a href='mailto:user@yourusername.com'>user@yourusername.com</a>
                  </li>
                  <li>
                    <span>Telegram:</span>
                    <a href='mailto:user@yourusername.com'>user@yourusername.com</a>
                  </li>
                </FlexWrapper>
              </S.CardContacts>
              <S.CardContacts>
                <Button as={'div'} circle>
                  <Icon
                    iconId={'mobile'}
                    boxWidth={'18px'}
                    boxHeight={'18px'}
                    size={'18'}
                  />
                </Button>
                <FlexWrapper direction={'column'} gap={'25px'}>
                  <li>
                    <span>Support services:</span>
                    <span>15369</span>
                  </li>
                  <li>
                    <span>Office:</span>
                    <a href='tel:+58021356587235'>+58 (021)356 587 235</a>
                  </li>
                  <li>
                    <span>Personal:</span>
                    <a href='tel:+58021356587235'>+58 (021)356 587 235</a>
                  </li>
                </FlexWrapper>
              </S.CardContacts>
            </FlexWrapper>
          </S.ContactsItem>
        </FlexWrapper>
        <MapContainer />
      </Container>
    </S.Contacts>
  )
}
