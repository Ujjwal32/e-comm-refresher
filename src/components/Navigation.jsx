import React from "react";
import { Button, Heading, Navbar } from "./styles/Layout.styled";

const Navigation = () => {
  return (
    <Navbar>
      <Heading>Shop me</Heading>
      <Button>Cart</Button>
    </Navbar>
  );
};

export default Navigation;
