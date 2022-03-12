import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "./Context/DataContext";
import Database from "./Database/Database";
import Review from "./Review";
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
    <div>
      <h1>Ward Number : {ward_obj.ward_no}</h1>
      <h2>Ward Name : {ward_obj.ward_name}</h2>
      <h2>Ward Patient : {ward_obj.ward_patient}</h2>
      <h2>Ward Worker : {ward_obj.ward_worker}</h2>
      <Review clean={ward_obj.clean_points} />
      <h3>{Remarks}</h3>
      <button
        onClick={() =>
          navigate("/complain", { state: { name: ward_obj.ward_name } })
        }
      >
        Add complain
      </button>
    </div>
  );
}

export default WardInfo;
