import Home from "components/Home/Home";
import AdminLog from "components/credentials/AdminLog";
import Login from "components/credentials/Login";
import Register from "components/credentials/Register";
import ForgotPassword from "components/credentials/ForgotPassword";
import Layout from "components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Student from "components/users/student/Student";
import Admin from "components/users/admin/Admin";
import Events from "components/events/Events";
import Drives from "components/drives/Drives";
import MyProfile from "components/users/student/MyProfile";
import Interviews from "components/drives/Interviews";
import AddDrives from "components/drives/AddDrives";
import AddEvents from "components/events/AddEvents";
import AllUsers from "components/users/AllUsers";
import Comments from "components/users/feed/comments/Index";

export const HOME = "/";
export const ADMINLOG = "/adminlog";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const FORPW = "/forgotpassword";
export const PROTECTED = "/protected";
export const STUDENT = "/protected/student";
export const ADMIN = "/protected/admin";
const router = createBrowserRouter([
  { path: HOME, element: <Home /> },
  { path: ADMINLOG, element: <AdminLog /> },
  { path: REGISTER, element: <Register /> },
  { path: LOGIN, element: <Login /> },
  { path: FORPW, element: <ForgotPassword /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: STUDENT,
        element: <Student />,
      },
      {
        path: ADMIN,
        element: <Admin />,
      },
      {
        path: "/protected/events",
        element: <Events />,
      },
      {
        path: "/protected/drives",
        element: <Drives />,
      },
      { path: "/protected/profile/:id", element: <MyProfile /> },
      { path: "/protected/interviews", element: <Interviews /> },
      { path: "/protected/addDrive", element: <AddDrives /> },
      { path: "/protected/addEvent", element: <AddEvents /> },
      { path: "/protected/users", element: <AllUsers /> },
      { path: "/protected/comments/:id", element: <Comments /> },
    ],
  },
]);
export default router;
