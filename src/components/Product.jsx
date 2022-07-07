import React, { useEffect } from "react";
import Navigation from "./Navigation";
import filterIcon from "../image/filter.png";
import {
  Card,
  CartButton,
  Details,
  Errorcontainer,
  FilterIcon,
  Grid,
  Heading,
  Image,
  Main,
} from "./styles/Layout.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";

const Product = ({ toggleFilter }) => {
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <Heading size="1.5rem">Products</Heading>
        <FilterIcon onClick={() => toggleFilter(true)}>
          <img src={filterIcon} alt="filter" />
        </FilterIcon>
      </div>
      <Grid>
        {state.filter &&
          state.filter.map((product) => (
            <Card key={product.id}>
              <Image>
                <img
                  src={`https://electronic-ecommerce.herokuapp.com/${product.image}`}
                  alt={product.name}
                />
              </Image>
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
