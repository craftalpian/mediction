import InputForm, { Title } from "@/app/_components/input-form";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import React from "react";

export default function HospitalInfo() {
  return (
    <div className="space-y-6">
      <h1
        className={`text-slate-900 text-lg font-bold leading-relaxed ${jakarta.className}`}
      >
        Informasi Rumah Sakit
      </h1>
      <InputForm
        name="hospital_name"
        placeholder="Tulis nama rumah sakit"
        required
        title="Nama Rumah Sakit"
        type="text"
      />
      <div className="flex flex-col space-y-2">
        <Title required={false} title="Kategori Rumah Sakit" />
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
      <InputForm
        name="phone_number"
        placeholder="Cth : +6217364xxxx"
        required
        title="Nomor Telepon"
        type="text"
      />
      <div className="flex flex-col space-y-2">
        <Title required={false} title="Alamat" />
        <div className="w-full flex flex-col">
          <textarea
            placeholder="Cth : Jl. Margaasih no.35 Kecamatan Bojongsoang, Kab. Bandung"
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
  );
}
