import Button from "@/app/_atoms/button";
import InputForm from "@/app/_components/input-form";
import { inter, jakarta } from "@/app/_utils/fonts";
import React from "react";
import { IoMdClose } from "react-icons/io";
import AddPatient from "../../../../../public/add-patient.svg";
import Image from "next/image";

export default function CheckDetail() {
  return (
    <div className="modal-box bg-white px-6">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full justify-end">
          <form method="dialog">
            <button className="text-4xl">
              <IoMdClose />
            </button>
          </form>
        </div>
        <div className="items-center">
          <Image src={AddPatient} alt="" className="self-center mx-auto" />
          <h1
            className={`text-slate-900 text-2xl font-bold ${jakarta.className} leading-loose`}
          >
            Tambah Pasien Terdaftar
          </h1>
        </div>
        <div className="w-full mt-8 px-[20px]">
          <InputForm
            name="number_id"
            placeholder="Cth : #837HDG"
            required
            title="Nomor ID"
            type="text"
          />
          <div className="border-b border-b-slate-200 mt-10 mb-8" />
        </div>
      </div>
      <div className="flex w-full px-[20px] justify-end">
        <button className="px-7 py-3.5 bg-[#003778] rounded-lg justify-center items-center gap-1 inline-flex">
          <h1
            className={`text-white text-sm font-bold ${inter.className} leading-snug`}
          >
            Tambah Pasien
          </h1>
        </button>
      </div>
    </div>
  );
}
