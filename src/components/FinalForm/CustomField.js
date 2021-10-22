import React from "react";

function CustomField({ label, name, type, placeholder, autoComplete, input, meta }) {
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
        placeholder={placeholder}
        autoComplete={autoComplete}
        id={name}
        {...input}
      />
      {
          meta.touched 
          ? 
          <div className="conteiner-error">
            <span className="span-error">{meta.error}</span>
          </div>
          : 
          null
      }
    </div>
  );
}

export default CustomField;
