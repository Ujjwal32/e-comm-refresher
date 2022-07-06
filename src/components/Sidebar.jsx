import React from "react";
import { useDispatch } from "react-redux";
import { Button, Details, Heading, SideDiv } from "./styles/Layout.styled";

const Sidebar = ({ close }) => {
  const dispatch = useDispatch();

  return (
    <SideDiv>
      <Details>
        <Heading size="1.5rem">Cart</Heading>
        <Button onClick={() => dispatch(close())}>Close</Button>
      </Details>
    </SideDiv>
  );
};

export default Sidebar;
