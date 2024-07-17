import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Components/Error";
import RegistrationForm from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Components/Home";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
