import { dm } from "@/app/_utils/fonts";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Avatar from "react-avatar";

export default function ListReferenceSent({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-auto">
        <thead
          className={`bg-[#E6F7FD] border-0 py-4 leading-snug text-neutral-950 text-sm font-bold ${dm.className}`}
        >
          <tr className="border-b-[#D8DCDF]">
            <th></th>
            <th className="w-8">ID Pasien</th>
            <th>Nama Wali</th>
            <th>Diterima dari RS</th>
            <th>Catatan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-[#D8DCDF]">
            <th className="inline-flex items-center space-x-4">
              <Avatar round size="44" />
              <h1
                className={`text-slate-900 text-sm font-bold ${dm.className} leading-snug`}
              >
                Nadia Omara
              </h1>
            </th>
            <td className="w-8">
              <a
                href="#"
                className={`text-sky-900 text-sm font-medium ${dm.className} leading-snug`}
              >
                #56HGF
              </a>
            </td>
            <td>
              <p
                className={`text-sky-800 text-sm font-normal ${dm.className} leading-snug`}
              >
                Ibunya Nadia
              </p>
            </td>
            <td>
              <p
                className={`text-slate-900 text-sm font-normal ${dm.className} leading-snug`}
              >
                RS Siloam Terpadu #34HG
              </p>
            </td>
            <td>
              <p
                className={`text-slate-900 text-sm font-normal ${dm.className} leading-snug`}
              >
                Vertigo
              </p>
            </td>
            <td>
              <div className="px-2 py-1 bg-amber-100 rounded-md justify-center items-center gap-2.5 inline-flex">
                <p
                  className={`text-yellow-800 text-xs font-medium ${dm.className} leading-tight`}
                >
                  Menunggu Persetujuan
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
