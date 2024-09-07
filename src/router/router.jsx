import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import RequireAuth from "../authentication/RequireAuth";

const router = createBrowserRouter([
    {
        path: "/register",
        element : <Registration/>,
    },
    {
        path: "/login",
        element : <Login/>
    },
    {
        path: "/",
        element: (
            <RequireAuth>
                <Main/>
            </RequireAuth>
        ),
        children: [
            {
                path: "/",
                element: <Products/>
            },
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