import React from "react";
import Input from "./Input";
import Button from "./Button";
import { IoEnterOutline } from "react-icons/io5";

const LoginComp = () => {
  return (
    <div className="w-1/3 p-5 bg-white rounded-lg space-y-3">
      <h1 className="text-xl font-semibold">ورود به وب سایت</h1>
      <p className="">برای ورود نام کاربری و رمز عبور خود را وارد نمایید.</p>
      <form className="flex flex-col space-y-4">
        <Input type={"text"} placeholder={"نام کاربری"} />
        <Input type={"password"} placeholder={"رمز عبور"} />

        <Button className="flex flex-row-reverse items-center gap-3 justify-center">
          <p>ورود</p> <IoEnterOutline size={20} />
        </Button>
      </form>
      <p className="w-fit text-blue-500 cursor-pointer">فراموشی رمز عبور</p>
    </div>
  );
};

export default LoginComp;
