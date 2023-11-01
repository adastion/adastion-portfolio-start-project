import React from 'react'
import { SectionTitle } from './../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { CardServices } from './card_services/CardServices'
import { theme } from '../../../styles/Theme'
import { Container } from './../../../components/Container'
import styled from 'styled-components'

export const MyServices = () => {
  return (
    <section id={'myServices'}>
      <Container>
        <FlexWrapper align='center' direction='column'>
          <SectionTitle>My services</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <GridWrap>
            <CardServices
              iconCard={'coding'}
              name={'web development'}
              description={'blog, e-commerce'}
            />
            <CardServices
              iconCard={'ilustration'}
              name={'uI/uX design'}
              description={'Mobile app, website design'}
            />
            <CardServices
              iconCard={'microphone'}
              name={'sound design'}
              description={'Voice Over, Beat Making'}
            />
            <CardServices
              iconCard={'gameDevelopment'}
              name={'game design'}
              description={'Character Design, Props & Objects'}
            />
            <CardServices
              iconCard={'photographer'}
              name={'photography'}
              description={'portrait, product photography'}
            />
            <CardServices
              iconCard={''}
              name={'advertising'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. '
              }
              addBtn={'ORDER NOW'}
            />
          </GridWrap>
        </FlexWrapper>
      </Container>
    </section>
  )
}

const GridWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: ${theme.gapCard};
  align-items: center;
  justify-items: center;
`
