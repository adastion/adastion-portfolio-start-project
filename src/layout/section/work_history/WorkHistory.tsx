import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Text } from "../../../components/Text";
import { Container } from "../../../components/Container";

export const WorkHistory = () => {
  return (
    <FlexWrapper align={"center"} direction="column">
      <Container>
        <FlexWrapper align={"center"} direction={"column"}>
          <SectionTitle>WorkHistory</SectionTitle>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
          <table>
            <tr>
              <td>
                <h4>Lead Web Designer</h4>
                <span>Student</span>
                <span>Jan 1016 - Dec 2021</span>
              </td>
              <td>
                <h4>Certificate of web training</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                  Pulvinar quisque sed amet, nulla nunc. Eleifend sodales
                  posuere fusce tempus etiam et pellentesque. Molestie risus
                  enim neque eget dui.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Junior Web Designer</h4>
                <span>Student</span>
                <span>Jan 1016 - Dec 2021</span>
              </td>
              <td>
                <h4>Certificate of web training</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                  Pulvinar quisque sed amet, nulla nunc. Eleifend sodales
                  posuere fusce tempus etiam et pellentesque. Molestie risus
                  enim neque eget dui.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Senior Web Designer</h4>
                <span>Student</span>
                <span>Jan 1016 - Dec 2021</span>
              </td>
              <td>
                <h4>Certificate of web training</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                  Pulvinar quisque sed amet, nulla nunc. Eleifend sodales
                  posuere fusce tempus etiam et pellentesque. Molestie risus
                  enim neque eget dui.
                </p>
              </td>
            </tr>
          </table>
        </FlexWrapper>
      </Container>
    </FlexWrapper>
  );
};
