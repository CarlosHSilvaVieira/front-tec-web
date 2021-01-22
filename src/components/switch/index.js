import React, { useState } from "react";

const Switch = ({ handleSwitch, children }) => {
  const [value, setValue] = useState(false);

  const handleSwitch = (event) => {
    setValue(event.target.checked);
    handleSwitch?.(event.target.checked);
  };

  return (
    <div className="custom-control custom-switch">
      <input
        value={value}
        onChange={(e) => handleSwitch(e)}
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
      />
      <label className="custom-control-label" for="customSwitch1">
        {children}
      </label>
    </div>
  );
};

export default Switch;
