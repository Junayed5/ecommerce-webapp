import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Home from "../pages/Home";

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
        path: "/home",
        element: <Home/>
    }

])

export default router;