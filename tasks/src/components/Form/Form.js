import React from 'react';
import Button from '../Button';

const Form = (props) => {
    let {type,
    onChangeFunction,
    label,
    value,
    name,
    id,
    onClickFunction,
    activeParam} = props
    return (
        <div className="form-todo">
            <form>
                <label htmlFor="name">
                    {label}
                </label>
                <input
                    type={type}
                    onChange={(event) => onChangeFunction(event)}
                    value={value}
                    name={name}
                    id={id}
                />
                <Button 
                    activeParam={activeParam} 
                    name="Add Todo"
                    handleFunction={onClickFunction}
                />
            </form>
        </div>
    )
}

export default Form;