import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Cancel from "../pages/Cancel";
import Success from "../pages/Success";
import NotFound from "../pages/NotFound";

const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/cancel", element: <Cancel /> },
    { path: "/success", element: <Success /> },
    { path: "*", element: <NotFound /> }
];

export default routes;
