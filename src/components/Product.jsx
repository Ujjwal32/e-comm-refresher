import React, { useEffect } from "react";
import Navigation from "./Navigation";
import {
  Card,
  CartButton,
  Details,
  Errorcontainer,
  Grid,
  Heading,
  Image,
  Main,
} from "./styles/Layout.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";

const Product = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addtoCart = (id) => {
    const addedItem = state.products.filter((product) => product.id === id)[0];
    dispatch(addToCart(addedItem));
  };

  if (state.error) {
    return (
      <Main>
        <Navigation />
        <Errorcontainer>
          <Heading size="2.5rem">{state.message}</Heading>
        </Errorcontainer>
      </Main>
    );
  }

  return (
    <Main>
      <Navigation />
      <Heading size="1.5rem">New Arrivals</Heading>
      <Grid>
        {state.products &&
          state.products.map((product) => (
            <Card key={product.id}>
              <Image
                src={`https://electronic-ecommerce.herokuapp.com/${product.image}`}
                alt=""
              />
              <Details>
                <Heading size="1rem">{product.name}</Heading>
                <Heading size="0.9rem">
                  {product.price.replace("$", "Rs. ")}
                </Heading>
              </Details>
              <Details>
                <Heading size="0.8rem">stock: {product.stock}</Heading>
                <Heading size="0.8rem">
                  {new Date(product.createDate)
                    .toLocaleDateString()
                    .replaceAll("/", "-")}
                </Heading>
              </Details>
              <CartButton
                disabled={product.stock === 0 ? true : false}
                onClick={() => addtoCart(product.id)}
              >
                Add to cart
              </CartButton>
            </Card>
          ))}
      </Grid>
    </Main>
  );
};

export default Product;
