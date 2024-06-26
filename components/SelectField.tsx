"use client";
import React, { FC, useEffect, useState } from "react";
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
	options: {text: string, value: string}[],
	name: string,
	id: string,
  className?: string
}

const SelectField: FC<IProps> = ({name, id, options, className}) => {
  return (
		<select name={name} id={id} className={
			twMerge("w-full rounded-[51px] font-medium outline-none border-[#EBEBEB] border py-2 px-2", className)
			}>
			{
				options.map(function(item) {
					return <option value={item.value}>{item.text}</option>
				})
			}
		</select>
    // <input type="text" className="rounded-xl py-2 px-2 w-full outline-none bg-[#F7F7F7]" placeholder={placeholder}></input>
  );
};

export default SelectField;
