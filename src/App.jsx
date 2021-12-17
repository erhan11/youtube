import Intro from "./components/Intro";
import About from "./components/About/About";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";


const App = () => {
  return <div>
  <Intro/>
  <About/>
  <ProductList/>
  <Product/>
  <Contact/>
  </div>;

};

export default App;