import React from 'react';

const GoogleAuthButton = ({ text = "Tiếp tục với Google" }) => {
  const handleGoogleLogin = async () => {
    try {
      window.location.href = "http://localhost:5001/api/auth/google";
    } catch (error) {
      console.log("Google login failed", error);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleGoogleLogin}
        className="w-full flex justify-center items-center py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium text-white transition duration-300 ease-in-out"
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          className="h-5 w-5 mr-2"
        />
        {text}
      </button>
    </div>
  );
};

export default GoogleAuthButton;
