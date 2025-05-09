import React from "react";
import Input from "./Input";
import Button from "./Button";
import { IoEnterOutline } from "react-icons/io5";

const Register = () => {
  return (
    <div className="w-1/3 p-5 bg-white rounded-lg space-y-3">
      <h1 className="text-xl font-semibold">ثبت نام در وب سایت</h1>
      <p className="">برای ثبت نام نام کاربری و رمز عبور خود را وارد نمایید.</p>
      <form className="flex flex-col space-y-4">
        <Input type={"text"} placeholder={"نام و نام خانوداگی"} />
        <Input type={"text"} placeholder={"شماره موبایل"} />
        <Input type={"text"} placeholder={"نام کاربری"} />
        <Input type={"password"} placeholder={"رمز عبور"} />
        <Input type={"password"} placeholder={"تکرار رمز عبور"} />

        <Button className="flex flex-row-reverse items-center gap-3 justify-center">
          <p>ثبت نام</p> <IoEnterOutline size={20} />
        </Button>
      </form>
    </div>
  );
};

export default Register;
