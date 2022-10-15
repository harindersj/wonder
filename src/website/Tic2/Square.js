import React, { useState } from "react";

const Square = (props) => {
  const [value, setvalue] = useState(null);

  const aa = props.array;
  function show(e) {
    setvalue(!props.refresh ? props.onClick(props.name) : "");
    console.log(props.refresh);
    if (props.refresh == true) {
      setvalue(null);
      console.log(props.refresh);
    }
    if (aa[0] === aa[1] && aa[1] === aa[2]) {
      alert(` ${aa[0]} win`);
      window.location.reload();
    } else if (aa[3] === aa[4] && aa[4] === aa[5]) {
      alert(` ${aa[3]} win`);
      window.location.reload();
    } else if (aa[6] === aa[7] && aa[7] === aa[8]) {
      alert(` ${aa[6]} win`);
      window.location.reload();
    } else if (aa[1] === aa[4] && aa[4] === aa[7]) {
      alert(` ${aa[1]} win`);
      window.location.reload();
    } else if (aa[0] === aa[3] && aa[3] === aa[6]) {
      alert(` ${aa[0]} win`);
      window.location.reload();
    } else if (aa[2] === aa[5] && aa[5] === aa[8]) {
      alert(` ${aa[1]} win`);
      window.location.reload();
    } else if (aa[0] === aa[4] && aa[4] === aa[8]) {
      alert(` ${aa[0]} win`);
      window.location.reload();
    } else if (aa[2] === aa[4] && aa[4] === aa[6]) {
      alert(` ${aa[2]} win`);
      window.location.reload();
    } else if (
      aa[0] !== "1" &&
      aa[1] !== "2" &&
      aa[2] !== "3" &&
      aa[3] !== "4" &&
      aa[4] !== "5" &&
      aa[5] !== "6" &&
      aa[6] !== "7" &&
      aa[7] !== "8" &&
      aa[8] !== "9"
    )
      alert(`Match Draw`);
  }

  return (
    <div className="square">
      <button onClick={show} disabled={value ? true : false}>
        {value}
      </button>
    </div>
  );
};

export default Square;
