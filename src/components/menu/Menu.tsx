import React from "react";
import { Icon } from "../Icons/Icon";

export const Menu = () => {
  return (
    <nav>
      <Icon iconId={"contrast"} />
      <ul>
        <li>
          <a href="">
            <Icon iconId={"home"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"services"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"cv"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"portfolio"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"blog"} />
          </a>
        </li>
        <li>
          <a href="">
            <Icon iconId={"contact"} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
