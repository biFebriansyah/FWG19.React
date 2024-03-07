import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import Product from './pages/product/product'


export default createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products/:slug',
        element: <Product />
    }
])