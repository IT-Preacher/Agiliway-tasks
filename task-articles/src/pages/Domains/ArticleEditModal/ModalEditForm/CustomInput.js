import React from "react"; 
import { Input } from "antd"; 
 
export const CustomInput = (props) => { 
    console.log(props);
    return <Input {...props.input} placeholder={props.placeholder} label="Name"/>   
}