import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { filterByPrice, filterProduct } from "../features/productSlice";
import closeBtn from "../image/close.png";
import {
  Filtercontainer,
  FilterIcon,
  Filteroptions,
  Heading,
  Select,
} from "./styles/Layout.styled";

const Filter = ({ status, toggleFilter }) => {
  const dispatch = useDispatch();
  const category = [
    "electronic",
    "laptop",
    "mobile",
    "headseat",
    "watch",
    "keyboard",
  ];

  const handleChange = (e) => {
    dispatch(filterProduct(e.target.value));
    toggleFilter(false);
  };

  const handlePriceChange = (e) => {
    dispatch(filterByPrice(e.target.value));
    toggleFilter(false);
  };

  return (
    <Filtercontainer status={status}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading size="1.5rem">Filter</Heading>
        <FilterIcon onClick={() => toggleFilter(false)}>
          <img src={closeBtn} alt="close" />
        </FilterIcon>
      </div>
      <Filteroptions>
        <Heading size="1rem">Price</Heading>
        <Select defaultValue="" onChange={handlePriceChange}>
          <option value="">Select an option</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </Select>
        <br />
        <Heading size="1rem">Category</Heading>
        <Select defaultValue="electronics" onChange={handleChange}>
          {category.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </Filteroptions>
    </Filtercontainer>
  );
};

export default Filter;
