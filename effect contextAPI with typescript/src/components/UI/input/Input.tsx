import React from "react";

import classes from "./Input.module.css";

interface OwnProps {
  isValid: boolean | null;
  id: string;
  type: string;
  value: string;
  label: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(): void;
}

function Input({
  isValid,
  id,
  type,
  value,
  label,
  onChange,
  onBlur,
}: OwnProps) {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
export default Input;
