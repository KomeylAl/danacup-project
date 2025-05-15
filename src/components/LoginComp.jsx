import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const loginSchema = yup.object({
  username: yup
    .string()
    .required("نام کاربری الزامی است")
    .max(5, "حداکثر کاراکتر 5"),
  password: yup.string().required("رمز عبور الزامی است"),
  email: yup
    .string()
    .email("فرمت ایمیل صحیح نیست")
    .required("ایمیل اجباری است"),
});

const LoginComp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await axios.post("", data, {});
  };

  return (
    <div className="w-1/3 p-5 bg-white rounded-lg space-y-3">
      <h1 className="text-xl font-semibold">ورود به وب سایت</h1>
      <p className="">برای ورود نام کاربری و رمز عبور خود را وارد نمایید.</p>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("email")}
          type={"text"}
          placeholder={"ایمیل"}
          className={`w-2/3 bg-white rounded-lg px-4 py-2 border outline-0 ${
            errors.email ? "border-rose-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="text-rose-500">{errors.email.message}</p>
        )}
        <input
          {...register("password")}
          type={"password"}
          placeholder={"رمز عبور"}
          className="w-2/3 bg-white rounded-lg px-4 py-2 border border-gray-300"
        />
        {errors.password && (
          <p className="text-rose-500">{errors.password.message}</p>
        )}
        <button>ورود</button>
      </form>
      <p className="w-fit text-blue-500 cursor-pointer">فراموشی رمز عبور</p>
    </div>
  );
};

export default LoginComp;
