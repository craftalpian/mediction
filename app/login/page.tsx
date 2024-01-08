import React from "react";
import { dm, inter } from "../_utils/fonts";
import InputForm from "../_components/input-form";
import Button from "../_atoms/button";
import MedictionLogo from "../../public/Mediction.png";
import Image from "next/image";

export default function Login() {
  return (
    <main className="m-auto justify-center items-center py-10 flex flex-1 flex-col mx-4">
      <div className="space-y-[40px]">
        <div>
          <Image src={MedictionLogo} alt="Logo Mediction" className="mb-8 mx-auto" />
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
          <div className="justify-between flex flex-row items-center">
            <div className="inline-flex space-x-2">
              <input
                type="checkbox"
                className="border border-[#94A3B8] rounded-md"
              />
              <p className={`${inter.className} text-[#18181B] font-normal`}>
                Ingat saya
              </p>
            </div>
            <p
              className={`text-[#3C8FE5] ${dm.className} font-medium text-right`}
            >
              Forgot password?
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Button title="Masuk" />
            <div className="inline-flex justify-center items-center mt-4">
              <p className={`${dm.className} font-normal text-[#64748B]`}>
                Belum punya akun?
              </p>
              <p className={`text-[#3C8FE5] font-bold ml-1`}>Daftar</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
