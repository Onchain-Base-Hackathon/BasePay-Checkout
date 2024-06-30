"use client";
import React, { FC} from "react";
import logo from "@/app/assets/logo.png";
import menu from "@/app/assets/menu.svg";
import profilePic from "@/app/assets/profile-pic.svg";
import arrowDown from "@/app/assets/arrow-down.svg";
import arrowUp from "@/app/assets/arrow-up.svg";
import Image from "next/image";
import Link from "next/link";
import DisconnectModal from "./DisconnectModal";
import { twMerge } from "tailwind-merge";

interface IProps {
	placeholder?: string,
	className?: string,
	readonly?: boolean,
	value?: string | number
}

const InputField: FC<IProps> = ({placeholder = "", className, readonly = false, value= "" }) => {

  return (
    <input type="text" value={value.toString()} readOnly={readonly} className={twMerge("rounded-[51px] font-medium py-2 px-4 w-full outline-none bg-[#F7F7F7]", className)} placeholder={placeholder}></input>
  );
};

export default InputField;
