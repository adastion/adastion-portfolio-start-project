import React from "react";
import avatarProfile from "./../../../assets/images/avatar_profile.jpg";
import { Icon } from "../../../components/Icons/Icon";
import { Button } from "../../../components/Button";
import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Profile = () => {
  return (
    <ProfileStyled>
      <img src={avatarProfile} alt="avatar" />
      <h4>Rayan Adlardard</h4>
      <span>Font-end Developer</span>
      <ul>
        <li>
          <Button circle>
            <Icon size={"14px"} iconId={"faceboock"} />
          </Button>
        </li>
        <li>
          <Button circle>
            <Icon size={"14px"} iconId={"instagram"} />
          </Button>
        </li>
        <li>
          <Button circle>
            <Icon size={"14px"} iconId={"twitter"} />
          </Button>
        </li>
        <li>
          <Button circle>
            <Icon size={"14px"} iconId={"linkedin"} />
          </Button>
        </li>
        <li>
          <Button circle>
            <Icon size={"14px"} iconId={"youtube"} />
          </Button>
        </li>
        <li>
          <Button circle>
            <Icon size={"14px"} iconId={"dribbble"} />
          </Button>
        </li>
      </ul>
      <div>
        <section>
          <h4>Me arameters</h4>
          <ul>
            <li>
              <span>Age:</span>
              <span>24</span>
            </li>
            <li>
              <span>Residence:</span>
              <span>BD</span>
            </li>
            <li>
              <span>Freelance:</span>
              <span>Available</span>
            </li>
            <li>
              <span>Address:</span>
              <span>Dhaka,Bangladesh</span>
            </li>
          </ul>
        </section>
        <section>
          <h4>Languages</h4>
          <ul>
            <li>
              <span>Bangla</span>
              <span>100%</span>
            </li>
            <li>
              <span>English</span>
              <span>80%</span>
            </li>
            <li>
              <span>Spanish</span>
              <span>60%</span>
            </li>
          </ul>
        </section>
        <section>
          <h4>Skills</h4>
          <ul>
            <li>
              <span>Html</span>
              <span>90%</span>
            </li>
            <li>
              <span>CSS</span>
              <span>85%</span>
            </li>
            <li>
              <span>Js</span>
              <span>80%</span>
            </li>
            <li>
              <span>PHP</span>
              <span>75%</span>
            </li>
            <li>
              <span>WordPress</span>
              <span>85%</span>
            </li>
          </ul>
        </section>
        <section>
          <h4>Extra Skills</h4>
          <ul>
            <li>
              <Icon iconId={"square"} />
              <span>Bootstrap, Materialize</span>
            </li>
            <li>
              <Icon iconId={"square"} />
              <span>Stylus, Sass, Less</span>
            </li>
            <li>
              <Icon iconId={"square"} />
              <span>Gulp, Webpack, Grunt</span>
            </li>
            <li>
              <Icon iconId={"square"} />
              <span>GIT Knowledge</span>
            </li>
          </ul>
        </section>
        <button>
          <span>Download cv</span>
          <Icon iconId={"download"} />
        </button>
      </div>
    </ProfileStyled>
  );
};

const ProfileStyled = styled.aside`
  background: ${Theme.colors.primaryBg};
  max-width: 305px;
  width: 100%;
  height: 100%;
`;
