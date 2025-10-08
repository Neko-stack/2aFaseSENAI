import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Material from "../pages/Material";
import Bar from "../pages/Bar";
import Sorveteria from "../pages/Sorveteria";

const router = createBrowserRouter([
    {path: '/', element: <Home/> },
    {path: '/material', element: <Material/> },
    {path: '/bar', element: <Bar/> },
    {path: '/sorveteria', element: <Sorveteria/> }
])

export default router