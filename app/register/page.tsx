import React from "react";
import { dm, inter, jakarta } from "../_utils/fonts";
import InputForm from "../_components/input-form";
import Button from "../_atoms/button";
import MedictionLogo from "../../public/Mediction.png";
import Image from "next/image";
import HospitalAccount from "./_components/hospital-account";
import HospitalInfo from "./_components/hospital-info";

const StepButton = () => {
  return (
    <div className="inline-flex space-x-4">
      <Button disable title="Sebelumnya" />
      <Button title="Selanjutnya" />
    </div>
  );
};

export default function Register() {
  return (
    <main className="m-auto justify-center items-center py-10 flex flex-1 flex-col mx-4">
      <div className="space-y-[40px]">
        <div>
          <Image
            src={MedictionLogo}
            alt="Logo Mediction"
            className="mb-8 mx-auto"
          />
          <h1
            className={`text-[#090914] ${dm.className} font-bold text-center text-2xl`}
          >
            Selamat datang!
          </h1>
          <p
            className={`mt-1 text-[#52525B] ${dm.className} font-normal text-base`}
          >
            Daftarkan akun rumah sakit dan admin kamu untuk mengakses
          </p>
        </div>
        {/* Progres barnya belom */}
        {/* <HospitalAccount /> */}
        <HospitalInfo />
        <div className="flex flex-col justify-center">
          <StepButton />
          <div className="inline-flex justify-center items-center mt-4">
            <p className={`${dm.className} font-normal text-[#64748B]`}>
              Sudah punya akun?
            </p>
            <p className={`text-[#3C8FE5] font-bold ml-1`}>Masuk</p>
          </div>
        </div>
      </div>
    </main>
  );
}
