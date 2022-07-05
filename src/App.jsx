import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import { Container, Layout } from "./components/styles/Layout.styled";

function App() {
  return (
    <Layout>
      <Container>
        <Sidebar />
        <Product />
      </Container>
    </Layout>
  );
}

export default App;
