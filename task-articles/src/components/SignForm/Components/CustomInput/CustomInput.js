import React from "react";
import { Input } from 'antd';

const CustomInput = (props) => {
    return (
        <Input {...props} type={props.input.type} />
    );
}

export default CustomInput;