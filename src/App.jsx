import { useState } from "react";
import Filter from "./components/Filter";
import Product from "./components/Product";
import { Container, Layout } from "./components/styles/Layout.styled";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Layout>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/"
          element={
            <Container>
              <Filter status={showFilter} toggleFilter={setShowFilter} />
              <Product toggleFilter={setShowFilter} />
            </Container>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
