import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "./../../../components/SectionTitle";
import { Text } from "./../../../components/Text";

export const Education = () => {
  return (
    <FlexWrapper align={"center"} direction="column">
      <SectionTitle>Education</SectionTitle>
      <Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Text>
      <FlexWrapper justify={'center'}>
        <table>
          <tr>
            <td>
              <h4>University of Toronto</h4>
              <span>Student</span>
              <span>Jan 1016 - Dec 2021</span>
            </td>
            <td>
              <h4>Certificate of web training</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                fusce tempus etiam et pellentesque. Molestie risus enim neque
                eget dui.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Programming Course</h4>
              <span>Student</span>
              <span>Jan 1016 - Dec 2021</span>
            </td>
            <td>
              <h4>Certificate of web training</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                fusce tempus etiam et pellentesque. Molestie risus enim neque
                eget dui.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Web developer courses</h4>
              <span>Student</span>
              <span>Jan 1016 - Dec 2021</span>
            </td>
            <td>
              <h4>Certificate of web training</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dapibus nibh ut faucibus nunc, egestas id amet porttitor.
                Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere
                fusce tempus etiam et pellentesque. Molestie risus enim neque
                eget dui.
              </p>
            </td>
          </tr>
        </table>
      </FlexWrapper>
    </FlexWrapper>
  );
};
