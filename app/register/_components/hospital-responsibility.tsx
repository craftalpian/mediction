import InputForm, { Title } from "@/app/_components/input-form";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import React from "react";

export default function HospitalResponsibility() {
  return (
    <div className="space-y-6">
      <h1
        className={`text-slate-900 text-lg font-bold leading-relaxed ${jakarta.className}`}
      >
        Informasi Penanggungjawab
      </h1>
      <InputForm
        name="hospital_responsibility"
        placeholder="Tulis nama penanggungjawab"
        required
        title="Nama Penanggungjawab"
        type="text"
      />
      <InputForm
        name="role"
        placeholder="Cth : Administrator"
        required
        title="Jabatan"
        type="text"
      />
      <InputForm
        name="phone_number"
        placeholder="Cth : +6217364xxxx"
        required
        title="Nomor Telepon"
        type="text"
      />
    </div>
  );
}
