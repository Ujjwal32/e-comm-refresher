import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Button,
  Buttongroup,
  Errormessage,
  Form,
  Heading,
  Input,
  InputContainer,
  Modal,
} from "./styles/Layout.styled";
import success from "../image/success.gif";

import { useForm } from "react-hook-form";
import { clearCart } from "../features/cartSlice";

const Checkout = () => {
  const totalprice = useSelector((state) => state.cart.totalprice);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      dispatch(clearCart());
      navigate("/");
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      {showModal && (
        <Modal>
          <div style={{ display: "grid", placeItems: "center" }}>
            <Heading>Your order has been placed!</Heading>
            <div
              style={{
                width: "10rem",
                height: "9rem",
              }}
            >
              <img src={success} alt="success" />
            </div>
          </div>
        </Modal>
      )}
      <Heading>Checkout</Heading>
      <InputContainer>
        <Input
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 8,
              message: "Name should be minimum of 8 characters.",
            },
          })}
        />
        <Errormessage>{errors.name?.message}</Errormessage>
        <Input
          type="text"
          placeholder="billing-address"
          {...register("billingAddress", {
            required: "This field is required!",
            minLength: {
              value: 5,
              message: "Address should be minimum of 5 characters.",
            },
          })}
        />
        <Errormessage>{errors.billingAddress?.message}</Errormessage>
        <Input
          type="text"
          placeholder="delivery-address"
          {...register("deliveryAddress", {
            required: "This field is required!",
            minLength: {
              value: 5,
              message: "Address should be minimum of 5 characters.",
            },
          })}
        />
        <Errormessage>{errors.deliveryAddress?.message}</Errormessage>
        <Input
          type="tel"
          placeholder="telephone"
          {...register("telephone", {
            required: "This field is required!",
            minLength: {
              value: 8,
              message: "Telephone should be minimum of 8 numbers.",
            },
            pattern: {
              value: /^(\+\d{1,3}[- ]?)?\d{10}$/i,
              message: "Invalid telephone number",
            },
          })}
        />
        <Errormessage>{errors.telephone?.message}</Errormessage>
        <Input
          type="date"
          placeholder="date"
          {...register("date", { required: "This field is required!" })}
        />
        <Errormessage>{errors.date?.message}</Errormessage>
        <Buttongroup width="100%">
          <Button type="submit" width="55%" mt="1rem" bg="green">
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
