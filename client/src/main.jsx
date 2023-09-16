import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Promotion from './pages/Promotion.jsx'
import Map from './pages/Map.jsx'
import Booking from './pages/Booking.jsx'
import './index.css'
import LoginLine from './auth/LoginLine.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/promotion",
    element:<Promotion/>
  },
  {
    path:"/map",
    element:<Map/>
  },
  {
    path:"/booking",
    element:<Booking/>
  },
  {
    path:"/login",
    element:<LoginLine/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
