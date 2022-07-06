import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Heading, Navbar } from "./styles/Layout.styled";
import Sidebar from "./Sidebar";
import { toggleCart } from "../features/cartSlice";

const Navigation = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Navbar>
      <Heading>Shop me</Heading>
      <Button
        onClick={() => {
          dispatch(toggleCart("open"));
        }}
      >
        Cart
      </Button>
      {state.showCart && <Sidebar close={toggleCart} />}
    </Navbar>
  );
};

export default Navigation;
