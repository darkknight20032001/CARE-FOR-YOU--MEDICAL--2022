import React from "react";
import Navigation from "./Navigation";
import WardInfo from "../WardInfo";
import Style from "./Home.module.css";
const Home = () => {
  return (
    <div className={Style["home"]}>
      <Navigation />
      <WardInfo />
    </div>
  );
};

export default Home;
