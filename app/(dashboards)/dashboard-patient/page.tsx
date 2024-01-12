"use client";

import React from "react";
import Image from "next/image";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import { SiAddthis } from "react-icons/si";
import AddNewPatient from "./_components/add-new-patient";
import ListPatient from "./_components/list-patient";
import EmptyPatient from "./_components/empty-patient";

export default function DashboardPatient() {
  return (
    <>
      <main className="flex flex-1 flex-col p-8 bg-slate-50">
        <div className="inline-flex justify-between w-full items-center">
          <h1
            className={`text-neutral-800 text-3xl font-bold ${jakarta.className} text-left leading-10`}
          >
            Pasien
          </h1>
          <button
            onClick={() => {
              if (document) {
                (document.getElementById("my_modal_2") as any).showModal();
              }
            }}
            className="text-white items-center bg-sky-900 py-[14px] px-[28px] rounded-lg inline-flex space-x-2"
          >
            <SiAddthis />
            <h1 className={`text-sm font-bold ${inter.className} leading-snug`}>
              Tambah Pasien
            </h1>
          </button>
        </div>
        <div className="mt-[20px] bg-white flex flex-1 w-full flex-col">
          {true ? <ListPatient /> : <EmptyPatient />}
        </div>
      </main>
      <dialog id="my_modal_2" className="modal">
        <AddNewPatient />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
