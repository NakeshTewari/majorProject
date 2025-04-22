// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Layout from './Layout';
import AlertPage from './AlertPage';
import UserProfilePage from './UserProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      {path :'alertpage', element:<AlertPage/>},
      {path:"userprofile", element:<UserProfilePage/>}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
