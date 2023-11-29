import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { MapContainer } from '../../../components/yandexMap/MapContainer'
import { Button } from './../../../components/Button'
import { SectionTitle } from './../../../components/SectionTitle'
import { S } from './Contacts_Styles'
import { CardContacts } from './cardContacts/CardContacts'

const formData = [
  {
    title: 'Your Full Name ( Required)',
    typeField: 'text',
    name: 'name',
  },
  {
    title: 'Your Email ( Required)',
    typeField: 'email',
    name: 'email',
  },
  {
    title: 'Subject',
    typeField: 'text',
    name: 'subject',
  },
  {
    title: 'Your Message',
    typeField: 'textarea',
    name: 'message',
  },
]

const infoData = [
  {
    icon: 'location',
    nameCard: [
      {
        title: 'Country',
        info: 'Bangladesh',
      },
      {
        title: 'City',
        info: 'Dhaka',
      },
      {
        title: 'Streat',
        info: '35 vhatara, Badda',
      },
    ],
  },
  {
    icon: 'mail',
    nameCard: [
      {
        title: 'Email',
        info: 'youremail@gmail.com',
      },
      {
        title: 'Skype',
        info: 'user@yourusername.com',
      },
      {
        title: 'Telegram',
        info: 'user@yourusername.com',
      },
    ],
  },
  {
    icon: 'mobile',
    nameCard: [
      {
        title: 'Support services:',
        info: '15369',
      },
      {
        title: 'Office:',
        info: '+58 (021)356 587 235',
      },
      {
        title: 'Personal:',
        info: '+58 (021)356 555 235',
      },
    ],
  },
]

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id={'contacts'}>
      <Container>
        <FlexWrapper gap={'70px 30px'} justify={'space-between'}>
          <S.ContactsItem>
            <SectionTitle margin={'50px'}>Leave us your info</SectionTitle>
            <S.Form>
              <ul>
                {formData.map((F, index) => (
                  <li key={index}>
                    <SectionTitle
                      as={'label'}
                      size={'18px'}
                      weight={'500'}
                      margin={'8px'}
                      htmlFor={F.name}>
                      {F.title}
                    </SectionTitle>
                    {F.typeField === 'textarea' ? (
                      <textarea id={F.name} name={F.name}></textarea>
                    ) : (
                      <input id={F.name} type={F.typeField} name={F.name} />
                    )}
                  </li>
                ))}
              </ul>
              <Button type='submit' sideBar>
                send message
              </Button>
            </S.Form>
          </S.ContactsItem>
          <S.ContactsItem>
            <SectionTitle margin={'50px'}>Contact information</SectionTitle>
            <FlexWrapper
              as={'ul'}
              direction={'column'}
              gap={'22px'}
              justify={'space-between'}>
              {infoData.map((I, index) => (
                <CardContacts key={index} icon={I.icon} nameCard={I.nameCard} />
              ))}
            </FlexWrapper>
          </S.ContactsItem>
        </FlexWrapper>
        <MapContainer />
      </Container>
    </S.Contacts>
  )
}
