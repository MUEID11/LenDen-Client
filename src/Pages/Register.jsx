import { useState } from "react";
import backgroundLogo from "./../../public/logo1.png";
const RegistrationForm = () => {
  const [pin, setPin] = useState("");
  const [role, setRole] = useState('user')
  const handleInputChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setPin(value);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const pin = form.pin.value;
    const user = {
      name,
      phone,
      email,
      pin,
      role,
    }
    console.log(user);
  };
  return (
    <div
      className="min-h-screen bg-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      style={{
        background: `url(${backgroundLogo})`,
        backgroundSize:"cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Register To Len Den
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  type="number"
                  autoComplete="phone"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
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
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--500"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-2 ">
              {role === "agent" && <button  >Agent Registration, <span className="text-green-500 font-semibold" onClick={()=>setRole('user')}>Register as User</span></button>}
              {role === "user" && <button >User Registration, <span className="text-blue-500 font-semibold" onClick={()=>setRole('agent')}>Register as Agent</span></button>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
