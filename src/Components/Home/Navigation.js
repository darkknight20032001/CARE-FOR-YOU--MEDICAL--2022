import React, { useState } from "react";
import Style from "./Navigation.module.css";
import Database from "../Database/Database";
import NavLink from "./NavLink";
const Navigation = () => {
  const [active, setActive] = useState(1);
  return (
    <div className={Style["ward_nav"]}>
      <ul>
        {Database.map((list) => {
          return (
            <NavLink
              id={list.ward_no}
              key={list.ward_no}
              name={list.ward_name}
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
