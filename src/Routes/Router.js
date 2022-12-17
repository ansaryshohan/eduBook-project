import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: []
  }
])