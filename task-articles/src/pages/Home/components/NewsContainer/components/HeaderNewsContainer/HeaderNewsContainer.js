import React from "react";
import { StyledHeaderConteiner } from "../../styled.components";
import { Select, Input } from "antd";

const HeaderNewsContainer = ({ onSearch, handleChange, loading }) => {
    const { Option } = Select;
  return (
    <StyledHeaderConteiner>
      <Input.Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        loading={loading}
        onSearch={onSearch}
      />
      <div className="settings-container">
        <Select
          style={{ width: 120 }}
          onChange={handleChange}
          defaultActiveFirstOption={false}
        >
          <Option value="publishedAtUp">Date Up</Option>
          <Option value="publishedAtDown">Date Down</Option>
        </Select>
        <div
          className="filters-container"
          style={{ width: 200, backgroundColor: "red" }}
        ></div>
      </div>
    </StyledHeaderConteiner>
  );
};
export default HeaderNewsContainer;
