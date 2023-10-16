import React from "react";
import { SectionTitle } from "./../../../components/SectionTitle";
import { Text } from "../../../components/Text";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { CardServices } from "./card_services/CardServices";
import { Theme } from "../../../styles/Theme";

export const MyServices = () => {
  return (
    <section>
      <FlexWrapper direction={"column"} align={"center"}>
        <SectionTitle>My services</SectionTitle>
        <Text>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Text>
      </FlexWrapper>
      <FlexWrapper wrap={"wrap"} gap={Theme.gapCard}>
        <CardServices
          iconCard={"coding"}
          name={"web development"}
          description={"blog, e-commerce"}
        />
        <CardServices
          iconCard={"ilustration"}
          name={"uI/uX design"}
          description={"Mobile app, website design"}
        />
        <CardServices
          iconCard={"microphone"}
          name={"sound design"}
          description={"Voice Over, Beat Making"}
        />
        <CardServices
          iconCard={"gameDevelopment"}
          name={"game design"}
          description={"Character Design, Props & Objects"}
        />
        <CardServices
          iconCard={"photographer"}
          name={"photography"}
          description={"portrait, product photography"}
        />
        <CardServices
          iconCard={""}
          name={"advertising"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. "
          }
          btn={"ORDER NOW"}
        />
      </FlexWrapper>
    </section>
  );
};
