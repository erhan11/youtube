import Intro from "./components/Intro";
import About from "./components/About/About";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";


const App = () => {
  return <div>
  <Intro/>
  <About/>
  <Product/>
  <ProductList/>
  </div>;

};

export default App;