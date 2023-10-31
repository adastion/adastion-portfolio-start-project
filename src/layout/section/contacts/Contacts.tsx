import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'
import { Button } from './../../../components/Button'
import { Icon } from './../../../components/Icons/Icon'
import { SectionTitle } from './../../../components/SectionTitle'
import { MapContainer } from '../../../components/yandex_map/MapContainer'

export const Contacts: React.FC = () => {
  return (
    <ContactsStyled>
      <Container>
        <FlexWrapper gap={'20px 30px'} justify={'space-between'}>
          <ContactsItem>
            <SectionTitle margin={'50px'}>Leave us your info</SectionTitle>
            <StyledForm>
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
            </StyledForm>
          </ContactsItem>
          <ContactsItem>
            <SectionTitle margin={'50px'}>Contact information</SectionTitle>
            <FlexWrapper
              as={'ul'}
              direction={'column'}
              gap={'22px'}
              justify={'space-between'}>
              <CardContacts>
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
              </CardContacts>
              <CardContacts>
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
              </CardContacts>
              <CardContacts>
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
              </CardContacts>
            </FlexWrapper>
          </ContactsItem>
        </FlexWrapper>
        <MapContainer />
      </Container>
    </ContactsStyled>
  )
}

const ContactsStyled = styled.section`
  & ${FlexWrapper} + * {
    margin-top: 70px;
  }

  @media ${theme.media.desktop} {
    & ${FlexWrapper} {
      flex-direction: column-reverse;
    }
  }
`

const ContactsItem = styled.section`
  &:first-child {
    flex-grow: 1;
  }
`

const StyledForm = styled.form`
  max-width: 100%;
  padding: 25px;
  background-color: ${theme.colors.primaryBg};

  & button {
    font-weight: 600;
  }

  & ul {
    width: 100%;
    display: grid;
    gap: 25px;

    li {
      display: grid;

      & label {
        display: inline-block;
        color: ${theme.colors.secondary};
      }

      & input,
      & textarea {
        height: 50px;
        background: ${theme.colors.pageBg};
        padding: 8px;
      }

      & textarea {
        height: 210px;
      }
    }

    & + button {
      margin-top: 25px;
    }
  }
`

const CardContacts = styled.li`
  background: ${theme.colors.primaryBg};
  padding: 25px 25px 16px;

  & ${Button} {
    margin: 0 auto;
    margin-bottom: 30px;
  }

  & li {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    font-size: 15px;
    color: ${theme.colors.secondary};
  }
`
