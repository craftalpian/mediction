import React from "react";
import { dm } from "../_utils/fonts";
import MedictionLogo from "../../public/Mediction.png";
import Image from "next/image";

export default function Authenticate() {
  return (
    <main className="items-center flex flex-1 flex-col mx-4 mt-20">
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
            Authenticate
          </h1>
          <p
            className={`mt-1 text-[#52525B] ${dm.className} font-normal text-base`}
          >
            Daftarkan akun rumah sakit dan admin kamu untuk mengakses
          </p>
        </div>
      </div>
    </main>
  );
}
