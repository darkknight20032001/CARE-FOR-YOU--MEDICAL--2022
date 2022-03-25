import React from "react";
import Navigation from "../../Navbar/Navigation";
import WardInfo from "../../WardInfo";
import Style from "./Home.module.css";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  return (
    <div className={Style["home"]}>
      {location.state.filteredData.length !== 0 ? (
        <>
          <Navigation />{" "}
          <WardInfo
            mainData={location.state.filteredData}
            path={location.state.path}
          />{" "}
        </>
      ) : (
        <h1 className={Style["loading"]}>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
