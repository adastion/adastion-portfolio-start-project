import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/Icons/Icon'
import { Text } from '../../../components/SectionText'



export const CardServices = () => {
  return (
    <div>
       <FlexWrapper wrap={"wrap"}>
        <FlexWrapper direction={"column"} align={'center'}>
          <Icon iconId={'coding'} viewBox={"0 0 68 68"} width={"68"} height={"68"}/>
          <h3>Web Development</h3>
          <Text>blog, e-commerce</Text>
        </FlexWrapper>
      </FlexWrapper>
    </div>
  )
}
