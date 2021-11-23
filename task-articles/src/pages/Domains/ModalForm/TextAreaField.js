import React from "react";
import { Input } from "antd";
import propTypes from "prop-types";

export const TextAreaField = (props) => {
  const { TextArea } = Input;
  return <TextArea rows={4} {...props.input} placeholder={props.placeholder} />;
};

TextAreaField.propTypes = {
  input: propTypes.object,
  placeholder: propTypes.string,
};
