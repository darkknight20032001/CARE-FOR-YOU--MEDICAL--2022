import React, { useContext, useState } from "react";
import DataContext from "../Context/DataContext";
const NavLink = ({ id, name, active, setActive }) => {
  const { ward, setWard } = useContext(DataContext);

  return (
    <li
    style={{ backgroundColor: id === active ? "white" : "#f23333f7" }}
      onClick={() => {
        setWard(name);
        setActive(id);
        console.log(id, active);
      }}
    >
      {name}
    </li>
  );
};

export default NavLink;
