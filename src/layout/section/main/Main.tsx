import React from "react";
import { Icon } from "./../../../components/Icons/Icon";
import myPhoto from "./../../../assets/images/your_Image_1.png";
import myPhotoWebp from "./../../../assets/images/your_Image_1.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <div>
      <FlexWrapper justify={"center"} align={"center"}>
        <FlexWrapper derection={"column"}>
          <h2>I’m Rayan Adlrdard</h2>
          <h1>Front-end Developer </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <a href="">
            HIRE ME
            <Icon iconId={"arrow"} />
          </a>
        </FlexWrapper>
        <picture>
          <source srcSet={myPhotoWebp} type="image/webp" />
          <img src={myPhoto} alt="photo" />
        </picture>
      </FlexWrapper>
    </div>
  );
};
