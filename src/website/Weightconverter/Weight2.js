import { FormControl, Select } from "@mui/material";
import React from "react";

const Weight2 = (props) => {
  return (
    <div>
      <FormControl>
        <Select native onChange={(e) => props.weightvalue(e.target.value)}>
          <option value="Select">Select</option>
          <option value="milligram">milligram</option>
          <option value="gram">gram</option>
          <option value="kilogram">kilogram</option>
          <option value="ounce">ounce</option>
          <option value="pound">pound</option>
          <option value="USton">US ton</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default Weight2;
