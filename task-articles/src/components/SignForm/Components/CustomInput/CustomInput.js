import React from "react";
import propTypes from "prop-types";
import { Input } from "antd";

const CustomInput = ({ label, input, meta }) => {
  console.log("CustomInput Error ", meta.error, " Touched", meta.touched);
  return (
    <div style={{ marginTop: 10 }}>
      <label>
        <span className="span-label">{label}</span>
        <Input
          {...input}
          placeholder={label}
          className={meta.error && meta.touched ? "error-input" : null}
        />
        {/* {meta.error && meta.touched && <span>{meta.error}</span>} */}
      </label>
    </div>
  );
};

CustomInput.propTypes = {
  label: propTypes.string,
  input: propTypes.object,
  meta: propTypes.object,
};

export default CustomInput;
