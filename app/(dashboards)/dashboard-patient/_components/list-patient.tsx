import { dm } from "@/app/_utils/fonts";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function ListPatient() {
  return (
    <div className="overflow-x-auto">
      <table className="table border border-gray-300 table-auto">
        <thead
          className={`bg-[#EBF0F4] py-4 leading-snug text-neutral-950 text-sm font-bold ${dm.className}`}
        >
          <tr>
            <th></th>
            <th>ID Pasien</th>
            <th>Jenis Kelamin</th>
            <th className="min-w-10">Tanggal Lahir</th>
            <th>Nomor Telepon</th>
            <th>Alamat</th>
            <th>Fasilitas Kesehatan</th>
            <th>Nama Wali</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="inline-flex">
              <h1
                className={`text-slate-900 text-sm font-bold ${dm.className} leading-snug`}
              >
                Nadia Omara
              </h1>
            </th>
            <td>
              <a
                href="#"
                className={`text-sky-900 text-sm font-medium ${dm.className} leading-snug`}
              >
                #56HGF
              </a>
            </td>
            <td className="items-center justify-center flex">
              <div className="px-2 py-1 bg-sky-600 bg-opacity-10 rounded-md justify-center items-center gap-2.5 inline-flex">
                <h1
                  className={`text-sky-900 text-xs font-medium ${dm.className} leading-tight`}
                >
                  Laki-laki
                </h1>
              </div>
            </td>
            <td>
              <div className="inline-flex space-x-3 text-[#A9B4CD] text-base items-center">
                <MdCalendarMonth />
                <p
                  className={`text-slate-900 text-sm font-normal ${dm.className} leading-snug`}
                >
                  20 Januari 2002
                </p>
              </div>
            </td>
            <td>
              <p
                className={`text-slate-900 text-sm font-normal ${dm.className} leading-snug`}
              >
                +62548575859
              </p>
            </td>
            <td>
              <p
                className={`text-slate-900 text-sm font-normal ${dm.className} leading-snug`}
              >
                Jl. Margaasih no.35 Kecamat....
              </p>
            </td>
            <td>
              <p
                className={`text-slate-900 text-sm font-normal ${dm.className} leading-snug`}
              >
                Mandiri
              </p>
            </td>
            <td>
              <p
                className={`text-sky-800 text-sm font-normal ${dm.className} leading-snug`}
              >
                Ibunya Nadia
              </p>
            </td>
            <td>
              <div className="inline-flex gap-x-4">
                <button className="p-3 bg-sky-900 rounded-lg justify-center items-center gap-2 inline-flex">
                  <p
                    className={`text-white text-xs font-bold ${dm.className} leading-tight`}
                  >
                    Lihat Detail
                  </p>
                </button>
                <button className="p-3.5 rounded-lg border border-sky-800 justify-center items-center gap-1 inline-flex">
                  <div className="py-0.5 justify-center items-center flex">
                    <HiOutlineDotsVertical />
                  </div>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
