import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { MyServices } from "../my_services/MyServices";
import { PricePlans } from "./../price/PricePlans";

export const Main = () => {
  return (
    <main>
      <FlexWrapper direction={"column"} align={"center"}>
        <MyServices />
        <PricePlans />
      </FlexWrapper>
    </main>
  );
};
