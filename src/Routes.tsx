import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import ShoppingCar from "./Pages/ShoppingCar";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment";
import NotFound from "./Pages/NotFound";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Background from "./Components/Background";

export function AppRoutes() {
  const [auth, setAuth] = useState<boolean>(false);
  const color = localStorage.getItem("themeColor");

  return (
    <Router>
      <Background color={color ?? "#2C2C2C"}>
        <NavBar />
        <Routes>
          {!auth ? (
            <>
              <Route path="" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="menu" element={<Menu />} />
              <Route path="shoppingCar" element={<ShoppingCar />} />
              <Route path="login" element={<Login />} />
            </>
          ) : (
            <>
              <Route path="payment" element={<Payment />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Background>
    </Router>
  );
}
