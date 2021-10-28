import React from "react";

function Field(props) {
  let {
    label,
    name,
    type,
    value,
    onChange,
    error,
  } = props;
  return (
    <div className="input-conteiner">
      <div className="label-conteiner">
        <label htmlFor={name}>
          <span className="span-label">{label}</span>
        </label>
      </div>
        <input
          type={type}
          name={name}
          value={value}
          id={name}
          onChange={onChange}
        />
      <div className="conteiner-error">
        {error && <span className="span-error">{error}</span>}
      </div>
    </div>
  );
}

export default Field;
