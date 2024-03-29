"use client";

import React from "react";
import MedictionLogo from "../../public/Mediction.png";
import Image from "next/image";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { dm, jakarta } from "../_utils/fonts";
import clsx from "clsx";
import { HiUsers } from "react-icons/hi2";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { WiMoonWaningCrescent2 } from "react-icons/wi";
import { usePathname } from "next/navigation";

const Menu = ({
  active = false,
  icon,
  title,
  target,
}: {
  active?: boolean;
  icon: any;
  title: string;
  target: string;
}) => {
  return (
    <a
      href={target}
      className={clsx(
        `inline-flex items-center space-x-4 text-xl pl-[24px] w-full py-4`,
        {
          "text-[#003778] border-r-sky-800 border-r-4 bg-[#E6F7FD]": active,
          "text-slate-400": !active,
        }
      )}
    >
      {icon}
      <h2
        className={clsx(
          `capitalize text-base ${jakarta.className} leading-relaxed`,
          { "font-bold": active, "font-normal": !active }
        )}
      >
        {title}
      </h2>
    </a>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <div className="flex flex-row flex-1 bg-slate-50 relative">
      <div className="pt-[32px] bg-white max-w-[224px] flex flex-col justify-between sticky left-0 h-screen">
        <div>
          <Image
            src={MedictionLogo}
            alt="Logo"
            className="pl-[24px] pr-[46px] w-[194px]"
          />
          <div className="my-[32px] border-b" />
          <Menu
            active={path.includes("/dashboard-home")}
            icon={<BiSolidCategoryAlt />}
            title="Dashboard"
            target="/dashboard-home"
          />
          <Menu
            active={path.includes("/dashboard-patient")}
            icon={<HiUsers />}
            title="Pasien"
            target="/dashboard-patient"
          />
          <Menu icon={<AiFillMedicineBox />} title="Dokter" target="#" />
          <Menu
            active={path.includes("/dashboard-reference")}
            icon={<FaCloudUploadAlt />}
            title="Rujukan"
            target="/dashboard-reference"
          />
        </div>
        <div className="m-6 relative bg-gradient-to-br from-blue-500 to-sky-900 rounded-3xl flex-col justify-start items-center inline-flex">
          <button className="text-white absolute right-[12px] top-[12px]">
            <HiDotsVertical />
          </button>
          <div className="w-14 h-14 -mt-7">
            <div className="w-14 h-14 flex justify-center items-center text-white bg-gradient-to-br from-blue-500 to-sky-900 rounded-full shadow border-2 border-white">
              <div className="bg-white rotate-90 rounded-full text-sky-900 p-1">
                <WiMoonWaningCrescent2 />
              </div>
            </div>
          </div>
          <h1
            className={`text-center text-white text-base font-bold ${dm.className} leading-normal mt-[6px]`}
          >
            RS Budi Asih
          </h1>
          <p
            className={`text-center text-violet-100 text-xs font-medium mb-4 mt-[6px] ${dm.className} leading-none`}
          >
            #HGB567
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
