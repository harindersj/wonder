import React, { useEffect, useState } from "react";
import Square from "./Square";
import "./TicTac.css";

const Board = () => {
  const [boxvalue, setboxvalue] = useState("X");
  const [refresh, setrefresh] = useState(false);
  const [array, setarray] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  function values(e) {
    if (boxvalue === "X") {
      array.splice(e, 1, "X");
      setboxvalue("O");
      return "X";
    } else {
      array.splice(e, 1, "O");
      setboxvalue("X");
      return "O";
    }
  }
  function show() {
    setarray(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    setrefresh(refresh ? false : true);
  }
  return (
    <>
      {console.log(array)}
      <h1>Player {boxvalue} Turn</h1>
      <div className="board">
        {array.map((value, index) => {
          return (
            <Square
              name={index}
              onClick={!refresh ? values : ""}
              array={array}
              refresh={refresh}
            />
          );
        })}
      </div>
      <button onClick={show} className="reload">
        Reload
      </button>
    </>
  );
};

export default Board;
