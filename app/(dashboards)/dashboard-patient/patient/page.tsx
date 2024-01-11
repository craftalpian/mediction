"use client";

import React from "react";
import Image from "next/image";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import { SiAddthis } from "react-icons/si";
import { MdRemoveRedEye } from "react-icons/md";

const PatientItemDetail = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="justify-between inline-flex w-full space-x-12">
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
        <div className="mt-[20px] flex flex-1 w-full flex-row space-x-4">
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
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <PatientItemDetail
                    title="Tanggal Lahir"
                    subtitle="01/10/2023"
                  />
                  <PatientItemDetail title="Usia" subtitle="26 tahun" />
                  <PatientItemDetail
                    title="No. Telepon"
                    subtitle="+6251473849"
                  />
                  <PatientItemDetail
                    title="Alamat"
                    subtitle="Jl. Margaasih 123 depok Jawa Barat"
                  />
                </div>
                <div className="border-b border-b-[#EFF3FA]" />
                <div className="flex flex-col space-y-2">
                  <PatientItemDetail
                    title="Nama Wali"
                    subtitle="Ibunya Nadia"
                  />
                  <PatientItemDetail title="Status" subtitle="Ibu Kandung" />
                  <PatientItemDetail
                    title="No. Telepon"
                    subtitle="+6251473849"
                  />
                  <PatientItemDetail
                    title="Alamat"
                    subtitle="Jl. Margaasih 123 depok Jawa Barat"
                  />
                </div>
                <div className="border-b border-b-[#EFF3FA]" />
                <div className="flex flex-col space-y-2">
                  <PatientItemDetail title="Jenis Faskes" subtitle="BPJS" />
                  <PatientItemDetail title="ID" subtitle="#575857" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col flex-1 rounded-2xl px-6 py-7">
            <div className="inline-flex justify-between w-full">
              <h1
                className={`text-slate-900 text-lg font-bold ${jakarta.className} leading-loose`}
              >
                Riwayat Pemeriksaan
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
                <h1
                  className={`text-sm font-bold ${inter.className} leading-snug`}
                >
                  Tambah Pasien
                </h1>
              </button>
            </div>
            <div>
              <div className="flex flex-1 flex-col w-full space-y-3 mt-6">
                <h1
                  className={`text-slate-900 text-sm font-normal ${dm.className} leading-normal`}
                >
                  23 September 2023
                </h1>
                <div className="bg-neutral-50 w-full flex flex-col flex-1 p-4 rounded-xl">
                  <div className="space-y-1 border-b pb-4 w-full">
                    <h1
                      className={`text-slate-900 text-sm font-bold ${jakarta.className} leading-loose`}
                    >
                      Pemeriksaan Diabetes
                    </h1>
                    <p
                      className={`text-zinc-400 text-xs font-normal ${dm.className} leading-relaxed max-w-xl`}
                    >
                      Blood sugar management is especially important for people
                      with diabtes, as chronically high blood sugar levels can
                      lead
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-6">
                    <div className="grid col-span-1 space-y-1">
                      <h2
                        className={`text-slate-500 text-xs font-normal ${dm.className} leading-normal`}
                      >
                        Tindakan
                      </h2>
                      <p
                        className={`text-slate-900 text-sm font-medium ${dm.className} leading-normal`}
                      >
                        Check-Up
                      </p>
                    </div>
                    <div className="grid col-span-1 space-y-1">
                      <h2
                        className={`text-slate-500 text-xs font-normal ${dm.className} leading-normal`}
                      >
                        Durasi
                      </h2>
                      <p
                        className={`text-slate-900 text-sm font-medium ${dm.className} leading-normal`}
                      >
                        3 bulan
                      </p>
                    </div>
                    <div className="grid col-span-1 space-y-1">
                      <h2
                        className={`text-slate-500 text-xs font-normal ${dm.className} leading-normal`}
                      >
                        Tindak Lanjut
                      </h2>
                      <p
                        className={`text-slate-900 text-sm font-medium ${dm.className} leading-normal`}
                      >
                        -
                      </p>
                    </div>
                    <div className="grid col-span-2 space-y-1">
                      <h2
                        className={`text-slate-500 text-xs font-normal ${dm.className} leading-normal`}
                      >
                        Dokumen Pendukung
                      </h2>
                      <p
                        className={`text-sky-700 text-sm font-medium ${dm.className} leading-normal`}
                      >
                        check-up-result.pdf
                      </p>
                    </div>
                    <div className="grid col-span-1">
                      <button className="px-6 py-3 text-sky-800 rounded-lg border border-sky-800 justify-center items-center gap-1 inline-flex">
                        <MdRemoveRedEye />
                        <p
                          className={`text-xs font-bold ${inter.className} leading-tight`}
                        >
                          Lihat Hasil
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
