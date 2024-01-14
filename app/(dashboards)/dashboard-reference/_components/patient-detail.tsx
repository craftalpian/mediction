import { dm, inter, jakarta } from "@/app/_utils/fonts";
import React from "react";
import { IoMdClose } from "react-icons/io";
import DetailModal from "../../../../public/medical-file.svg";
import Siloam from "../../../../public/siloam.svg";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Avatar from "react-avatar";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function PatientDetail() {
  return (
    <div className="modal-box bg-white px-6 max-w-2xl">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full justify-between items-center inline-flex pt-10 border-b border-b-slate-200 pb-[26px]">
          <div className="space-x-[18px] inline-flex items-center pl-10">
            <Image src={DetailModal} alt="" />
            <p>
              <span
                className={`text-slate-900 text-xl font-extrabold ${jakarta.className} leading-7`}
              >
                Detail Pasien
              </span>
            </p>
          </div>
          <div className="pt-4 pr-4">
            <form method="dialog">
              <button className="text-4xl">
                <IoMdClose />
              </button>
            </form>
          </div>
        </div>
        <div className="w-full px-10 mt-10">
          <div className="collapse bg-sky-700 bg-opacity-95">
            <input type="checkbox" />
            <div className="collapse-title">
              <div className="w-full inline-flex items-center justify-between">
                <div className="inline-flex gap-x-3 items-center">
                  <Avatar size="40" round />
                  <div className="flex flex-col">
                    <h1
                      className={`text-white text-base font-bold ${dm.className} leading-loose`}
                    >
                      Nadia Omara
                    </h1>
                    <div className="grid grid-flow-col gap-x-2">
                      <div
                        className={`text-slate-100 text-xs font-semibold ${jakarta.className} leading-normal`}
                      >
                        #674HY
                      </div>
                      <div
                        className={`text-slate-100 text-xs font-semibold ${jakarta.className} leading-normal`}
                      >
                        BPJS #575857
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white text-4xl -mr-4">
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <div className="w-full grid grid-cols-2 gap-x-6 divide-x">
                <div className="col-span-1 grid gap-y-1">
                  <div className="grid grid-cols-2">
                    <h1
                      className={`col-span-1 text-slate-200 text-xs font-normal ${dm.className} leading-normal`}
                    >
                      Tanggal Lahir
                    </h1>
                    <h1
                      className={`col-span-1 text-right text-white text-xs font-medium ${dm.className} leading-normal`}
                    >
                      01/10/2023
                    </h1>
                  </div>
                  <div className="grid grid-cols-2">
                    <h1
                      className={`col-span-1 text-slate-200 text-xs font-normal ${dm.className} leading-normal`}
                    >
                      Usia
                    </h1>
                    <h1
                      className={`col-span-1 text-right text-white text-xs font-medium ${dm.className} leading-normal`}
                    >
                      26 tahun
                    </h1>
                  </div>
                  <div className="grid grid-cols-2">
                    <h1
                      className={`col-span-1 text-slate-200 text-xs font-normal ${dm.className} leading-normal`}
                    >
                      No. Telepon
                    </h1>
                    <h1
                      className={`col-span-1 text-right text-white text-xs font-medium ${dm.className} leading-normal`}
                    >
                      +6251473849
                    </h1>
                  </div>
                  <div className="grid grid-cols-2">
                    <h1
                      className={`col-span-1 text-slate-200 text-xs font-normal ${dm.className} leading-normal`}
                    >
                      Alamat
                    </h1>
                    <h1
                      className={`col-span-1 text-right text-white text-xs font-medium ${dm.className} leading-normal`}
                    >
                      Jl. Margaasih no.35
                    </h1>
                  </div>
                </div>
                <div className="col-span-1 grid gap-y-1 pl-6">
                  <div className="grid grid-cols-2">
                    <h1
                      className={`col-span-1 text-slate-200 text-xs font-normal ${dm.className} leading-normal`}
                    >
                      Nama Wali
                    </h1>
                    <h1
                      className={`col-span-1 text-right text-white text-xs font-medium ${dm.className} leading-normal`}
                    >
                      Ibunya Nadia
                    </h1>
                  </div>
                  <div className="grid grid-cols-2">
                    <h1
                      className={`col-span-1 text-slate-200 text-xs font-normal ${dm.className} leading-normal`}
                    >
                      Status
                    </h1>
                    <h1
                      className={`col-span-1 text-right text-white text-xs font-medium ${dm.className} leading-normal`}
                    >
                      Ibu Kandung
                    </h1>
                  </div>
                  <div className="grid grid-cols-2">
                    <h1
                      className={`col-span-1 text-slate-200 text-xs font-normal ${dm.className} leading-normal`}
                    >
                      No. Telepon
                    </h1>
                    <h1
                      className={`col-span-1 text-right text-white text-xs font-medium ${dm.className} leading-normal`}
                    >
                      +6251473849
                    </h1>
                  </div>
                  <div className="grid grid-cols-2">
                    <h1
                      className={`col-span-1 text-slate-200 text-xs font-normal ${dm.className} leading-normal`}
                    >
                      Alamat
                    </h1>
                    <h1
                      className={`col-span-1 text-right text-white text-xs font-medium ${dm.className} leading-normal`}
                    >
                      Jl. Margaasih no.35
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col flex-1 rounded-2xl px-10 py-7">
          <div className="inline-flex justify-between w-full">
            <h1
              className={`text-slate-900 text-lg font-bold ${jakarta.className} leading-loose`}
            >
              Riwayat Pemeriksaan
            </h1>
          </div>
          <div className="grid grid-flow-row pt-6">
            <div className="inline-flex space-x-4">
              <div className="items-center flex flex-col -mb-4">
                <div className="w-4 h-4 bg-white rounded-full border-4 border-sky-900 my-1"></div>
                <div className="h-full border-r border-dashed" />
              </div>
              <div className="flex flex-1 flex-col w-full space-y-3">
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
                  <div className="mt-4 grid grid-cols-5">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 border-b border-b-slate-200" />
      <div className="flex w-full px-[20px] justify-end">
        <button className="px-7 text-white py-3.5 bg-[#003778] rounded-lg justify-center items-center gap-x-2 inline-flex">
          <FaCheckCircle />
          <h1 className={`text-sm font-bold ${inter.className} leading-snug`}>
            Terima
          </h1>
        </button>
      </div>
    </div>
  );
}
