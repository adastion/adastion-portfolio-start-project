import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MyServices } from "../section/my_services/MyServices";
import { PricePlans } from "../section/price/PricePlans";
import { Recommendations } from "../section/recommendations/Recommendations";

export const Main = () => {
  return (
    <main>
      <FlexWrapper direction={"column"} align={"center"}>
        <MyServices />
        <PricePlans />
        <Recommendations/>
      </FlexWrapper>
    </main>
  );
};
