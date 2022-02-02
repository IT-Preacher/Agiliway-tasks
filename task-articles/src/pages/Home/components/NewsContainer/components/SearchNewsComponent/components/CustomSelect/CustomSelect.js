import React from "react";
import { CustomSelect as Select } from "../../../../styled.components";
import { DownOutlined } from "@ant-design/icons";

const CustomSelect = ({ input, configuration }) => {
  return (
    <Select { ...input } arrow={DownOutlined}>
        <option value={null}>{null}</option>
        {Object.entries(configuration).map(([value, text]) => (
        <option value={value}>{text}</option>
      ))}
    </Select>
  );
};

export default CustomSelect;
