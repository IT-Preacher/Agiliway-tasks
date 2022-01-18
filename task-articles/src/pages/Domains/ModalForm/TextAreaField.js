import React from "react";
import { Input } from "antd";
import propTypes from "prop-types";

export const TextAreaField = (props) => {
  const { input, placeholder } = props;
  const { TextArea } = Input;
  return <TextArea rows={4} {...input} placeholder={placeholder} />;
};

TextAreaField.propTypes = {
  input: propTypes.object,
  placeholder: propTypes.string,
};
