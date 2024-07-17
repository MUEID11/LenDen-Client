import { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BalanceButton = () => {
  const [showBalance, setShowBalance] = useState(false);
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleClick}
        className={`bg-white text-sm text-blue-600 px-2 py-1 rounded-md sm:mr-8 ${
          showBalance ? 'animate-slide-left' : ''
        }`}
        style={{
          animation: showBalance ? 'slideLeft 0.5s forwards' : 'none',
          transform: showBalance ? 'translateX(-10px)' : 'translateX(0)', // Adjust initial position here
        }}
      >
        Balance
      </button>
      {showBalance && user?.balance !== undefined && (
        <span
          className="text-sm text-gray-100 font-bold sm:mr-8"
          style={{
            animation: 'fadeIn 0.5s forwards',
            opacity: showBalance ? 1 : 0, // Ensure opacity change on show/hide
            marginLeft: showBalance ? '5px' : '0', // Adjust margin when shown
          }}
        >
           {user.balance} Tk
        </span>
      )}
    </div>
  );
};

export default BalanceButton;
