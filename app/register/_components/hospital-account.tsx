import InputForm from "@/app/_components/input-form";
import { jakarta } from "@/app/_utils/fonts";
import React from "react";

export default function HospitalAccount() {
  return (
    <div className="space-y-6">
      <h1
        className={`text-slate-900 text-lg font-bold leading-relaxed ${jakarta.className}`}
      >
        Akun Rumah Sakit
      </h1>
      <InputForm
        name="hospital_id"
        placeholder="Tulis ID rumah sakit yang diberikan, #HGY65"
        required
        title="ID Rumah Sakit"
        type="text"
      />
      <InputForm
        name="email"
        placeholder="Tulis email rumah sakit"
        required
        title="Email Rumah Sakit"
        type="text"
      />
      <InputForm
        name="password"
        placeholder="Tulis kata sandi anda"
        required
        title="Kata Sandi"
        type="password"
      />
      <InputForm
        name="password_confirmation"
        placeholder="Tulis ulang kata sandi anda"
        required
        title="Ulangi Kata sandi"
        type="password"
      />
    </div>
  );
}
