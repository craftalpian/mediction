import React from "react";
import Input, { InputInterface } from "../_atoms/input";
import { inter } from "../_utils/fonts";

interface InputFormInterface extends InputInterface {
  title: string;
  required: boolean;
}

export const Title = ({
  title,
  required,
}: {
  title: string;
  required: boolean;
}) => (
  <div className="inline-flex">
    <p
      className={`text-left text-[#0A0A0A] ${inter.className} text-sm font-medium`}
    >
      {title}
    </p>
    {required && (
      <p
        className={`text-left text-[#E94B3D] ${inter.className} text-sm font-medium`}
      >
        *
      </p>
    )}
  </div>
);

export default function InputForm({
  title,
  name,
  placeholder,
  //   register,
  type,
  required,
}: InputFormInterface) {
  return (
    <div className="flex flex-col space-y-2">
      <Title required={required} title={title} />
      <Input
        name={name}
        placeholder={placeholder}
        // register={register}
        type={type}
      />
    </div>
  );
}
