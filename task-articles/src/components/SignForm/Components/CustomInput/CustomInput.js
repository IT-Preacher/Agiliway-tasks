import React from "react";
import propTypes from "prop-types";
import { Input } from "antd";

const CustomInput = ({ label, input }) => {
  return (
    <div style={{marginTop: 10}}>
      <label>
        <span className="span-label">{label}</span>
        <Input {...input} placeholder={label}/>
      </label>
    </div>
  );
};

CustomInput.propTypes = {
  label: propTypes.string,
  input: propTypes.object,
};

export default CustomInput;
