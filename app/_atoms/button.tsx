import React from "react";
import { inter } from "../_utils/fonts";

export interface ButtonInterface {
  title: string;
}

export default function Button({ title }: ButtonInterface) {
  return (
    <button
      className={`w-full rounded-lg justify-center items-center py-3 text-white ${inter.className} font-bold text-base bg-[#003778]`}
    >
      {title}
    </button>
  );
}
