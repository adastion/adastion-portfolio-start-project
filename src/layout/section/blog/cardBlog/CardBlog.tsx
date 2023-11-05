import React from 'react'
import { S } from '../Blog_Styles'
import { Picture } from '../../../../components/Picture'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Text } from '../../../../components/Text'
import { Button } from '../../../../components/Button'

type CardBlogPropsType = {
  title: string
  message: string
  preview: {
    jpg: string
    webp: string
  }
}

export const CardBlog: React.FC<CardBlogPropsType> = (props: CardBlogPropsType) => {
  return (
    <S.CardBlog>
      <Picture>
        <source srcSet={props.preview.webp} />
        <img loading='lazy' src={props.preview.jpg} alt='preview' />
      </Picture>
      <div>
        <SectionTitle as={'h4'} size={'18px'} margin={'8px'}>
          {props.title}
        </SectionTitle>
        <Text size={'15px'} position={'start'} margin={'10px'}>
          {props.message}
        </Text>
        <Button as={'a'} asLink>
          Learn more
        </Button>
      </div>
    </S.CardBlog>
  )
}
