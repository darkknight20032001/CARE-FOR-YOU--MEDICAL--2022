import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function Review(props) {
  const value = props.clean; 

  console.log(props.clean_, value);
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Cleanliness Index"}
        value={value}
        valueLabelDisplay="auto"
        max={10}
      />
    </Box>
  );
}
