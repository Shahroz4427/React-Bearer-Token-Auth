import { createBrowserRouter, Navigate } from "react-router-dom";
import Resgister from "../pages/Register";
import Home from "../pages/Home";
import Login from "../pages/Login";


const isAuthenticated = () => {
    return localStorage.getItem('userToken') !== null;
};


const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute element={<Home />} />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Resgister />
    },
]);

export default routes;
