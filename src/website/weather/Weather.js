import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Paper, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./weather.css";

const Weather = () => {
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [typecity, setTypeCity] = useState("");
  const [city, setCity] = useState("Delhi");
  const [img, setimg] = useState("");
  const [disc, setdisc] = useState("");

  const citySelect = (e) => {
    e.preventDefault();
    setCity(typecity);
  };

  useEffect(() => {
    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=623d0fc3fc8580837375717030fe31de`
    )
      .then((resolve) => {
        console.log(resolve.data);
        setValue(resolve.data);
        setTemp(resolve.data.main);
        setimg(
          `http://openweathermap.org/img/wn/${resolve.data.weather[0].icon}.png`
        );
        setdisc(resolve.data.weather[0].description);
      })
      .catch((reject) => {
        console.log(reject);
        setValue("City not found");
      });
  }, [city]);
  return (
    <div>
      <Paper className="paper weather">
        <form onSubmit={citySelect}>
          <div>
          <TextField
            className="elementcenter"
            placeholder="Enter city name"
            value={typecity}
            onChange={(e) => setTypeCity(e.target.value)}
          />
          <Button type="submit" name="btn">
            <SendIcon style={{ outline: "none" }} />
          </Button>
          </div>
        </form>
        <div className="fontcss">{value.name}</div>
        <img src={img} alt="weather icon" className="imgcss" />
        <div className="fontcss">{disc}</div>
        <div className="tempBlock">
          <p>
            Min
            {`${Math.floor(temp.temp_min - 273.15)}° C`}
          </p>
          <div className="fontcss">{`${Math.floor(temp.temp - 273.15)}° C`}</div>
          <p>
            Max
            {`${Math.floor(temp.temp_max - 273.15)}° C`}
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default Weather;
