import React, { useState } from "react";
import Style from "./Navigation.module.css";
import Ward from "../Database/Ward";
import NavLink from "./NavLink";
const Navigation = () => {
  const [active, setActive] = useState(1);
  return (
    <div className={Style["ward_nav"]}>
      <ul>
        {Ward.map((list) => {
          return (
            <NavLink
              id={list.id}
              key={list.id}
              name={list.name}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
