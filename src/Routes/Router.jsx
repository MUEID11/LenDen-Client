import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Components/Error";
import RegistrationForm from "../Pages/Register";
import Login from "../Pages/Login";


export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <App />,
    },
    {
        path: "/register",
        element: <RegistrationForm />
    },
    {
        path: "/login",
        element: <Login />
    }
   
  ]);