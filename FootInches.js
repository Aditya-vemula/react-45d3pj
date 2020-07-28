import React, { useState, useRef } from "react";
import Header from "./Header";
const FootInches = props => {
  const [count, updateCount] = useState(0);
  const inputRef = useRef(null);
  return (
    <div>
      <h1>{props.type}</h1>
      <input
        ref={inputRef}
        type="number"
        value={props.value}
        onChange={e => props.handleChange(e.target.value)}
      />
      <h1>{`count is ${count}`}</h1>
      <button
        onClick={() => {
          updateCount(count + 1);
          inputRef.current.focus();
        }}
      >
        inc Count
      </button>
    </div>
  );
};

export default FootInches;
