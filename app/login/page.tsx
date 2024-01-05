import React from "react";
import { dm } from "../_utils/fonts";
import InputForm from "../_components/input-form";
import { useForm } from "react-hook-form";

export default function Login() {
  return (
    <main className="m-auto justify-center items-center flex flex-1 flex-col">
      <div className="space-y-[40px]">
        <div>
          <h1
            className={`text-[#090914] ${dm.className} font-bold text-center text-2xl`}
          >
            Selamat datang!
          </h1>
          <p
            className={`mt-1 text-[#52525B] ${dm.className} font-normal text-base`}
          >
            Masuk akun rumah sakit dan admin kamu untuk mengakses
          </p>
        </div>
        <div className="space-y-6">
          <InputForm
            name="hospital_id"
            placeholder="Tulis ID rumah sakit yang diberikan, #HGY65"
            required
            title="ID Rumah Sakit"
            type="text"
          />
          <InputForm
            name="password"
            placeholder="Tulis kata sandi anda"
            required
            title="Kata Sandi"
            type="password"
          />
        </div>
      </div>
    </main>
  );
}
