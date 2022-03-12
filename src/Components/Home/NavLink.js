import React, { useContext } from "react";
import DataContext from "../Context/DataContext";

const NavLink = (props) => {
  const { ward, setWard } = useContext(DataContext);
  const onClickHander = () => {
    setWard(props.name);
    console.log(ward);
  };
  
  return <li onClick={onClickHander}>{props.name}</li>;
};

export default NavLink;
