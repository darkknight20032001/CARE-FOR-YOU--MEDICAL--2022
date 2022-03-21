import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import WardInfo from "../WardInfo";
import Style from "./Home.module.css";
import firebase from "../Firebase/Firebase";
const Home = () => {
  const [data, setData] = useState([]);
  const ref = firebase.firestore().collection("Hospitals");
  function getData() {
    ref.onSnapshot((querySnapShot) => {
      const items = [];
      querySnapShot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className={Style["home"]}>
      <Navigation />
      <WardInfo />
      {data.map((d) => {
        console.log(d);
        return <h1 key={d.id}>{d.name}</h1>;
      })}
    </div>
  );
};

export default Home;
