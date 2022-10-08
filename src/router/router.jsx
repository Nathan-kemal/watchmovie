import {createBrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../pages/error/error-page.jsx";
import Detail from "../pages/detail/detail.jsx";
import Category from "../pages/Category/category.jsx";
import Searched from "../pages/searched/searched.jsx";
import {AnimatePresence} from 'framer-motion'

function AnimatedRoute() {
    const location = useLocation();
    return <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<App/>} errorElement={<ErrorPage/>}/>
            <Route path='/:catagory/:id' element={<Detail/>} errorElement={<ErrorPage/>}/>
            <Route path='/:catagory' element={<Category/>} errorElement={<ErrorPage/>}/>
            <Route path='/search/:catagory/:query' element={<Searched/>} errorElement={<ErrorPage/>}/>

        </Routes>
    </AnimatePresence>
}



export default AnimatedRoute;