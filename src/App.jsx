import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import router from "./router/router";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export const Context = React.createContext();

function App() {

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState('');

  const state = {
    cart,
    user,
    setUser,
    setCart
  };
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Context.Provider value={state}>
        <RouterProvider router={router} />
        <Toaster />
      </Context.Provider>
    </>
  );
}

export default App;
