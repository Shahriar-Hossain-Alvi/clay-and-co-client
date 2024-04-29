import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Layouts/ErrorPage";
import AllArtsCrafts from "../Pages/AllArtsCrafts"
import AddCrafts from "../Pages/AddCrafts";
import MyArtsCrafts from "../Pages/MyArtsCrafts";
import Login from "../Pages/Profile/Login";
import Register from "../Pages/Profile/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch("http://localhost:5000/craftItem") 
            },
            {
                path: "/allArtsCrafts",
                element: <AllArtsCrafts></AllArtsCrafts>,
            },
            {
                path: "/addCraft",
                element: <PrivateRoute><AddCrafts></AddCrafts></PrivateRoute>
            },
            {
                path: "/myArtsCrafts",
                element: <PrivateRoute><MyArtsCrafts></MyArtsCrafts></PrivateRoute>
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