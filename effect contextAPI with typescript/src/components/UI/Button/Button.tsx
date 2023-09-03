import React from "react";

import classes from "./Button.module.css";

interface OwnProps {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?(): void;
}

function Button({ type, className, disabled, children, onClick }: OwnProps) {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
