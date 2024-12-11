"use client"
import { useState } from "react";

import InputField from "@/components/Form/InputField";
import Button from "@/components/Buttons/Button";


interface FormData {
  username: string;
  email: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    alert("Submitted Sucessfully");
  };

  return (
   
      <div className=" w-full flex justify-start items-center gap-20">
       
        <div className="">
          <div className="py-6">
            <h1 className="font-Amiri text-5xl font-bold leading-[66px] pb-8 text-[#101010]">
              Welcome Back!
            </h1>
            <p className="font-Poppins text-lg text-[#333]">
              Access your account to manage appointments, review treatment
              plans, and stay connected with your dental care. Enter your
              details below to get started.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-[840px]  space-y-4">
            <div className="py-6">
              <InputField
                id="username"
                name="username"
                label="Email Id"
                type="text"
                placeholder="Enter Email ID"
                value={formData.username}
                onChange={handleChange}
                className="w-full pb-8"
              />
              <InputField
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Enter password"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
              
            </div>

            <Button variant="Filled" classNames="w-full flex justify-center">
              Submit
            </Button>
          </form>
          <p className="text-lg pt-6">
            Dont have an account?{" "}
            <span className="text-[#FF7F50] cursor-pointer"> Sign Up </span>
          </p>
        </div>
      </div>
  
  );
};

export default LoginPage;
