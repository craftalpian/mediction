import { Title } from "@/app/_components/input-form";
import { dm, inter } from "@/app/_utils/fonts";
import React from "react";

export default function NewRecord() {
  return (
    <>
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
    </>
  );
}
