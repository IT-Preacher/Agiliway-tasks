import React from "react";
import propTypes from "prop-types";
import { Input, Popover } from "antd";
import { CustomInputContainer } from "../../styled.components";

const CustomInput = ({ label, input, meta, message }) => {
  return (
    <CustomInputContainer>
      <Popover title={label} content={message} trigger="click">
        <label>
          <span className="span-label">{label}</span>
          <Input
            {...input}
            placeholder={label}
            className={meta.error && meta.touched ? "error-input" : null}
          />
        </label>
      </Popover>
    </CustomInputContainer>
  );
};

CustomInput.propTypes = {
  label: propTypes.string,
  input: propTypes.object,
  meta: propTypes.object,
  message: propTypes.string,
};

export default CustomInput;
