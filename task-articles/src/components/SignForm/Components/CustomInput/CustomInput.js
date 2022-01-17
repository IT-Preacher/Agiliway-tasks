import React from "react";
import { Input } from "antd";

const CustomInput = (props) => {
  return (
    <div style={{marginTop: 10}}>
      <label>
        <span className="span-label">{props.label}</span>
        <Input {...props.input} />
      </label>
    </div>
  );
};

export default CustomInput;
