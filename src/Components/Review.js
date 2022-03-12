import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function Review(props) {
  const value = props.clean; 
  return (
    <Box sx={{ width: 300 }} className="sliding1">
    <h2>Cleanliness Report Index</h2>
    <br/>
      <Slider className="sliding2"
        getAriaLabel={() => "Cleanliness Index"}
        value={value}
        valueLabelDisplay="auto"
        max={10}
      />
    </Box>
  );
}
