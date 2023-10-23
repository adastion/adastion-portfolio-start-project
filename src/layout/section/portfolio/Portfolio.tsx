import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { Container } from '../../../components/Container'

export const Portfolio = () => {
  return (
    <FlexWrapper align={'center'} direction='column'>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>Portfolio</SectionTitle>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper justify={'center'}>
            <li>
              <a href='#l'>All categories</a>
            </li>
            <li>
              <a href='#l'>UI Design</a>
            </li>
            <li>
              <a href='#l'>Web Templates</a>
            </li>
            <li>
              <a href='#l'>Logo</a>
            </li>
            <li>
              <a href='#l'>Branding</a>
            </li>
          </FlexWrapper>
          <FlexWrapper wrap={'wrap'}>
            <li>
              <a href='#l'>
                <img src='#l' alt='portfolio' />
              </a>
            </li>
            <li>
              <a href='#l'>
                <img src='#l' alt='portfolio' />
              </a>
            </li>
            <li>
              <a href='#l'>
                <img src='#l' alt='portfolio' />
              </a>
            </li>
            <li>
              <a href='#l'>
                <img src='#l' alt='portfolio' />
              </a>
            </li>
            <li>
              <a href='#l'>
                <img src='#l' alt='portfolio' />
              </a>
            </li>
            <li>
              <a href='#l'>
                <img src='#l' alt='portfolio' />
              </a>
            </li>
            <li>
              <a href='#l'>
                <img src='#l' alt='portfolio' />
              </a>
            </li>
            <li>
              <a href='#l'>
                <img src='#l' alt='portfolio' />
              </a>
            </li>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </FlexWrapper>
  )
}
