import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Navbar = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  position: sticky;
  padding: 1rem;
  top: 0;
  width: 20%;
  height: 100vh;
  background: green;
`;

export const Main = styled.div`
  width: 80%;
  padding: 0 1rem;
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
  padding: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Errorcontainer = styled.div`
  height: 80%;
  width: 100%;
  display: grid;
  place-items: center;
  color: rgb(219, 212, 212);
`;
