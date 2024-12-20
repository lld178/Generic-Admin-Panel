import About from "../views/About";
import Page1 from "../views/Page1";
import Page2 from "../views/Page2";
import Home from "../views/Home";
import Page301 from "../views/Page301";
import Login from '../views/Login'
import { Navigate } from "react-router-dom";
export default [
  {
    path: '/',
    element: <Navigate to='/Login'></Navigate>
  },
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/page1',
        element: <Page1></Page1>,
      },
      {
        path: '/page2',
        element: <Page2></Page2>,
      },
      {
        path: '/page3/page301',
        element: <Page301></Page301>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '*',
    element: <Navigate to='/page1'></Navigate>
  }
]