import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import router from "./router/router";

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
