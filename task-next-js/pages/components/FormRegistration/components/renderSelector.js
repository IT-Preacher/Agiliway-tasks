import React from "react";

const infoResourceList = ["Facebook", "Instagram", "Other"];

const RenderInfoSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select
      {...input}
      style={{ width: "100%", padding: 10, marginTop: "10px" }}
    >
      <option value=""></option>
      {infoResourceList.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

export default RenderInfoSelector;
