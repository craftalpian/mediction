"use client";

import React, { useState } from "react";
import Image from "next/image";
import { dm, inter, jakarta } from "@/app/_utils/fonts";
import { SiAddthis } from "react-icons/si";
import AddNewPatient from "./_components/add-new-patient";
import ListPatient from "./_components/list-reference";
import EmptyPatient from "./_components/empty-patient";
import { useRouter } from "next/navigation";
import { FaPaperPlane } from "react-icons/fa";
import ListReference from "./_components/list-reference";
import clsx from "clsx";
import ListReferenceSent from "./_components/list-reference-sent";
import PatientDetail from "./_components/patient-detail";

const Menu = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    className={clsx("px-4 py-3 justify-start items-center inline-flex", {
      "border-b-4 border-b-blue-500": isActive,
    })}
    onClick={onClick}
  >
    <div className="justify-start items-center gap-2 flex">
      <div
        className={clsx(
          `capitalize text-sm font-medium ${dm.className} leading-snug`,
          { "text-neutral-400": !isActive },
          { "text-blue-500": isActive }
        )}
      >
        {title}
      </div>
    </div>
  </button>
);

export default function DashboardReference() {
  const { push } = useRouter();
  const [menu, setMenu] = useState(0);

  return (
    <>
      <main className="flex flex-1 flex-col p-8 bg-slate-50">
        <div className="inline-flex justify-between w-full items-center">
          <h1
            className={`text-neutral-800 text-3xl font-bold ${jakarta.className} text-left leading-10`}
          >
            Rujukan
          </h1>
          <button
            onClick={() => {
              if (document) {
                (
                  document.getElementById("my_modal_add_new_patient") as any
                ).showModal();
              }
            }}
            className="text-white items-center bg-sky-900 py-[14px] px-[28px] rounded-lg inline-flex space-x-2"
          >
            <FaPaperPlane />
            <h1 className={`text-sm font-bold ${inter.className} leading-snug`}>
              Rujuk Pasien
            </h1>
          </button>
        </div>
        <div className="px-8 pt-8 mt-[20px] bg-white flex flex-1 w-full flex-col">
          <div className="mb-4 space-x-4 border-b border-b-[#E4E9EC] inline-flex items-center justify-center">
            <Menu
              title="Permintaan Rujukan"
              isActive={menu === 0}
              onClick={() => setMenu(0)}
            />
            <Menu
              title="Rujukan Dikirim"
              isActive={menu === 1}
              onClick={() => setMenu(1)}
            />
          </div>
          {menu === 0 ? (
            <ListReference
              onClickAccept={() => {
                if (document) {
                  (
                    document.getElementById("my_modal_accept_patient") as any
                  ).showModal();
                }
              }}
              onClickDetail={() => {
                if (document) {
                  (
                    document.getElementById("my_modal_patient_detail") as any
                  ).showModal();
                }
              }}
            />
          ) : (
            <ListReferenceSent
              onClick={() => push("/dashboard-patient/patient")}
            />
          )}
        </div>
      </main>
      <dialog id="my_modal_accept_patient" className="modal">
        <AddNewPatient />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="my_modal_patient_detail" className="modal">
        <PatientDetail />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
