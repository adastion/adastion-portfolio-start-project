import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import { Icon } from './../../../components/Icons/Icon'
import { Container } from '../../../components/Container'
import { SectionTitle } from './../../../components/SectionTitle'
import { theme } from '../../../styles/Theme'
import { Button } from './../../../components/Button'

export const Contacts = () => {
  return (
    <FlexWrapper>
      <Container>
        <FlexWrapper gap={'30px'} justify={'space-between'}>
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
            <ul>
              <CardContacts>
                <Icon iconId={'location'} />
                <ul>
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
                </ul>
              </CardContacts>
              <CardContacts>
                <Icon iconId={'mail'} />
                <ul>
                  <li>
                    <span>Email:</span>
                    <span>youremail@gmail.com</span>
                  </li>
                  <li>
                    <span>Skype:</span>
                    <span>@yourusername</span>
                  </li>
                  <li>
                    <span>Telegram:</span>
                    <span>@yourusername</span>
                  </li>
                </ul>
              </CardContacts>
              <CardContacts>
                <Icon iconId={'mobile'} />
                <ul>
                  <li>
                    <span>Support services:</span>
                    <span>15369</span>
                  </li>
                  <li>
                    <span>Office:</span>
                    <span>+58 (021)356 587 235</span>
                  </li>
                  <li>
                    <span>Personal:</span>
                    <span>+58 (021)356 587 235</span>
                  </li>
                </ul>
              </CardContacts>
            </ul>
          </ContactsItem>
        </FlexWrapper>
      </Container>
    </FlexWrapper>
  )
}

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
  
`
