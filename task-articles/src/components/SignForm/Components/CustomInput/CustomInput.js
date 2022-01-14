import React from "react";
import { Input } from "antd";

const CustomInput = (props) => {
  console.log(props);

  const {
    input: { name, type },
    label,
  } = props;
  return (
    <div style={{marginTop: 10}}>
      <label>
        <span className="span-label">{label}</span>
        <Input {...props} type={type} name={name} />
      </label>
    </div>
  );
};

export default CustomInput;
