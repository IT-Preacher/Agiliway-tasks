import React from 'react';

const RenderField = ({ classField, classInput, input, label, type, meta: { touched, error } }) => (
  <div className={classField}>
    <label>{label}</label>
    <div>
      <input {...input} type={type} className={classInput}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default RenderField;