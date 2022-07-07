import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
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
  background: ${(props) => props.bg || "transparent"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 1px solid black;
  border-radius: 0.5rem;
  font-size: 1rem;
  width: ${(props) => props.width || ""};
  margin-top: ${(props) => props.mt || ""};
`;

export const Main = styled.div`
  min-height: 100vh;
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
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  background-color: white;
  height: 50%;
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

// cart style componenets
export const SideDiv = styled.div`
  position: fixed;
  padding: 1rem;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: white;
  transition: 1s;
`;

export const Cartgroup = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 0.5rem;
`;

export const CartImage = styled.div`
  width: 25%;
  margin-right: 5%;
  background-color: white;
`;

export const Itemdetails = styled.div`
  width: 70%;
  disaplay: flex;
  flex-direction: column;
`;

export const Cartbtn = styled(Button)`
  padding: 0.2rem 0.4rem;
  height: 1.5rem;
  width: 2.5rem;
`;
export const PriceAndButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Buttongroup = styled.div`
  display: flex;
  width: 55%;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

// filter sidebar
export const Filtercontainer = styled.div`
  width: 30%;
  height: 100%;
  position: sticky;
  top: 10px;
  padding: 1rem;
  background-color: white;

  @media only screen and (max-width: 768px) {
    position: fixed;
    width: 300px;
    display: ${(props) => (props.status ? "block" : "none")};
  }
`;

export const Filteroptions = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;

export const Select = styled.select`
  padding: 0.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 2rem;
  width: 100%;
  background-color: rgb(36, 112, 158, 0.5);
  border: none;
  cursor: pointer;
`;

//filter icon
export const FilterIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
