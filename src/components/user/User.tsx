import React from 'react'
import { FlexWrapper } from '../FlexWrapper'
import { Text } from './../Text'
import styled from 'styled-components'

type UserPropsType = {
  avatar: string
  name: string
  profession: string
}

export const User = (props: UserPropsType) => {
  return (
    <FlexWrapper>
      <img
        src={
          props.avatar ||
          'https://4.bp.blogspot.com/-nhvgISgeQ9I/V8YnrPgqYxI/AAAAAAAA7OQ/O3z8vcqKVJQm7N-_ZGtDbKdy4Z_sJxm6ACLcB/s1600/blank-profile-picture-973461_1280.png'
        }
        alt='avatar'
      />
      <FlexWrapper direction={'column'} align={'center'}>
        <Title>{props.name}</Title>
        <Text>{props.profession}</Text>
      </FlexWrapper>
    </FlexWrapper>
  )
}

const Title = styled.p`
  color: blue;
`
