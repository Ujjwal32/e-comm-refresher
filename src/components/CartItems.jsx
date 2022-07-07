import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { changeQuantity } from "../features/cartSlice";
import {
  Buttongroup,
  Cartbtn,
  Cartgroup,
  CartImage,
  Heading,
  Itemdetails,
  PriceAndButton,
} from "./styles/Layout.styled";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const { name, image, price, quantity, id, totalPrice } = item;

  const handleChange = (id, action) => {
    dispatch(changeQuantity({ id, action }));
  };
  const intPrice = parseInt(price.slice(1));
  return (
    <Cartgroup>
      <CartImage>
        <img
          src={`https://electronic-ecommerce.herokuapp.com/${image}`}
          alt={name}
        />
      </CartImage>
      <Itemdetails>
        {/* details */}
        <Heading size="1rem">{name}</Heading>
        {/* <Price></Price> */}
        <PriceAndButton>
          <Heading size="0.8rem">Rs. {totalPrice}</Heading>
          <Buttongroup>
            <Cartbtn onClick={() => handleChange(id, "inc")}>+</Cartbtn>
            <p>{quantity}</p>
            <Cartbtn onClick={() => handleChange(id, "dec")}>-</Cartbtn>
          </Buttongroup>
        </PriceAndButton>
      </Itemdetails>
    </Cartgroup>
  );
};

export default CartItems;
