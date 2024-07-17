import { useContext } from "react";
import useProtection from "../Hooks/useProtection";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { data, isLoading } = useProtection();
  const { user, loading } = useContext(AuthContext);

  console.log("AuthContext:", { user, loading });
  console.log("useProtection:", { data, isLoading });

  if (loading || isLoading) {
    return <Loading />;
  }

  if (data?.role && data?.status !== "blocked" && user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
