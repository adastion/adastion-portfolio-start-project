import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { Icon } from './../../../components/Icons/Icon';

export const Contacts = () => {
  return (
    <FlexWrapper>
      <StyledForm>
        <ul>
          <li>
            <label htmlFor="name">Your Full Name ( Required)</label>
            <input id="name" type="text" />
          </li>
          <li>
            <label htmlFor="email">Your Email ( Required)</label>
            <input id="email" type="email" />
          </li>
          <li>
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" />
          </li>
          <li>
            <label htmlFor="message">Your Message</label>
            <textarea id="message"></textarea>
          </li>
        </ul>
        <button type="submit">send message</button>
      </StyledForm>
      <ul>
        <li>
          <Icon iconId={'location'}/>
          <ul>
            <li>
              <span>Country:</span>
              <span>Bangladesh</span>
            </li>
            <li>
              <span>City:</span>
              <span>Dhaka</span>
            </li>
            <li>
              <span>Streat:</span>
              <span>35 vhatara, Badda</span>
            </li>
          </ul>
        </li>
        <li>
          <Icon iconId={'mail'}/>
          <ul>
            <li>
              <span>Email:</span>
              <span>youremail@gmail.com</span>
            </li>
            <li>
              <span>Skype:</span>
              <span>@yourusername</span>
            </li>
            <li>
              <span>Telegram:</span>
              <span>@yourusername</span>
            </li>
          </ul>
        </li>
        <li>
          <Icon iconId={'mobile'}/>
          <ul>
            <li>
              <span>Support services:</span>
              <span>15369</span>
            </li>
            <li>
              <span>Office:</span>
              <span>+58 (021)356 587 235</span>
            </li>
            <li>
              <span>Personal:</span>
              <span>+58 (021)356 587 235</span>
            </li>
          </ul>
        </li>
      </ul>
    </FlexWrapper>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  & ul li {
    display: grid;
  }
`;
