import React from "react";
// import Button from '../Button';

const Form = (props) => {
  let {
    type,
    onChangeFunction,
    label,
    value,
    name,
    id,
    onClickFunction,
    activeParam,
  } = props;
  return (
    <div className="form-todo">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { todoText } = this.state;
          const { addTodo } = this.props;
          addTodo({ text: todoText });
        }}
      >
        <label htmlFor="name">{label}</label>
        <input
          type={type}
          onChange={(event) => onChangeFunction(event)}
          value={value}
          name={name}
          id={id}
        />
        <button>add todo</button>
      </form>
    </div>
  );
};

export default Form;
