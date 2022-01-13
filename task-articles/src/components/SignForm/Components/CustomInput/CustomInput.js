import React from "react";
import { Input } from "antd";

const CustomInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>
        <span className="span-label">{props.label}</span>
      </label>
      <Input {...props} type={props.input.type} />
    </div>
  );
};

export default CustomInput;
