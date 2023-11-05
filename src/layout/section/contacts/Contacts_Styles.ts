import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'

const Contacts = styled.section`
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

export const S = {
  Contacts,
  ContactsItem,
  CardContacts,
  StyledForm,
}
