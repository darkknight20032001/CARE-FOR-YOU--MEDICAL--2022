import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
const Complain = () => {
  const location = useLocation();
  // Read values passed on state
  const [Submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  return !Submit ? (
    <div>
      <h1>{location.state.name}</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" placeholder="Enter Patient's Name" />
        <label for="complain">Write your complain here:</label>
        <textarea id="complain" name="complain" rows="4" cols="50"></textarea>
        <button
          type="submit"
          onClick={() => {
            setSubmit(true);
          }}
        >
          Submit
        </button>
      </form>
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
      <button type="submit" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  ) : (
    <>
      <h2>Thank You for Your Feedback</h2>
      <p style={{ display: "none" }}>
        {setTimeout(() => {
          navigate("/");
        }, 3000)}
      </p>
    </>
  );
};

export default Complain;
