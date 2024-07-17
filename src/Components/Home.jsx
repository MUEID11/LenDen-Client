import { useNavigate } from "react-router-dom";
import useProtection from "../Hooks/useProtection";
import Loading from "./Loading";

const Home = () => {
    const navigate = useNavigate();
    const {data, isLoading, isError} = useProtection();
    const localToken = localStorage.getItem("token");
   if(isLoading){
    return <Loading />
   }
   if(!localToken || isError){
    return navigate("/login");
   }
   if(data?.role){
    return navigate('/dashboard')
   }
   return navigate('/login')
};

export default Home;