import React from "react";
import MedictionLogo from "../../public/Mediction.png";
import Image from "next/image";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { jakarta } from "../_utils/fonts";
import clsx from "clsx";
import { HiUsers } from "react-icons/hi2";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";

const Menu = ({
  active = false,
  icon,
  title,
}: {
  active?: boolean;
  icon: any;
  title: string;
}) => {
  return (
    <button
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
    </button>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row flex-1 bg-[#F7FBFE]">
      <div className="pt-[32px] bg-white max-w-[224px]">
        <Image
          src={MedictionLogo}
          alt="Logo"
          className="pl-[24px] pr-[46px] w-[194px]"
        />
        <div className="my-[32px] border-b" />
        <Menu active icon={<BiSolidCategoryAlt />} title="K" />
        <Menu icon={<HiUsers />} title="Pasien" />
        <Menu icon={<AiFillMedicineBox />} title="Dokter" />
        <Menu icon={<FaCloudUploadAlt />} title="Rujukan" />
      </div>
      {children}
    </div>
  );
}
