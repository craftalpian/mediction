import Button from "@/app/_atoms/button";
import InputForm from "@/app/_components/input-form";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import React from "react";
import { IoMdClose } from "react-icons/io";
import AddPatient from "../../../../public/add-patient.svg";
import Siloam from "../../../../public/siloam.svg";
import Image from "next/image";

export default function AcceptPatient() {
  return (
    <div className="modal-box bg-white px-6 max-w-xl">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full justify-end">
          <form method="dialog">
            <button className="text-4xl">
              <IoMdClose />
            </button>
          </form>
        </div>
        <div className="bg-slate-50 p-6 w-full space-x-10 flex flex-row">
          <div className="flex flex-col flex-1 justify-center items-center space-y-4">
            <Image src={Siloam} alt="" />
            <h1
              className={`text-neutral-950 text-base font-bold ${jakarta.className} leading-relaxed`}
            >
              RS Siloam Sanjaya
            </h1>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center space-y-4">
            <Image src={Siloam} alt="" />
            <h1
              className={`text-neutral-950 text-base font-bold ${jakarta.className} leading-relaxed`}
            >
              RS Budi Asih
            </h1>
          </div>
        </div>
        <h1
          className={`text-slate-900 text-2xl font-bold ${jakarta.className} leading-loose text-center my-4`}
        >
          Data Diterima!
        </h1>
        <div className="text-center">
          <span
            className={`text-neutral-500 text-sm font-normal ${dm.className} leading-snug`}
          >
            Pasien sudah terdaftar di sistem Rumah Sakit ini dan bisa melihat
            semua riwayat pemeriksaan pasien. Lihat pasien dan riwayatnya di
            menu{" "}
          </span>
          <span className="text-sky-800 text-sm font-bold leading-snug">
            pasien
          </span>
        </div>
      </div>
      <div className="my-8 border-b border-b-slate-200" />
      <div className="flex w-full px-[20px] justify-end">
        <button className="px-7 py-3.5 bg-[#003778] rounded-lg justify-center items-center gap-1 inline-flex">
          <h1
            className={`text-white text-sm font-bold ${inter.className} leading-snug`}
          >
            Mengerti
          </h1>
        </button>
      </div>
    </div>
  );
}
