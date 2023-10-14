import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MyServices } from "../section/my_services/MyServices";
import { PricePlans } from "../section/price/PricePlans";
import { Recommendations } from "../section/recommendations/Recommendations";
import { Education } from "./../section/education/Education";
import { WorkHistory } from "./../section/work_history/WorkHistory";
import { Portfolio } from "../section/portfolio/Portfolio";
import { Blog } from './../section/blog/Blog';
import { Contacts } from './../section/contacts/Contacts';

export const Main = () => {
  return (
    <main>
      <FlexWrapper direction={"column"} align={"center"}>
        <MyServices />
        <PricePlans />
        <Recommendations />
        <Education />
        <WorkHistory />
        <Portfolio />
        <Blog />
        <Contacts/>
      </FlexWrapper>
    </main>
  );
};
