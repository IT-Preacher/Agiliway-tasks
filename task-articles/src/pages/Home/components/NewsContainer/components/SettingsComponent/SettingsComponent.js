import React from "react";
import { SettingsContainer } from "../../styled.components";
import { Select } from "antd";

const SettingsComponent = ({ handleChange }) => {
  const { Option } = Select;
  
  return (
    <SettingsContainer>
      <Select
        style={{ width: 120 }}
        onChange={handleChange}
        defaultActiveFirstOption={false}
      >
        <Option value={null}>{null}</Option>
        <Option value="publishedAtUp">Date Up</Option>
        <Option value="publishedAtDown">Date Down</Option>
      </Select>
    </SettingsContainer>
  );
};

export default SettingsComponent;
