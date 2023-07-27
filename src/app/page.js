"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const scheme = yup.object().shape({
  fName: yup.string().required("first name is mandatory"),
  lName: yup.string().required("last name is mandatory"),
  email: yup.string().email("Please Enter Valid Email").required("Enter email"),
  age: yup.number().integer().positive().required(),
  password: yup
    .string()
    .min(4, "minimum 4 character required")
    .max(15, "maximum 14 character required")
    .required(),
  confirm: yup.string().oneOf([yup.ref("password"), null]),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm({
    resolver: yupResolver(scheme),
    mode: "onchange",
  });
  // console.log(isValid);
  console.log(errors);
  // const response = fetch("https://sheet.best/api/sheets/fb5161b7-7319-4e58-932c-56c233dea4bb", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(),
  // });
  //     fetch('https://sheet.best/api/sheets/fb5161b7-7319-4e58-932c-56c233dea4bb', {
  // method: "POST"
  //     .then(response => {
  //       //handle response
  //       console.log(response);
  //     })
  //     })

  return (
    <div className="text-center mt-32">
      <h1 className="mb-10">SIgn In</h1>
      <form
        onSubmit={handleSubmit((data) => {
          resolvers: yupResolver(scheme);
          
          console.log(data);
        })}
      >
        <input
          {...register("fName")}
          placeholder="FirstName"
          className="border border-red-400 p-2 mx-3 rounded-lg text-black focus:outline-green-500"
        />
        {errors.fName?.message}
        <br />
        <input
          {...register("lName")}
          placeholder="LirstName"
          className="border border-red-400 p-2 mx-3 rounded-lg text-black focus:outline-green-500"
        />
        {errors.lName?.message}
        <br />
        <input
          {...register("email")}
          placeholder="Gmail"
          className="border border-red-400 p-2 mx-3 rounded-lg text-black focus:outline-green-500"
        />
        {errors.email?.message}
        <br />
        <input
          {...register("age")}
          placeholder="Age"
          className="border border-red-400 p-2 mx-3 rounded-lg text-black focus:outline-green-500"
        />
        {errors.age?.message}
        <br />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border border-red-400 p-2 mx-3 rounded-lg text-black focus:outline-green-500"
        />
        {errors.password?.message}
        <br />
        <input
          {...register("confirm")}
          type="password"
          placeholder="Confirm Password"
          className="border border-red-400 p-2 mx-3 rounded-lg text-black focus:outline-green-500"
        />
        {errors.confirm?.message}
        <br />
        <button className="rounded-lg bg-slate-600 px-6 py-2 focus:bg-slate-400">
          Submit
        </button>
      </form>
    </div>
  );
}
