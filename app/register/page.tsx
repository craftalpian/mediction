"use client";

import React, { useState } from "react";
import { dm, inter, jakarta } from "../_utils/fonts";
import InputForm from "../_components/input-form";
import Button from "../_atoms/button";
import MedictionLogo from "../../public/Mediction.png";
import Image from "next/image";
import HospitalAccount from "./_components/hospital-account";
import HospitalInfo from "./_components/hospital-info";
import HospitalResponsibility from "./_components/hospital-responsibility";
import Success from "./_components/success";

const StepButton = ({
  onPrevious,
  onNext,
}: {
  onPrevious: any;
  onNext: any;
}) => {
  return (
    <div className="inline-flex space-x-4">
      <Button onClick={onPrevious} stroke title="Sebelumnya" />
      <Button onClick={onNext} title="Selanjutnya" />
    </div>
  );
};

export default function Register() {
  const [step, setStep] = useState(0);
  return (
    <>
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
          {step == 0 && <HospitalAccount />}
          {step == 1 && <HospitalInfo />}
          {step == 2 && <HospitalResponsibility />}
          <div className="flex flex-col justify-center">
            <StepButton
              onPrevious={() => setStep(step - 1)}
              onNext={() => setStep(step + 1)}
            />
            <div className="inline-flex justify-center items-center mt-4">
              <p className={`${dm.className} font-normal text-[#64748B]`}>
                Sudah punya akun?
              </p>
              <p className={`text-[#3C8FE5] font-bold ml-1`}>Masuk</p>
            </div>
          </div>
        </div>
        <button
          className="btn"
          onClick={() => {
            if (document) {
              (document.getElementById("my_modal_2") as any).showModal();
            }
          }}
        >
          open modal
        </button>
      </main>
      <dialog id="my_modal_2" className="modal">
        <Success />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
