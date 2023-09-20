import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import MainLayout from './Components/MainLayout.jsx';
import Products from './Components/Products.jsx';
import Dashboard from './Components/Dashboard.jsx';
import ProductDetail from './Components/ProductDetail';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/home',
        element:<Home></Home>,
      },
     {
      path: '/products',
      loader: ()=> fetch(`https://dummyjson.com/products`),
      element: <Products></Products>
     },
     {
      path: '/products/;',
      loader: ()=> fetch(`https://dummyjson.com/products/${id}`),
      element: <ProductDetail></ProductDetail>
     },
     {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>,
        },
        {
          path: '/dashboard/profile',
          element: <Profile></Profile>
        },
        {
          path: '/dashboard/editprofile',
          element: <EditProfile></EditProfile>
        },
      ]
     },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
