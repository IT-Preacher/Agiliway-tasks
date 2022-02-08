import React from "react";
import propTypes from "prop-types";
import { CustomSelect as Select } from "../../../../styled.components";
import { DownOutlined } from "@ant-design/icons";

const CustomSelect = ({ input, configuration }) => {
  return (
    <Select {...input} arrow={DownOutlined}>
      <option value={null}>{null}</option>
      {Object.entries(configuration).map(([value, text], index) => (
        <option value={value} key={index + value}>
          {text}
        </option>
      ))}
    </Select>
  );
};

CustomSelect.propTypes = {
  input: propTypes.object,
  configuration: propTypes.object,
};

export default CustomSelect;
