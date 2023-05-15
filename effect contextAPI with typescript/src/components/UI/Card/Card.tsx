import React from "react";

import classes from "./Card.module.css";

interface OwnProps {
  className: string;
  children: React.ReactNode;
}

function Card({ className, children }: OwnProps) {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
}

export default Card;
