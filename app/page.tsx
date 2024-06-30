"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import blur1 from "@/app/assets/home_page_blur_1.png";
import blur2 from "@/app/assets/home_page_blur_2.png";

export default function Home() {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center px-4 py-8 sm:px-10 lg:px-56"
      // className="flex w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-border bg-blue/5 p-10 text-2xl font-semibold"
    >
      <Image
        className="absolute left-16 top-4"
        src={blur1}
        alt="Blur"
        height={400}
      />
      <Image
        className="absolute right-16"
        src={blur2}
        alt="Blur"
        height={400}
      />
      <h1 className="text-center text-6xl font-semibold">
        Start using BasePay for <span className="text-[#3B72FF]">Crypto</span>{" "}
        payments.
      </h1>
      <br /> <br />
      <p className="text-center font-medium">
        BasePay is a groundbreaking payment gateway that revolutionizes the way
        you handle transactions with cryptocurrencies. It seamlessly connects
        the tried-and-true world of traditional finance with the dynamic,
        ever-evolving realm of digital currencies.
      </p>
      <Link href="/hackathon-payment">
        <Button className="mt-16 w-96">Connect wallet</Button>
      </Link>
      <br />
      <small className="w-96 text-center font-medium">
        Don&apos;t have a wallet yet? We&apos;ll create one for you on BasePay.
      </small>
      <small className="w-96 text-center font-medium">
        <Link
          href="/hackathon-payment"
          className="font-bold text-[#3B72FF] underline"
        >
          Click here
        </Link>
        to create a new one.
      </small>
    </div>
  );
}
