import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from "./privateRoute"
import Home from './pages/home/home'
import Product from './pages/product/product'
import Admin from './pages/admin'
import Signin from './pages/signin'
import Signup from './pages/signup'


export default createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products/:slug',
        element: <Product />
    },
    {
        path: '/admin',
        element: (
            <PrivateRoute>
                <Admin />
            </PrivateRoute>
        )
    },
    {
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/signup',
        element: <Signup />
    },
])