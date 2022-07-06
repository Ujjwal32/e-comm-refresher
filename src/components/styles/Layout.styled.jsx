import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Navbar = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

export const SideDiv = styled.div`
  position: fixed;
  padding: 1rem;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  background: green;
  transition: 1s;
`;

export const Main = styled.div`
  width: 100%;
  padding: 0 1rem;
  background-color: rgb(231, 228, 234);
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  margin-top: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 10px;
`;

export const Heading = styled.h1`
  font-size: ${(props) => props.size || "2rem"};
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 60%;
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  padding: 0 0.5rem;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const CartButton = styled(Button)`
  margin: 1rem 0.5rem;
  margin-bottom: 0;
`;

export const Errorcontainer = styled.div`
  height: 80%;
  width: 100%;
  display: grid;
  place-items: center;
  color: rgb(219, 212, 212);
`;
