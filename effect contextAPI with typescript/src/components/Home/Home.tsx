import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";

interface OwnProps {
  onLogout(): void;
}

function Home({ onLogout }: OwnProps) {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button type="button" onClick={onLogout}>
        Logout
      </Button>
    </Card>
  );
}

export default Home;
