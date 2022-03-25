import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../../Firebase/Firebase";
import Style from "./HospitalPage.module.css";
const HospitalPage = ({ getHospitalName }) => {
  const [data, setData] = useState([]);
  const [selectValue, setSelectValue] = useState("Select");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSelectValue(e.target.value);
    const filteredData = data.filter((d) => {
      return d.name === e.target.value;
    });
    const path = e.target.value.replace(/ /g, "");
    getHospitalName(path);
    navigate(path, { state: { filteredData: filteredData, path: path } });
  };

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
    <>
      {data.length !== 0 ? (
        <div className={Style["hospital"]}>
          <div className={Style["hospital_select"]}>
            <p>Select Hospital</p>
            <select value={selectValue} onChange={handleChange}>
              <option value="Select">-Select-</option>
              {data.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className={Style["hospital_info"]}>
            <p>CARE</p>
            <p>FOR</p>
            <p>YOU</p>
          </div>
        </div>
      ) : (
        <h1 className={Style["loading"]}>Loading...</h1>
      )}
    </>
  );
};

export default HospitalPage;
