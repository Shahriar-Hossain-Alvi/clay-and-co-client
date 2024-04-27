import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Layouts/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allArtsCrafts",
                element: <Home></Home>
            },
            {
                path: "/myArtsCrafts",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;