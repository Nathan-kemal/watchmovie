import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../pages/error/error-page.jsx";
import Detail from "../pages/detail/detail.jsx";
import Category from "../pages/Category/category.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>
    },

    {
        path: '/:catagory/:id',
        element: <Detail/>,
        errorElement: <ErrorPage/>
    },

    {
        path: '/:catagory',
        element: <Category/>,
        errorElement: <ErrorPage/>
    },
])

export default router;