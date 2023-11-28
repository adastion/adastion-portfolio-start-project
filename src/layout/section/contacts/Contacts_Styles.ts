import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { DefaultTheme } from '../../../styles/Theme'

const Contacts = styled.section`
  & ${FlexWrapper} + * {
    margin-top: 70px;
  }

  @media ${DefaultTheme.media.desktop} {
    & ${FlexWrapper} {
      flex-direction: column-reverse;
    }
  }
`

const ContactsItem = styled.section`
  &:first-child {
    flex-grow: 30;
    flex-shrink: 0;
  }

  &:last-child {
    max-width: 370px;
    width: 100%;

    @media ${DefaultTheme.media.desktop} {
      max-width: 100%;
    }

    @media ${DefaultTheme.media.tablet} {
      max-width: none;
    }
  }
`

const Form = styled.form`
  max-width: 100%;
  padding: 25px;
  background-color: ${DefaultTheme.colors.primaryBg};

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
        color: ${DefaultTheme.colors.secondary};
        cursor: default;
      }

      & input,
      & textarea {
        height: 50px;
        background: ${DefaultTheme.colors.pageBg};
        padding: 8px;

        &:focus-visible {
          border: 1px solid ${DefaultTheme.colors.secondaryBg};
        }
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
  background: ${DefaultTheme.colors.primaryBg};
  padding: 25px 25px 16px;

  & ${Button} {
    margin: 0 auto;
    margin-bottom: 30px;
    cursor: default;
  }

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    font-size: 15px;
    color: ${DefaultTheme.colors.secondary};
    height: 100%;
    width: 100%;
  }
`

export const S = {
  Contacts,
  ContactsItem,
  CardContacts,
  Form,
}
