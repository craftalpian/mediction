import { dm, jakarta } from "@/app/_utils/fonts";
import React from "react";
import { IoMdClose } from "react-icons/io";
import DetailModal from "../../../../../public/medical-file.svg";
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
        <h2 className={`text-red-500 text-xs font-medium ${dm.className} leading-tight`}>
          4 Tablet
        </h2>
      </div>
    </div>
    <MedicineItem />
    <MedicineItem />
  </div>
);

export default function CheckDetail() {
  return (
    <div className="modal-box bg-white w-11/12 p-0 max-w-5xl pb-10">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full justify-between items-center inline-flex pt-10 border-b border-b-slate-200 pb-[26px]">
          <div className="space-x-[18px] inline-flex items-center pl-10">
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
          <div className="pt-4 pr-4">
            <form method="dialog">
              <button className="text-4xl">
                <IoMdClose />
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full px-10 mt-6">
          <PeopleCard />
          <PeopleCard />
        </div>
        <div className="mt-6 px-10 w-full">
          <h1
            className={`text-left text-slate-900 text-sm font-bold ${jakarta.className} leading-tight`}
          >
            Keluhan & Gejala
          </h1>
          <p
            className={`text-slate-500 text-sm font-normal ${dm.className} leading-tight`}
          >
            Pusing, lemas, pandangan gelap, lunglai tak berdaya. Pusing, lemas,
            pandangan gelap, lunglai tak berdaya.
          </p>
          <div className="bg-[#F8FCFE] p-4 rounded-xl mt-6 border border-[#2798CC]">
            <h2
              className={`text-slate-400 text-xs font-medium ${jakarta.className} leading-none`}
            >
              Diagnosa
            </h2>
            <h1
              className={`text-slate-900 text-lg font-bold ${dm.className} leading-loose mt-2`}
            >
              Vertigo Akut
            </h1>
            <div className="border-slate-100 border-b-2 my-4" />
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-1 space-y-2">
                <h2
                  className={`text-slate-400 text-xs font-medium ${jakarta.className} leading-none`}
                >
                  Tindakan
                </h2>
                <h1
                  className={`text-slate-900 text-base font-medium ${dm.className} leading-loose`}
                >
                  Checkup
                </h1>
              </div>
              <div className="col-span-1 space-y-2">
                <h2
                  className={`text-slate-400 text-xs font-medium ${jakarta.className} leading-none`}
                >
                  Tindak Lanjut
                </h2>
                <h1
                  className={`text-slate-900 text-base font-medium ${dm.className} leading-loose`}
                >
                  Rawat Jalan
                </h1>
              </div>
              <div className="col-span-1 space-y-2">
                <h2
                  className={`text-slate-400 text-xs font-medium ${jakarta.className} leading-none`}
                >
                  File Pemeriksaan
                </h2>
                <h1
                  className={`text-slate-900 text-base font-medium ${dm.className} leading-loose`}
                >
                  Checkup
                </h1>
              </div>
            </div>
            <div className="bg-white mt-4 p-4 rounded-xl">
              <h1
                className={`text-slate-900 text-base font-bold ${jakarta.className}`}
              >
                Resep Obat
              </h1>
              <div className="divide-y mt-3">
                <MedicineCard />
                <MedicineCard />
                <MedicineCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
