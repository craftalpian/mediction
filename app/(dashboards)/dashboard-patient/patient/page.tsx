"use client";

import React from "react";
import Image from "next/image";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import { SiAddthis } from "react-icons/si";

const PatientItemDetail = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="justify-between inline-flex w-full space-x-10">
    <p
      className={`text-slate-500 text-sm font-normal ${dm.className} leading-normal capitalize`}
    >
      {title}
    </p>
    <p
      className={`text-right text-slate-900 text-sm font-medium ${dm.className} leading-normal text-ellipsis overflow-hidden text-nowrap`}
    >
      {subtitle}
    </p>
  </div>
);

export default function Patient() {
  return (
    <>
      <main className="flex flex-1 flex-col p-8 bg-slate-50">
        <p
          className={`text-slate-400 text-sm font-medium ${dm.className} leading-normal`}
        >
          Pasien / Detail Pasien
        </p>
        <div className="inline-flex justify-between w-full items-center">
          <h1
            className={`text-neutral-800 text-3xl font-bold ${jakarta.className} text-left leading-10`}
          >
            Detail Pasien
          </h1>
          {/* <button
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
          </button> */}
        </div>
        <div className="mt-[20px] flex flex-1 w-full flex-row">
          <div className="space-y-4">
            <div className="bg-sky-700 bg-opacity-95 rounded-xl border-2 border-white py-6 px-4 w-64">
              <h1
                className={`text-center text-white text-xl font-bold ${dm.className} leading-loose`}
              >
                Nadia Omara
              </h1>
            </div>
            <div className="px-4 py-6 w-64 bg-white space-y-4">
              <h1
                className={`text-slate-900 text-base font-bold ${jakarta.className} leading-loose`}
              >
                Data Pasien
              </h1>
              <div className="flex flex-col space-y-2">
                <PatientItemDetail
                  title="Tanggal Lahir"
                  subtitle="01/10/2023"
                />
                <PatientItemDetail
                  title="Usia"
                  subtitle="26 tahun"
                />
                <PatientItemDetail
                  title="No. Telepon"
                  subtitle="+6251473849"
                />
                <PatientItemDetail
                  title="Alamat"
                  subtitle="Jl. Margaasih 123 depok Jawa Barat"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </main>
      <dialog id="my_modal_2" className="modal">
        {/* <AddNewPatient /> */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
