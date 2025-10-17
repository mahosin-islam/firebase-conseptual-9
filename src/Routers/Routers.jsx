import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Fixed/Root/Root';
import Home from '../Pages/Home';
import LogIn from '../Pages/LogIn';
import Register from '../Pages/Register';




export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement:  <p>not find your page</p>,
    children:[
      {index: true,
        Component: Home
      },
      {
    path: '/Home',
    Component: Home
      },
      {
        path: 'LogIn',
        Component: LogIn
      },
      {
        path: 'Register',
        Component: Register
      },
      {
        path: '*',
        element: <p>not find any page </p>
      }
    ] 
  }
])




