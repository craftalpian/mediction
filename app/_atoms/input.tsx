import React from "react";
import { inter } from "../_utils/fonts";

export interface InputInterface {
  placeholder: string;
  type: React.HTMLInputTypeAttribute | undefined;
  //   register: any;
  name: string;
}

export default function Input({
  placeholder,
  type,
  //   register,
  name,
}: InputInterface) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`p-[14px] placeholder:text-[#afb1b2] text-[#353738] bg-gray-50 ${inter.className} placeholder:${inter.className} text-sm font-normal outline-none border border-[#D8DCDF] rounded-md`}
    />
  );
}
