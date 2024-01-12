"use client";

import { inter, jakarta } from "@/app/_utils/fonts";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import MedicalReport from "../../../../../public/medical-report.svg";
import Image from "next/image";
import NewRecord from "./new-record";
import CheckResult from "./check-result";

export default function RecordMain() {
  const [menu, setMenu] = useState(0);

  const changeMenu = (type: "next" | "previous") => {
    if (type === "next") {
      if (menu < 3) {
        setMenu(menu + 1);
      }
    } else {
      if (menu >= 0) {
        setMenu(menu - 1);
      }
    }
  };

  return (
    <div className="modal-box bg-white w-11/12 p-0 max-w-5xl pb-10">
      <div className="flex flex-col">
        <div className="w-full justify-between items-center inline-flex pt-10 border-b border-b-slate-200 pb-[26px]">
          <div className="space-x-[18px] inline-flex items-center pl-10">
            <Image src={MedicalReport} alt="" />
            <p
              className={`text-slate-900 text-xl font-extrabold ${jakarta.className} leading-7`}
            >
              Detail Pemeriksaan
            </p>
          </div>
          <div className="pt-4 pr-4">
            <form method="dialog">
              <button className="text-4xl">
                <IoMdClose />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col space-y-6 flex-1 px-10 pt-6">
          {menu === 0 && <NewRecord />}
          {menu === 1 && <CheckResult />}
        </div>
        <div className="mt-10 pt-6 border-t mx-10 inline-flex justify-between">
          <button
            onClick={() => changeMenu("previous")}
            className="text-white items-center bg-sky-900 py-[14px] px-[28px] rounded-lg "
          >
            <h1 className={`text-sm font-bold ${inter.className} leading-snug`}>
              Sebelumnya
            </h1>
          </button>
          <button
            onClick={() => changeMenu("next")}
            className="text-white items-center bg-sky-900 py-[14px] px-[28px] rounded-lg "
          >
            <h1 className={`text-sm font-bold ${inter.className} leading-snug`}>
              Selanjutnya
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
