import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Layouts/ErrorPage";
import AllArtsCrafts from "../Pages/AllArtsCrafts"
import AddCrafts from "../Pages/AddCrafts";
import MyArtsCrafts from "../Pages/MyArtsCrafts";
import Login from "../Pages/Profile/Login";
import Register from "../Pages/Profile/Register";

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
                element: <AllArtsCrafts></AllArtsCrafts>,
            },
            {
                path: "/addCraft",
                element: <AddCrafts></AddCrafts>
            },
            {
                path: "/myArtsCrafts",
                element: <MyArtsCrafts></MyArtsCrafts>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;