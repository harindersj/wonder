import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import "./weight.css";
import Weight2 from "./Weight2";

const WeightConverter = () => {
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  const [dropbox1, setdropbox1] = useState("");
  const [dropbox2, setdropbox2] = useState("");
  function calc(e) {
    e.preventDefault();
    if (dropbox1 === dropbox2) {
      setvalue2(value1);
    } else {
      if (dropbox1 === "milligram") {
        if (dropbox2 == "kilogram")
          setvalue2((value1 / 1000000).toExponential());
        else if (dropbox2 === "gram") setvalue2(value1 / 1000);
        else if (dropbox2 === "ounce") setvalue2(value1 / 28350);
        else if (dropbox2 === "pound")
          setvalue2((value1 / 453592).toExponential(5));
        else if (dropbox2 === "USton")
          setvalue2((value1 / 907200000).toExponential(5));
      } else if (dropbox1 === "gram") {
        if (dropbox2 == "kilogram") setvalue2(value1 / 1000);
        else if (dropbox2 === "milligram") setvalue2(value1 * 1000);
        else if (dropbox2 === "ounce") setvalue2(value1 / 28.35);
        else if (dropbox2 === "pound") setvalue2(value1 / 454);
        else if (dropbox2 === "USton")
          setvalue2((value1 / 907185).toExponential(5));
      } else if (dropbox1 === "kilogram") {
        if (dropbox2 == "gram") setvalue2(value1 * 1000);
        else if (dropbox2 === "milligram")
          setvalue2((value1 * 28350).toExponential(4));
        else if (dropbox2 === "ounce") setvalue2(value1 * 35.274);
        else if (dropbox2 === "pound") setvalue2(value1 * 2.20462);
        else if (dropbox2 === "USton") setvalue2(value1 / 907);
      } else if (dropbox1 === "ounce") {
        if (dropbox2 == "kilogram") setvalue2(value1 / 35.274);
        else if (dropbox2 === "milligram") setvalue2(value1 * 28350);
        else if (dropbox2 === "gram") setvalue2(value1 * 28.3495);
        else if (dropbox2 === "pound") setvalue2(value1 / 16);
        else if (dropbox2 === "USton") setvalue2(value1 / 32000);
      } else if (dropbox1 === "pound") {
        if (dropbox2 == "kilogram") setvalue2(value1 / 2.205);
        else if (dropbox2 === "milligram") setvalue2(value1 * 453592);
        else if (dropbox2 === "ounce") setvalue2(value1 * 16);
        else if (dropbox2 === "gram") setvalue2(value1 * 454);
        else if (dropbox2 === "USton") setvalue2(value1 / 2000);
      } else if (dropbox1 === "USton") {
        if (dropbox2 == "kilogram") setvalue2(value1 * 907);
        else if (dropbox2 === "milligram") setvalue2(value1 * 907200000);
        else if (dropbox2 === "ounce") setvalue2(value1 * 32000);
        else if (dropbox2 === "pound") setvalue2(value1 * 2000);
        else if (dropbox2 === "gram") setvalue2(value1 * 907185);
      }
    }
  }
  return (
    <div>
      <Paper className="paper text-center">
        <form onSubmit={calc} className="content">
          <div className="divs">
            <TextField
              type="number"
              className="text"
              value={value1}
              onChange={(e) => setvalue1(e.target.value)}
            />
            <Weight2 weightvalue={setdropbox1} />
          </div>
          <div className="divs">
            <TextField type="number" className="text" value={value2} />
            <Weight2 weightvalue={setdropbox2} />
          </div>
          <Button
            type="submit"
            className="mt-4"
            color="primary"
            variant="contained"
          >
            Convert
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default WeightConverter;
