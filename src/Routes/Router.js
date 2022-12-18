import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Checkout from "../Components/checkout/Checkout";
import GroupCourses from "../Components/CoursesComponent/GroupCourses/GroupCourses";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login&Register/Login";
import Register from "../Components/Login&Register/Register";
import Profile from "../Components/Profile/Profile";
import SingleCourseDetails from "../Components/SingleCourse/SingleCourseDetails";
import CoursesLayout from "../Layouts/CoursesLayout";
import Main from "../Layouts/Main";
import PrivateRoute from "./PrivateRouter";

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
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
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
      {
        path: '/course/:id',
        loader: ({ params }) => fetch(`https://e-learnign-server.vercel.app/course/${params.id}`),
        element: <SingleCourseDetails></SingleCourseDetails>,
      },
      {
        path: 'checkout/course/:id',
        loader: ({ params }) => fetch(`https://e-learnign-server.vercel.app/course/${params.id}`),
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
    {
      path: '/profile',
      element: <PrivateRoute><Profile></Profile></PrivateRoute>,
    }
    ]
  }
])