import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products";
import Cart from "./components/Cart/Cart";
import OrderStatus from "./components/OrderStatus";
import About from "./components/Header/About";
import SignIn from "./components/Header/SignIn";
import SignUp from "./components/Header/SignUp";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/signin" element={<SignIn />}></Route>
            <Route exact path="/orderstatus" element={<OrderStatus />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/products" element={<Products />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
