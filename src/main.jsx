import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import store from './store'
import router from './router'
import './index.css'

const persist = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="mx-auto h-80 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <Provider store={store}>
                <PersistGate persistor={persist} loading={null}>
                    <RouterProvider router={router} />
                </PersistGate>
            </Provider>
        </div>
    </React.StrictMode>
)
