import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { MyServices } from "../my_services/MyServices";

export const Main = () => {
  return (
    <FlexWrapper direction={'column'} align={"center"} >
     <MyServices />
    </FlexWrapper>
  );
};
