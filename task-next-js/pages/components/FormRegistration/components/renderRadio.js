import React from "react";
import { Radio } from "antd";

const RadioButton = (props) => {
  return (
    <Radio.Button
      {...props.input}
      optionType="button"
      buttonStyle="solid"
      style={{ width: "33%", textAlign: "center" }}
    >
      {props.input.value}
    </Radio.Button>
  );
};

export default RadioButton;
