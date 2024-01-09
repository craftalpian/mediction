import React from "react";
import MedictionLogo from "../../public/Mediction.png";
import Image from "next/image";
import { BiCategoryAlt } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { jakarta } from "../_utils/fonts";

const Menu = () => {
  return <></>;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row flex-1 bg-[#F7FBFE]">
      <div className="pt-[32px] bg-white">
        <Image src={MedictionLogo} alt="Logo" className="pl-[24px] pr-[46px] w-[194px]" />
        <div className="my-[32px] border-b" />
        <div className="inline-flex text-[#003778] items-center space-x-4 text-xl pl-[24px] bg-[#E6F7FD] w-full py-4 border-r-sky-800 border-r-4">
          <BiSolidCategoryAlt />
          <h2
            className={`text-sky-900 text-base font-bold ${jakarta.className} leading-relaxed`}
          >
            K
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
}
