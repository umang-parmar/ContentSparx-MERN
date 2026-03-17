import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-m-6 border border-blue-300 shadow-xl shadow-blue-200 rounded-lg">
        <div className="flex flex-col items-center justify-center"></div>
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold"><span className="text-blue-500">Admin</span> Login</h1>
            <p className="font-light">Enter your credentials to access the admin panel</p>
          </div>
      </div>
    </div>
  );
};

export default Login;
