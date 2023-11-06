import React, { useState } from 'react'
import portfolioPicPreview_1 from '../../../assets/images/portfolio_1.jpg'
import portfolioPicPreviewWebp_1 from '../../../assets/images/portfolio_1.webp'
import portfolioPicPreview_2 from '../../../assets/images/portfolio_2.jpg'
import portfolioPicPreviewWebp_2 from '../../../assets/images/portfolio_2.webp'
import portfolioPicPreview_3 from '../../../assets/images/portfolio_3.jpg'
import portfolioPicPreviewWebp_3 from '../../../assets/images/portfolio_3.webp'
import portfolioPicPreview_4 from '../../../assets/images/portfolio_4.jpg'
import portfolioPicPreviewWebp_4 from '../../../assets/images/portfolio_4.webp'
import portfolioPicPreview_5 from '../../../assets/images/portfolio_5.jpg'
import portfolioPicPreviewWebp_5 from '../../../assets/images/portfolio_5.webp'
import portfolioPicPreview_6 from '../../../assets/images/portfolio_6.jpg'
import portfolioPicPreviewWebp_6 from '../../../assets/images/portfolio_6.webp'
import portfolioPicPreview_7 from '../../../assets/images/portfolio_7.jpg'
import portfolioPicPreviewWebp_7 from '../../../assets/images/portfolio_7.webp'
import portfolioPicPreview_8 from '../../../assets/images/portfolio_8.jpg'
import portfolioPicPreviewWebp_8 from '../../../assets/images/portfolio_8.webp'
import portfolioPicPreview_9 from '../../../assets/images/portfolio_9.jpg'
import portfolioPicPreviewWebp_9 from '../../../assets/images/portfolio_9.webp'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Picture } from '../../../components/Picture'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { theme } from '../../../styles/Theme'
import { S } from './Portfolio_Styles'

type TabsType = {
  title: string
  status: 'all' | 'ui design' | 'web templates' | 'logo' | 'branding'
}

const tabsItemsList: Array<TabsType> = [
  {
    title: 'All categories',
    status: 'all',
  },
  {
    title: 'UI Design',
    status: 'ui design',
  },
  {
    title: 'Web Templates',
    status: 'web templates',
  },
  {
    title: 'Logo',
    status: 'logo',
  },
  {
    title: 'Branding',
    status: 'branding',
  },
]

const cardsPortfolioList = [
  {
    preview: {
      jpg: portfolioPicPreview_1,
      webp: portfolioPicPreviewWebp_1,
    },
    type: 'ui design',
  },
  {
    preview: {
      jpg: portfolioPicPreview_2,
      webp: portfolioPicPreviewWebp_2,
    },
    type: 'ui design',
  },
  {
    preview: {
      jpg: portfolioPicPreview_3,
      webp: portfolioPicPreviewWebp_3,
    },
    type: 'logo',
  },
  {
    preview: {
      jpg: portfolioPicPreview_4,
      webp: portfolioPicPreviewWebp_4,
    },
    type: 'web templates',
  },
  {
    preview: {
      jpg: portfolioPicPreview_5,
      webp: portfolioPicPreviewWebp_5,
    },
    type: 'web templates',
  },
  {
    preview: {
      jpg: portfolioPicPreview_6,
      webp: portfolioPicPreviewWebp_6,
    },
    type: 'web templates',
  },
  {
    preview: {
      jpg: portfolioPicPreview_7,
      webp: portfolioPicPreviewWebp_7,
    },
    type: 'branding',
  },
  {
    preview: {
      jpg: portfolioPicPreview_8,
      webp: portfolioPicPreviewWebp_8,
    },
    type: 'branding',
  },
  {
    preview: {
      jpg: portfolioPicPreview_9,
      webp: portfolioPicPreviewWebp_9,
    },
    type: 'branding',
  },
]

export const Portfolio: React.FC = () => {
  const [countTabsStatus, setCountTabsStatus] = useState('all')
  let filteredPortfolio = cardsPortfolioList

  if (countTabsStatus === 'ui design') {
    filteredPortfolio = cardsPortfolioList.filter(cards => cards.type === 'ui design')
  }

  if (countTabsStatus === 'web templates') {
    filteredPortfolio = cardsPortfolioList.filter(cards => cards.type === 'web templates')
  }

  if (countTabsStatus === 'logo') {
    filteredPortfolio = cardsPortfolioList.filter(cards => cards.type === 'logo')
  }

  if (countTabsStatus === 'branding') {
    filteredPortfolio = cardsPortfolioList.filter(cards => cards.type === 'branding')
  }

  function changeFilterStatus(
    value: 'all' | 'ui design' | 'web templates' | 'logo' | 'branding'
  ) {
    setCountTabsStatus(value)
  }

  return (
    <S.Portfolio>
      <FlexWrapper align={'center'} direction='column'>
        <Container>
          <FlexWrapper align={'center'} direction={'column'}>
            <SectionTitle>Portfolio</SectionTitle>
            <Text width={theme.widthText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. lorem ipsum
            </Text>
            <nav>
              <FlexWrapper as={'ul'} justify={'center'} gap={' 20px 38px'} wrap={'wrap'}>
                {tabsItemsList.map((T, index) => (
                  <li key={index}>
                    <Button
                      className={countTabsStatus === T.status ? 'active' : ''}
                      onClick={() => {
                        changeFilterStatus(T.status)
                      }}>
                      {T.title}
                    </Button>
                  </li>
                ))}
              </FlexWrapper>
            </nav>
            <S.GridWrapper as={'ul'}>
              {filteredPortfolio.map((P, index) => (
                <li key={index}>
                  <a href='#l'>
                    <Picture>
                      <source srcSet={P.preview.webp} />
                      <img loading='lazy' src={P.preview.jpg} alt='portfolio' />
                    </Picture>
                  </a>
                </li>
              ))}
            </S.GridWrapper>
          </FlexWrapper>
        </Container>
      </FlexWrapper>
    </S.Portfolio>
  )
}
