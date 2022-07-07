import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import { Button, Details, Heading, SideDiv } from "./styles/Layout.styled";

const Sidebar = ({ close }) => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  if (state.cartItems.length === 0) {
    return (
      <SideDiv>
        <Details>
          <Heading size="1.5rem">Cart</Heading>
          <Button onClick={() => dispatch(close())}>Close</Button>
        </Details>
        <Button width="100%" mt="1rem" bg="rgb(236,0,39, 0.7)" disabled>
          Checkout
        </Button>
        <p style={{ display: "grid", placeItems: "center", marginTop: "3rem" }}>
          Your cart is empty!
        </p>
      </SideDiv>
    );
  }

  return (
    <SideDiv>
      <Details>
        <Heading size="1.5rem">Cart</Heading>
        <Button onClick={() => dispatch(close())}>Close</Button>
      </Details>
      <Button
        width="100%"
        mt="1rem"
        bg="rgb(236,0,39, 0.7)"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </Button>
      {state.cartItems.map((singleItem) => (
        <CartItems key={singleItem.id} item={singleItem} />
      ))}
      <br />
      <hr />
      <Heading size="0.9rem">Total Amount: {state.totalnumber}</Heading>
      <Heading size="0.9rem">Total Price: Rs. {state.totalprice}</Heading>
    </SideDiv>
  );
};

export default Sidebar;
