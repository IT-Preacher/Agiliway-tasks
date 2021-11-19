import React from "react"; 
import { Input } from "antd"; 
 
export const InputField = (props) => { 
    return <Input {...props.input} placeholder={props.placeholder} label="Name"/>   
}