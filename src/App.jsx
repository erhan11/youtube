import Intro from "./components/Intro";
import About from "./components/About/About";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import React, { useContext }  from 'react';

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode; 
  return (
  <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <Toggle/>
  <Intro/>
  <About/>
  <ProductList/>
  <Product/>
  <Contact/>
  </div>
);
};

export default App;