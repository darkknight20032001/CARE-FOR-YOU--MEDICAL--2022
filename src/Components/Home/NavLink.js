import React, { useContext} from "react";
import DataContext from "../Context/DataContext";
const NavLink = ({ id, name, active, setActive }) => {
  const { setWard } = useContext(DataContext);

  return (
    <li
    style={{ backgroundColor: id === active ? "white" : "#f23333f7" }}
      onClick={() => {
        setWard(name);
        setActive(id);
      }}
    >
      {name}
    </li>
  );
};

export default NavLink;
