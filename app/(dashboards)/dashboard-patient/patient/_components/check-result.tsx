import InputForm, { Title } from "@/app/_components/input-form";
import { dm, inter } from "@/app/_utils/fonts";
import React from "react";

export default function CheckResult() {
  return (
    <>
      <h1 className="text-slate-900 text-lg font-extrabold font-['Plus Jakarta Sans'] leading-relaxed">
        Hasil Pemeriksaan
      </h1>
      <div className="w-full grid grid-cols-2 gap-x-6 justify-between">
        <InputForm
          name="tensi"
          placeholder="Tuliskan hasil pengukuran tensi"
          required
          title="Tensi"
          type="text"
        />
        <InputForm
          name="tensi"
          placeholder="Tuliskan berat badan pasien"
          required
          title="Berat Badan"
          type="text"
        />
      </div>
      <InputForm
          name="diagnose"
          placeholder="Tuliskan diagnosa setelah diperiksan"
          required
          title="Diagnosa Pemeriksaan"
          type="text"
        />
      <div className="flex flex-col space-y-2">
        <Title required={false} title="Penjelasan" />
        <div className="w-full flex flex-col">
          <textarea
            placeholder="Cth : vertigo adalah gangguan fokus terhadapa...."
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
      {/* TODO: tambahkan form upload image */}
    </>
  );
}
