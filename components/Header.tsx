"use client";
import React, { FC } from "react";
import logo from "@/app/assets/logo.png";
import menu from "@/app/assets/menu.svg";
import profilePic from "@/app/assets/profile-pic.svg";
import arrowDown from "@/app/assets/arrow-down.svg";
import arrowUp from "@/app/assets/arrow-up.svg";
import Image from "next/image";
import Link from "next/link";
import DisconnectModal from "./DisconnectModal";

interface IProps {}

const Header: FC<IProps> = () => {
  return (
    <header className="sticky top-0 z-50 mx-[2%] mb-8 flex w-[96%] items-center justify-center border-b-2 bg-white/80 px-6 py-4 backdrop-blur-[3px]">
      <Link href="/">
        <Image src={logo} alt="logo" width={150} height={40} />
      </Link>
      {/* <span className="absolute left-0 top-16 my-4 flex h-[2px] w-full bg-border" /> */}
    </header>
  );
};

export default Header;
