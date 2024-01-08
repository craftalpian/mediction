import React from "react";
import { inter } from "../_utils/fonts";
import clsx from "clsx";

export interface ButtonInterface {
  title: string;
  disable?: boolean;
}

export default function Button({ title, disable = false }: ButtonInterface) {
  return (
    <button
      disabled={disable}
      className={clsx(
        `w-full rounded-lg justify-center items-center py-3 text-white ${inter.className} font-bold text-base bg-[#003778]`,
        { "bg-gray-100 text-stone-300": disable }
      )}
    >
      {title}
    </button>
  );
}
