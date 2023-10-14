import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icons/Icon";
import { Text } from './../../../../components/Text';

type CardRecommendationPropdType = {
  rating: string;
  title: string;
  description: string;
  user?: {
    avatar: string;
    name: string;
    profession: string;
  };
};

export const CardRecommendation = (props: CardRecommendationPropdType) => {
  return (
    <FlexWrapper direction={"column"} align={"center"}>
      <FlexWrapper>
        <Icon iconId={props.rating} />
        <Icon iconId={props.rating} />
        <Icon iconId={props.rating} />
        <Icon iconId={props.rating} />
        <Icon iconId={props.rating} />
      </FlexWrapper>
      <h4>Great Quality!</h4>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</Text>
      <FlexWrapper>
        <img src="" alt="avatar" />
        <FlexWrapper direction={'column'} align={'center'}>
          <h4>James Gouse</h4>
          <p>Graphic Designer</p>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};


