import Button from "@/app/_atoms/button";
import InputForm from "@/app/_components/input-form";
import { inter, jakarta } from "@/app/_utils/fonts";
import React from "react";
import { IoMdClose } from "react-icons/io";
import AddPatient from "../../../../../public/add-patient.svg";
import DetailModal from "../../../../../public/medical-file.svg";
import Image from "next/image";

export default function CheckDetail() {
  return (
    <div className="modal-box bg-white px-6 w-11/12 max-w-5xl">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full justify-between items-center inline-flex border-b border-b-slate-200 pb-[26px]">
          <div className="space-x-[18px] inline-flex items-center">
            <Image src={DetailModal} alt="" />
            <p>
              <span
                className={`text-slate-900 text-xl font-extrabold ${jakarta.className} leading-7`}
              >
                Detail Pemeriksaan{" "}
              </span>
              <span
                className={`text-slate-900 text-xl font-medium ${jakarta.className} leading-7`}
              >
                [23 September 2023]
              </span>
            </p>
          </div>
          <form method="dialog">
            <button className="text-4xl">
              <IoMdClose />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1 space-y-3">
            <p className="text-slate-400 text-sm font-medium font-['Plus Jakarta Sans'] leading-tight">
              Pasien
            </p>
            <div className="inline-flex">
              <div className="flex flex-col">
                <h1 className="text-slate-900 text-lg font-medium font-['DM Sans'] leading-loose">
                  Nadia Omara
                </h1>
                <h3 className="text-blue-500 text-xs font-semibold font-['Plus Jakarta Sans'] leading-normal">
                  #674HY
                </h3>
              </div>
            </div>
          </div>
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
