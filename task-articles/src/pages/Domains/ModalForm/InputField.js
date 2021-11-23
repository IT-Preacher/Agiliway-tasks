import React from "react";
import { Input } from "antd";
import propTypes from "prop-types";

export const InputField = (props) => {
  return (
    <Input {...props.input} placeholder={props.placeholder} label="Name" />
  );
};

InputField.propTypes = {
  input: propTypes.object,
  placeholder: propTypes.string,
};
