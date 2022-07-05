import React, { useEffect } from "react";
import Navigation from "./Navigation";
import {
  Card,
  Errorcontainer,
  Grid,
  Heading,
  Main,
} from "./styles/Layout.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";

const Product = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
            <Card>
              <img
                src={`https://electronic-ecommerce.herokuapp.com/${product.image}`}
                alt=""
              />
              <Heading size="1rem">{product.name}</Heading>
            </Card>
          ))}
      </Grid>
    </Main>
  );
};

export default Product;
