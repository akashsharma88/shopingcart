import logo from './logo.svg';
import './App.css';
import { Router, Link } from "@reach/router";
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
function App() {
  return (
    <Router>
      <Home path="/" />
      <Product path="products" />
      <Cart path="cart" />
    </Router>

  );
}

export default App;
