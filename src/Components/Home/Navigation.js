import React from "react";
import Style from "./Navigation.module.css";
import Database from "../Database/Database";
import NavLink from "./NavLink";
const Navigation = () => {
  return (
    <div className={Style["ward_nav"]}>
      <ul>
        {Database.map((list) => {
          return <NavLink key={list.ward_no} name={list.ward_name}  />;
        })}
      </ul>
    </div>
  );
};

export default Navigation;
