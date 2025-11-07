import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Root from './Layout/Root.jsx'
import { RouterProvider } from 'react-router'
import Home from './Comonnets/Home.jsx'
import Allproducts from './Comonnets/Allproducts.jsx'
import Authprovider from './Authcontext/Authprovider.jsx'
import Login from './Comonnets/Login.jsx'
import Regester from './Comonnets/Regester.jsx'
import Privateroute from './PrivateRoute/Privateroute.jsx'
import Productdetils from './Comonnets/Productdetils.jsx'
import Mybids from './Comonnets/Mybids.jsx'


const router  = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/allproducts',
        element: <Privateroute><Allproducts></Allproducts></Privateroute>,
      },
      {
        path:'/login',
        element: <Login></Login> 
      },
      {
        path: '/regester',
        element: <Regester></Regester>
      },
      {
        path: '/productdetsils/:id',
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        element: <Privateroute><Productdetils></Productdetils></Privateroute>,
      },
      {
        path: '/mybids',
        element: <Privateroute><Mybids></Mybids></Privateroute>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Authprovider> <RouterProvider router={router}></RouterProvider></Authprovider>
  </StrictMode>,
)
