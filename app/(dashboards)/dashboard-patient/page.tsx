"use client"

import React from "react";
import Image from "next/image";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import Empty from "../../../public/empty.svg";
import { SiAddthis } from "react-icons/si";
import AddNewPatient from "./_components/add-new-patient";

export default function Login() {
  return (
    <>
      <main className="flex flex-1 flex-col p-8 bg-slate-50">
        <div className="inline-flex justify-between w-full items-center">
          <h1
            className={`text-neutral-800 text-3xl font-bold ${jakarta.className} text-left leading-10`}
          >
            Pasien
          </h1>
          <button
            onClick={() => {
              if (document) {
                (document.getElementById("my_modal_2") as any).showModal();
              }
            }}
            className="text-white items-center bg-sky-900 py-[14px] px-[28px] rounded-lg inline-flex space-x-2"
          >
            <SiAddthis />
            <h1 className={`text-sm font-bold ${inter.className} leading-snug`}>
              Tambah Pasien
            </h1>
          </button>
        </div>
        <div className="mt-[20px] bg-white flex flex-1 w-full flex-col justify-center">
          <Image src={Empty} alt="" className="self-center" />
          <h1
            className={`text-center mt-[16px] text-neutral-950 text-xl font-bold ${jakarta.className} leading-loose`}
          >
            Belum ada pasien yang ditambahkan!
          </h1>
          <p
            className={`text-center text-neutral-500 text-sm font-normal ${dm.className} leading-snug mt-2`}
          >
            Tambahkan data pasien untuk penyimpanan data dan history berobat!
            Klik button “Tambah Pasien” di atas kanan halaman ini
          </p>
        </div>
      </main>
      <dialog id="my_modal_2" className="modal">
        <AddNewPatient />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
