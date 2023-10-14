import React from "react";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icons/Icon";
import { Text } from "./../../../../components/Text";
import { User } from "./../../../../components/user/User";
import avatrPreview1 from "./../../../../assets/images/ava_1.jpg";
import avatrPreview2 from "./../../../../assets/images/ava_2.jpg";
import avatrPreview3 from "./../../../../assets/images/ava_3.jpg";

type CardRecommendationPropdType = {
  nameIcon: string;
  title: string;
  description: string;
  indexCard: number;
  user?: {
    avatar: string;
    name: string;
    profession: string;
  };
};

const listUsers = [
  {
    picture: avatrPreview1,
    name: "James Gouse",
    profession: "Graphic Designer",
  },
  {
    picture: avatrPreview2,
    name: "Tiana Philips",
    profession: "Photographer",
  },
  {
    picture: avatrPreview3,
    name: "Talan Westervelt",
    profession: "Business man",
  },
];

export const CardRecommendation = (props: CardRecommendationPropdType) => {
  return (
    <FlexWrapper direction={"column"} align={"center"}>
      <FlexWrapper>
        <Icon iconId={props.nameIcon} />
        <Icon iconId={props.nameIcon} />
        <Icon iconId={props.nameIcon} />
        <Icon iconId={props.nameIcon} />
        <Icon iconId={props.nameIcon} />
      </FlexWrapper>
      <h4>Great Quality!</h4>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
        diam in ac dictum a urna viverra morbi. Morbi donec amet....
      </Text>
      <User
        avatar={listUsers[props.indexCard].picture}
        name={listUsers[props.indexCard].name}
        profession={listUsers[props.indexCard].profession}
      />
    </FlexWrapper>
  );
};
