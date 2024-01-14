import Image from "next/image";
import React from "react";
import Empty from "../../../../public/empty.svg";
import { dm, jakarta } from "@/app/_utils/fonts";

export default function EmptyPatient() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <Image src={Empty} alt="" />
      <h1
        className={`text-center mt-[16px] text-neutral-950 text-xl font-bold ${jakarta.className} leading-loose`}
      >
        Belum ada pasien yang ditambahkan!
      </h1>
      <p
        className={`text-center text-neutral-500 text-sm font-normal ${dm.className} leading-snug mt-2`}
      >
        Tambahkan data pasien untuk penyimpanan data dan history berobat! Klik
        button “Tambah Pasien” di atas kanan halaman ini
      </p>
    </div>
  );
}
