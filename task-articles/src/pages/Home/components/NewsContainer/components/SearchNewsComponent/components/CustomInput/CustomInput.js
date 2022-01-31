import React from "react";
import { Input } from "antd";
import propTypes from "prop-types";

const CustomInput = ({ input }) => {
  return <Input {...input} />;
};

CustomInput.propTypes = {
  input: propTypes.object,
};

export default CustomInput;
