import Button from "@/app/_atoms/button";
import InputForm, { Title } from "@/app/_components/input-form";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import React from "react";
import { IoMdClose } from "react-icons/io";
import MedicalReport from "../../../../../public/medical-report.svg";
import Image from "next/image";

const PeopleCard = () => (
  <div className="col-span-1 space-y-3">
    <p
      className={`text-slate-400 text-sm font-medium ${jakarta.className} leading-tight`}
    >
      Pasien
    </p>
    <div className="inline-flex space-x-2 justify-center">
      <div className="h-[56px] w-[56px] bg-[#EFF3FA] flex rounded-2xl justify-center items-center">
        <h1
          className={`text-center text-black text-base font-semibold ${jakarta.className} leading-7`}
        >
          NA
        </h1>
      </div>
      <div className="flex flex-col">
        <h1
          className={`text-slate-900 text-lg font-medium ${dm.className} leading-loose`}
        >
          Nadia Omara
        </h1>
        <h3
          className={`text-blue-500 text-xs font-semibold ${jakarta.className} leading-normal`}
        >
          #674HY
        </h3>
      </div>
    </div>
  </div>
);

const MedicineItem = () => (
  <div className="grid grid-flow-col items-center">
    <div
      className={`col-span-1 text-slate-500 text-xs font-normal ${dm.className} leading-normal`}
    >
      Konsumsi
    </div>
    <div className="col-span-12">
      <span
        className={`text-slate-500 text-xs font-normal ${dm.className} leading-normal`}
      >
        :{" "}
      </span>
      <span
        className={`text-blue-950 text-xs font-normal ${dm.className} leading-normal`}
      >
        3 X 1.0 tablet perhari - Sehabis Makan
      </span>
    </div>
  </div>
);

const MedicineCard = () => (
  <div className="py-3 first:pt-0 last:pb-0">
    <div className="inline-flex justify-between w-full items-center">
      <h1
        className={`text-slate-900 text-sm font-medium ${dm.className} leading-normal`}
      >
        Sanmol Forte
      </h1>
      <div className="px-1.5 py-0.5 bg-orange-100 rounded-md justify-center items-center gap-2.5 inline-flex">
        <h2
          className={`text-red-500 text-xs font-medium ${dm.className} leading-tight`}
        >
          4 Tablet
        </h2>
      </div>
    </div>
    <MedicineItem />
    <MedicineItem />
  </div>
);

export default function RecordMain() {
  return (
    <div className="modal-box bg-white w-11/12 p-0 max-w-5xl pb-10">
      <div className="flex flex-col">
        <div className="w-full justify-between items-center inline-flex pt-10 border-b border-b-slate-200 pb-[26px]">
          <div className="space-x-[18px] inline-flex items-center pl-10">
            <Image src={MedicalReport} alt="" />
            <p
              className={`text-slate-900 text-xl font-extrabold ${jakarta.className} leading-7`}
            >
              Detail Pemeriksaan
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
        <div className="flex flex-col space-y-6 flex-1 px-10 pt-6">
          <h1 className="text-slate-900 text-lg font-extrabold font-['Plus Jakarta Sans'] leading-relaxed">
            Data Dokter & Pasien
          </h1>
          <div className="flex flex-col space-y-2">
            <Title required={true} title="Kategori Rumah Sakit" />
            <div className="w-full flex flex-col">
              <select className="select select-bordered w-full placeholder:text-[#afb1b2] text-[#353738] bg-gray-50 ${inter.className} placeholder:${inter.className} text-sm font-normal border border-[#D8DCDF]">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Title required={true} title="Nama Pasien" />
            <div className="w-full flex flex-col">
              <select className="select select-bordered w-full placeholder:text-[#afb1b2] text-[#353738] bg-gray-50 ${inter.className} placeholder:${inter.className} text-sm font-normal border border-[#D8DCDF]">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Title required={false} title="Keluhan & Gejala" />
            <div className="w-full flex flex-col">
              <textarea
                placeholder="Tuliskan gejala yang dialami pasien"
                className={`p-[14px] placeholder:text-[#afb1b2] text-[#353738] bg-gray-50 ${inter.className} placeholder:${inter.className} text-sm font-normal outline-none border border-[#D8DCDF] rounded-md`}
                rows={3}
              ></textarea>
              <p
                className={`text-neutral-500 text-xs font-normal ${dm.className} mt-2 leading-tight text-right`}
              >
                0/250
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t mx-10 inline-flex justify-between">
          <button
            onClick={() => {}}
            className="text-white items-center bg-sky-900 py-[14px] px-[28px] rounded-lg "
          >
            <h1 className={`text-sm font-bold ${inter.className} leading-snug`}>
              Sebelumnya
            </h1>
          </button>
          <button
            onClick={() => {}}
            className="text-white items-center bg-sky-900 py-[14px] px-[28px] rounded-lg "
          >
            <h1 className={`text-sm font-bold ${inter.className} leading-snug`}>
              Selanjutnya
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
