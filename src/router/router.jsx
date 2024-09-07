import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element : <Registration/>,
    },
    {
        path: "login",
        element : <Login/>
    },
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "home",
                element: <Products/>
            },
            {
                path: "cart",
                element : <Cart/>
            }
        ]
    }

])

export default router;