import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useProtection = () => {
  const { setUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["protection"],
    queryFn: async () => {
      const response = await axiosSecure.get("/authentication");
      const data = await response.data;
      console.log(data);
      if (data.role) {
        setUser(data);
        return data;
      } else {
        setUser(null);
        return null;
      }
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useProtection;
