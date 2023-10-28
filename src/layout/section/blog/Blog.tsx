import styled from 'styled-components'
import PicPreview_1 from '../../../assets/images/portfolio_1.jpg'
import PicPreview_1Webp from '../../../assets/images/portfolio_1.webp'
import PicPreview_2 from '../../../assets/images/portfolio_2.jpg'
import PicPreview_2Webp from '../../../assets/images/portfolio_2.webp'
import PicPreview_3 from '../../../assets/images/portfolio_3.jpg'
import PicPreview_3Webp from '../../../assets/images/portfolio_3.webp'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Text } from '../../../components/Text'
import { theme } from '../../../styles/Theme'
import { Picture } from './../../../components/Picture'

export const Blog = () => {
  return (
    <BlogStyled>
      <Container>
        <FlexWrapper align={'center'} direction={'column'}>
          <SectionTitle>Blog</SectionTitle>
          <Text width={theme.widthText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <FlexWrapper as={'ul'}>
            <CardBlog>
              <Picture>
                <source srcSet={PicPreview_1Webp} />
                <img src={PicPreview_1} alt='preview' />
              </Picture>
              <div>
                <SectionTitle as={'h4'} size={'18px'} margin={'8px'}>
                  How to make web tempates
                </SectionTitle>
                <Text size={'15px'} position={'start'} margin={'10px'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
                  diam in ac dictum a urna
                </Text>
                <Button as={'a'} asLink>
                  Learn more
                </Button>
              </div>
            </CardBlog>
            <CardBlog>
              <Picture>
                <source srcSet={PicPreview_2Webp} />
                <img src={PicPreview_2} alt='preview' />
              </Picture>
              <div>
                <SectionTitle as={'h4'} size={'18px'} margin={'8px'}>
                  make Business card
                </SectionTitle>
                <Text size={'15px'} position={'start'} margin={'10px'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
                  diam in ac dictum a urna
                </Text>
                <Button as={'a'} asLink>
                  Learn more
                </Button>
              </div>
            </CardBlog>
            <CardBlog>
              <Picture>
                <source srcSet={PicPreview_3Webp} />
                <img src={PicPreview_3} alt='preview' />
              </Picture>
              <div>
                <SectionTitle as={'h4'} size={'18px'} margin={'8px'}>
                  How to make Flyer Design
                </SectionTitle>
                <Text size={'15px'} position={'start'} margin={'10px'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
                  diam in ac dictum a urna
                </Text>
                <Button as={'a'} asLink>
                  Learn more
                </Button>
              </div>
            </CardBlog>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </BlogStyled>
  )
}

const BlogStyled = styled.section`
  & ul {
    width: 100%;
    gap: 20px;
    overflow-x: auto;

    @media ${theme.media.mobile} {
      max-width: 340px;
    }
  }
`

const CardBlog = styled.li`
  max-width: 310px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primaryBg};
  flex-grow: 1;
  flex-shrink: 0;

  & img {
    aspect-ratio: 1/0.971;
    object-fit: cover;
  }

  & a {
    width: 100%;
    font-size: 18px;
    text-transform: capitalize;
    padding: 0;
    justify-content: start;
  }

  & > div {
    padding: 25px;
  }
`
