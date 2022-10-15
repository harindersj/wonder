import React, { useState } from "react";

const Button = (props) => {
  const [value, setvalue] = useState(null);
  return (
    <div>
      <button onClick={() => setvalue("X")} disabled={value ? true : false}>
        {value}
      </button>
    </div>
  );
};

export default Button;
