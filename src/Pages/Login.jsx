import { useState } from "react";
import backgroundLogo from "./../../public/logo1.png";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const axiosPublic = useAxiosPublic();
  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setPin(value);
    }
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const phonemail = form.phonemail.value;
    const pin = form.pin.value;
    const user = { phonemail, pin };

    try {
      const response = await axiosPublic.post("/signin", user);
      const data = response.data;
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        const token = data.token;
        localStorage.setItem("token", token);
        toast.success("Sign in successful");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div
      className="min-h-screen bg-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      style={{
        background: `url(${backgroundLogo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Login to Len Den
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label
                htmlFor="phonemail"
                className="block text-sm font-medium text-gray-700"
              >
                Email address Or Mobile
              </label>
              <div className="mt-1">
                <input
                  id="phonemail"
                  name="phonemail"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="pin"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your 5 digit Pin
              </label>
              <div className="mt-1">
                <input
                  id="pin"
                  name="pin"
                  type="number"
                  autoComplete="current-pin"
                  placeholder="Enter Pin"
                  required
                  value={pin}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
