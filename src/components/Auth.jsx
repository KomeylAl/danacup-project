import React, { useState } from "react";
import LoginComp from "./LoginComp";
import Register from "./Register";

const Auth = () => {
  const [comp, setComp] = useState("login");

  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
      <div className="w-1/3 h-12 bg-gray-400 rounded-lg p-2 flex items-center justify-between gap-2">
        <button
          onClick={() => setComp("login")}
          className={`w-full flex-1/2 rounded-lg py-1 cursor-pointer ${
            comp === "login" ? "bg-white" : ""
          }`}
        >
          ورود
        </button>
        <button
          onClick={() => setComp("register")}
          className={`w-full flex-1/2 rounded-lg py-1 cursor-pointer ${
            comp === "register" ? "bg-white" : ""
          }`}
        >
          ثبت نام
        </button>
      </div>
      {comp === "login" ? <LoginComp /> : <Register />}
    </div>
  );
};

export default Auth;
