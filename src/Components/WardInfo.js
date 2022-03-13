import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "./Context/DataContext";
import Database from "./Database/Database";
import Review from "./Review";
import Style from "./WardInfo.module.css";
import WorkerIcon from "../Icons/worker.png";
import PatientIcon from "../Icons/patient.png";
function WardInfo() {
  const { ward } = useContext(DataContext);
  const [ward_obj] = Database.filter((wards) => {
    return wards.ward_name === ward;
  });
  const navigate = useNavigate();
  let Remarks = ``;
  if (ward_obj.clean_points === 5) {
    Remarks = `Average Cleanliness Performance in this Ward`;
  } else if (ward_obj.clean_points < 5) {
    Remarks = `Poor Cleanliness Performance in this Ward\nNeed to work on this ward a lot!!!!`;
  } else {
    Remarks = `Good Cleanliness Performance in this ward\nKeep It Up !!!`;
  }
  return (
    <div className={Style["ward_info"]}>
      <div className={Style["ward_info__no"]}>
        <h1>Ward Number : {ward_obj.ward_no}</h1>
      </div>
      <div className={Style["ward_info__name"]}>
        <h2>Ward Name : {ward_obj.ward_name}</h2>
      </div>
      <div className={Style["ward_info__details"]}>
        <div className={Style["ward_info__patient"]}>
          <img src={PatientIcon} width="70px" height="70px" alt="patient"/>
          <h2>{ward_obj.ward_patient}</h2>
          <p>Ward Patient</p>
        </div>
        <div className={Style["ward_info__worker"]}>
          <img src={WorkerIcon} width="70px" height="70px" alt="worker"/>
          <h2>{ward_obj.ward_worker}</h2>
          <p>Ward Worker</p>
        </div>
      </div>
      <div className={Style["ward_info__remark"]}>
        <Review clean={ward_obj.clean_points} />
        <h3>{Remarks}</h3>
      </div>
      <div className={Style["ward_info__review"]}>
        <button
          onClick={() =>
            navigate("/complain", { state: { name: ward_obj.ward_name } })
          }
        >
          Add complain
        </button>
      </div>
    </div>
  );
}

export default WardInfo;
