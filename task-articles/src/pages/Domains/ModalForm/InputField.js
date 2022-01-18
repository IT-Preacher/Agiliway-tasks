import React from "react";
import { Input } from "antd";
import propTypes from "prop-types";

export const InputField = (props) => {
  const { input, placeholder } = props;

  return (
    <Input {...input} placeholder={placeholder} />
  );
};

InputField.propTypes = {
  input: propTypes.object,
  placeholder: propTypes.string,
};
