import React from 'react'
import PicPreview_1 from '../../../assets/images/portfolio_1.jpg'
import PicPreview_1Webp from '../../../assets/images/portfolio_1.webp'
import PicPreview_2 from '../../../assets/images/portfolio_2.jpg'
import PicPreview_2Webp from '../../../assets/images/portfolio_2.webp'
import PicPreview_3 from '../../../assets/images/portfolio_3.jpg'
import PicPreview_3Webp from '../../../assets/images/portfolio_3.webp'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { DefaultTheme } from '../../../styles/Theme'
import { S } from './Blog_Styles'
import { CardBlog } from './cardBlog/CardBlog'

const blogCardData = [
  {
    title: 'How to make web tempates',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
    preview: {
      jpg: PicPreview_1,
      webp: PicPreview_1Webp,
    },
  },
  {
    title: 'make Business card',
    message:
      'Lorem ipsum dolor amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
    preview: {
      jpg: PicPreview_2,
      webp: PicPreview_2Webp,
    },
  },
  {
    title: 'How to make Flyer Design',
    message:
      'Lorem ipsum amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
    preview: {
      jpg: PicPreview_3,
      webp: PicPreview_3Webp,
    },
  },
]

export const Blog: React.FC = () => {
  return (
    <S.Blog id={'blog'}>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>Blog</SectionTitle>
          <Text width={DefaultTheme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper as={'ul'}>
            {blogCardData.map((B, index) => (
              <CardBlog
                key={index}
                title={B.title}
                message={B.message}
                preview={B.preview}
              />
            ))}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Blog>
  )
}
