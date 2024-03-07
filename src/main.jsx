import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="mx-auto h-80 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <RouterProvider router={router} />
        </div>
    </React.StrictMode>
)
