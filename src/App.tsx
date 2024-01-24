import { getProducts } from "./products";

function App() {
  const products = getProducts();
  console.log(products);
  return (
    <>
      <div>Hello World!</div>
    </>
  );
}

export default App;
