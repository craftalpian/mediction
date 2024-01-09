import React from "react";
import SuccessRegister from "../../../public/success-register.svg";
import Image from "next/image";
import { dm, jakarta } from "@/app/_utils/fonts";
import { IoMdClose } from "react-icons/io";

export default function Success() {
  return (
    <div className="flex flex-col modal-box bg-white justify-center items-center px-6">
      <div className="flex w-full justify-end">
        <form method="dialog">
          <button>
            <IoMdClose />
          </button>
        </form>
      </div>
      <Image src={SuccessRegister} alt="" />
      <h1
        className={`text-slate-900 text-2xl font-bold ${jakarta.className} leading-loose`}
      >
        Berhasil Terdaftar
      </h1>
      <div className="text-center mt-[6px]">
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
      <div
        className={`text-center mt-[16px] text-neutral-500 text-xs font-normal ${dm.className} leading-tight`}
      >
        Nomor ID :
      </div>
      <div className="px-3 py-1.5 bg-cyan-200 bg-opacity-20 rounded-full border border-blue-500 border-opacity-30 justify-center items-center gap-2.5 inline-flex mt-[6px]">
        <div
          className={`text-center text-sky-900 text-lg font-bold ${jakarta.className} leading-7`}
        >
          #B67E56
        </div>
      </div>
    </div>
  );
}
