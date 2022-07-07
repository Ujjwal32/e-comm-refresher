import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Buttongroup,
  Form,
  Heading,
  Input,
  InputContainer,
} from "./styles/Layout.styled";

const Checkout = () => {
  const totalprice = useSelector((state) => state.cart.totalprice);
  const navigate = useNavigate();
  return (
    <Form>
      <Heading>Checkout</Heading>
      <InputContainer>
        <Input type="text" placeholder="name" />
        <Input type="text" placeholder="billing-address" />
        <Input type="text" placeholder="delivery-address" />
        <Input type="tel" placeholder="telephone" />
        <Input type="date" placeholder="date" />
        <Buttongroup width="100%">
          <Button width="55%" mt="1rem" bg="green">
            Checkout Rs. {totalprice}
          </Button>
          <Button width="40%" mt="1rem" bg="red" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </Buttongroup>
      </InputContainer>
    </Form>
  );
};

export default Checkout;
