import React from "react";
import SuccessRegister from "../../../public/success-register.svg";
import Image from "next/image";
import { dm, jakarta } from "@/app/_utils/fonts";

export default function Success() {
  return (
    <div className="flex flex-col modal-box bg-white justify-center items-center px-6">
      <Image src={SuccessRegister} alt="" />
      <h1
        className={`text-slate-900 text-2xl font-bold ${jakarta.className} leading-loose`}
      >
        Berhasil Terdaftar
      </h1>
      <div className="text-center">
        <span
          className={`text-neutral-500 text-sm font-normal ${dm.className} leading-snug`}
        >
          Rumah sakit “
          <span
            className={`text-blue-500 text-sm font-bold ${dm.className} leading-snug`}
          >
            Budi Asih
          </span>
          ” berhasil terdaftar di platform ini, kini transfer data pasien
          menjadi mudah dan aman.
        </span>
      </div>
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click outside to close</p>
    </div>
  );
}
