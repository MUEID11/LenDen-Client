import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const localToken = localStorage.getItem("token");

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        axiosPublic.defaults.headers.common.Authorization = `Bearer ${localToken}`;
        const response = await axiosPublic.get("/authentication");
        const validUser = response.data;
        if (validUser) {
          setUser(validUser);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    authenticateUser();

    // Cleanup function
    return () => {
      // Clear the Authorization header
      delete axiosPublic.defaults.headers.common.Authorization;
    };
  }, [axiosPublic, localToken]);

  const logOut = () => {
    setUser(null);
    setLoading(false);
    localStorage.removeItem("token");
    return
  };

  const authInfo = { user, loading, setUser, logOut };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
