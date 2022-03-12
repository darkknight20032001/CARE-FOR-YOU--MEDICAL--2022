import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Style from "./Complain.module.css";
const Complain = () => {
  const location = useLocation();
  const [Submit, setSubmit] = useState(false);
  const [isValid, setValid] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (name.trim().length >= 3 && message.trim().length >= 5) {
      setValid(true);
    }
    else{
      setValid(false);
    }
  }, [name,message]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length >= 3 && message.trim().length >= 5) {
      setSubmit(true);
    }
    console.log(Submit);
  };
  return !Submit ? (
    <>
      <div className={Style["complain"]}>
        <div className={Style["complain_name"]}>
          <h1 className="Complaining">{location.state.name}</h1>
          <h3>Complain Form</h3>
        </div>

        <div className={Style["container"]}>
          {!isValid && (
            <div className={Style["warning"]}>Please Enter something</div>
          )}
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="fname">Patient's Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <div className={Style["review"]}>
              <p>Give your rating.</p>
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Temperature"
                  defaultValue={0}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={10}
                />
              </Box>
            </div>
            <div className={Style["complain_btn"]}>
              <button type="submit">Submit</button>
              <button onClick={() => navigate("/")}>Go Back</button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    <>
      <h2 style={{ textAlign: "center", marginTop: "10rem" }}>
        Thank You for Your Feedback
      </h2>
      <p style={{ display: "none" }}>
        {setTimeout(() => {
          navigate("/");
        }, 2000)}
      </p>
    </>
  );
};

export default Complain;
