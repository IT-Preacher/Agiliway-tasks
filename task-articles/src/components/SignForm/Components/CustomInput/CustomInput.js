import React from "react";
import { Input } from "antd";

const CustomInput = (props) => {
  console.log(props)
  return (
    <div style={{marginTop: 10}}>
      <label>
        <span className="span-label">{props.label}</span>
        <Input {...props.input} placeholder={props.label}/>
      </label>
    </div>
  );
};

export default CustomInput;
