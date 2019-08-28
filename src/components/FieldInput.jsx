import React from "react";

const FieldInput = props => {
  const {
    labelText,
    id,
    type,
    ariaLabel,
    placeholder,
    name,
    value,
    onChange,
    errors
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        aria-label={ariaLabel}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
      {errors ? <div className="invalid-feedback">{errors}</div> : null}
    </div>
  );
};

export default FieldInput;
