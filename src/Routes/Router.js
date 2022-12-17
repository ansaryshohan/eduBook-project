import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home/Home";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>
      },
    ]
  }
])