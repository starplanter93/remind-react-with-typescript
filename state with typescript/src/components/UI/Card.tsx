import React from "react";

import "./Card.css";

interface OwnProps {
  className: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: OwnProps) => {
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
};

export default Card;
