import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import theme from "./components/Theme.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart.jsx";
import Information from "./pages/Information";
import Scroll from "./components/Scroll";
import { Provider, useDispatch, useSelector, connect } from "react-redux";
import store from "./store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Scroll />
        <Provider store={store}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/information/:id" element={<Information />} />
          </Routes>
          <Footer />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
