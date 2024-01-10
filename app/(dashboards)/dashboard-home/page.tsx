import React from "react";
import Image from "next/image";
import { dm, jakarta } from "@/app/_utils/fonts";
import TodayPatient from "../../../public/today-patient.svg";
import MedicalReport from "../../../public/medical-report.svg";
import TotalPatient from "../../../public/total-patient.svg";
import TotalDoctor from "../../../public/total-doctor.svg";
import Empty from "../../../public/empty.svg";

const Cardboard = ({
  image,
  title,
  value,
  description = "",
}: {
  image: any;
  title: string;
  value: string | number;
  description?: string;
}) => (
  <div className="p-4 rounded-xl bg-white inline-flex items-center space-x-[18px]">
    <Image src={image} alt="" />
    <div className="flex flex-col space-y-1 justify-center">
      <h2
        className={`text-slate-400 capitalize text-sm font-medium ${jakarta.className} leading-normal`}
      >
        {title}
      </h2>
      <div className="inline-flex space-x-1 items-center leading-normal">
        <div className={`text-indigo-900 text-2xl font-bold ${dm.className}`}>
          {value}
        </div>
        <div
          className={`text-slate-400 text-sm font-medium ${jakarta.className}`}
        >
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default function Login() {
  return (
    <main className="flex flex-1 flex-col p-8 bg-slate-50">
      <h1
        className={`text-neutral-800 text-3xl font-bold ${jakarta.className} text-left leading-10`}
      >
        Hallo Admin RS Budi Asih!
      </h1>
      <div className="mt-[32px] space-x-[20px]">
        <Cardboard
          image={TodayPatient}
          title="Pasien Hari Ini"
          value={456}
          description="pasien"
        />
        <Cardboard
          image={MedicalReport}
          title="Diproses"
          value={120}
          description="pasien"
        />
        <Cardboard image={TotalPatient} title="Total Pasien" value={456} />
        <Cardboard image={TotalDoctor} title="Jumlah Dokter" value={456} />
      </div>
      <div className="mt-[20px] bg-white flex flex-1 w-full flex-col justify-center">
        <Image src={Empty} alt="" className="self-center" />
        <h1
          className={`text-center mt-[16px] text-neutral-950 text-xl font-bold ${jakarta.className} leading-loose`}
        >
          Belum ada data yang bisa ditampilkan!
        </h1>
        <p
          className={`text-center text-neutral-500 text-sm font-normal ${dm.className} leading-snug mt-2`}
        >
          Tambahkan data pasien dan riwayat pemeriksaan pasien pada menu Pasien
        </p>
      </div>
    </main>
  );
}
