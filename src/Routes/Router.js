import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home/Home";
import CoursesLayout from "../Layouts/CoursesLayout";
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
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/courses',
        element: <CoursesLayout></CoursesLayout>,
        children: [
          {
            path: '/courses/:id',
            loader: ({ params }) => fetch(`https://e-learnign-server.vercel.app/courses/${params.id}`),
            element: <GroupCourses></GroupCourses>,

          }
        ]
      },
    ]
  }
])