"use client";
import Button from "@/components/Button";
import Image from "next/image";
import coinbaseIcon from "@/app/assets/coinbase_icon.svg";
import avatar from "@/app/assets/avatar.png";
import copyIcon from "@/app/assets/copy_icon.svg";
import arrow from "@/app/assets/arrow-up.svg";
import successfulIcon from "@/app/assets/successful_icon.svg";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { useState } from "react";
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { BrowserProvider, Contract } from "ethers";


export default function HackathonPaymentPage() {
  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const selectOptions = [{ text: 'ETH', value: 'ETH' }];

  const [stage, setStage] = useState(1);

  // const getBalance = async () => {
  //   if (!isConnected) {
  //     alert("Wallet not connected")
  //   } else {
  //     const ethersProvider = new BrowserProvider(walletProvider!);

  //     const signer = await ethersProvider.getSigner();

  //     const ETHContract = new Contract(address, abi)
  //   }
  // }

  const goToStageTwo = () => {
    if (isConnected) {
      let changeWalletIntent = confirm("Would you like to disconnect/change wallet?");
      if (changeWalletIntent) {
        open()
      } else {
        setStage(2);
      }
    } else {
      alert("Please connect your wallet");
      open();
    }
  };
  const goToStageThree = () => {
    setStage(3);
  };
  const goToStageFour = () => {
    setStage(4);
  };
  const goPreviousStage = () => {
    setStage(stage - 1);
  };

  function backButton() {
    return (
      <button
        onClick={() => {
          goPreviousStage();
        }}
        className="mb-4 flex w-[28rem] flex-row items-center justify-start gap-4"
      >
        <Image
          src={arrow}
          alt="back arrow"
          className="tr -rotate-90 scale-[1.8]"
        ></Image>
        <span className="text-xl font-semibold">Back</span>
      </button>
    );
  }

  function AlertUser(message: string = '') {
    return (
      <div className="w-[80%] absolute left-[10%] rounded-sm h-32 bg-[#dd0000] flex-row justify-center items-center">
        <p>{message}</p>
      </div>
    )
  }

  switch (stage) {
    case 1:
      return (
        <div className="relative flex w-full flex-col items-center justify-center">
          <h2 className="text-5xl font-semibold">Hackathon Payment</h2>
          <div className="anim-fade-in mt-8 w-[28rem] rounded-[40px] border border-[#EBEBEB] p-4 py-[68px]">
            <label className="mb-14 font-semibold">Description</label>
            <br />
            <InputField
              readonly={true}
              value="2024 Hackathon"
              placeholder="This is payment for this hackathon"
              className="mt-2"
            />
            <br />
            <br />
            <label className="mb-[10px] font-semibold">Amount</label>
            <div className="mt-2 flex w-full flex-row items-center gap-[8px]">
              <SelectField
                name="currencySelect"
                id="currency-select"
                className="w-[20%]"
                options={selectOptions}
              />
              <InputField
                readonly={true}
                value="0.0006"
                placeholder="This is payment for this hackathon"
              />
            </div>
            <Button
              className="mt-7 w-full"
              onClick={goToStageTwo}
            >
              Connect wallet and pay
            </Button>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="relative flex w-full flex-col items-center justify-center">
          {backButton()}
          <div className="anim-fade-in mt-8 w-[28rem] rounded-[40px] border border-[#EBEBEB] px-4 py-[80px]">
            <h2 className="w-full text-center text-4xl font-semibold">
              Connect Wallet
            </h2>
            <p className="mt-8 px-16 text-center font-medium">
              Connect your BasePay wallet to complete this payment
            </p>
            <Button className="mb-12 mt-12 w-full" onClick={goToStageThree}>
              Connect wallet
            </Button>
            <small className="inline-block w-96 text-center font-medium">
              Don&apos;t have a wallet yet? We&apos;ll create one for you on
              BasePay.
            </small>
            <small className="inline-block w-96 text-center font-medium">
              <a href="">Click here</a> to create a new one.
            </small>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="relative flex w-full flex-col items-center justify-center">
          {backButton()}
          <div className="fade-in-animated mb-8 w-[28rem] rounded-[40px] border border-[#EBEBEB] px-4 pb-[68px] pt-4">
            <div className="mb-4 w-full rounded-[18px] border border-[#3B72FF33] p-4 shadow-[0px_4px_44px_0px_#3B72FF12]">
              <div className="flex w-40 flex-row gap-2 rounded-full bg-[#3B72FF1A] p-1">
                <Image alt="Coinbase icon" height={20} src={coinbaseIcon} />
                <small className="text-[#3B72FF]">Wallet connected</small>
              </div>
              <div className="mt-4 flex w-full flex-row items-center justify-center gap-2 rounded-full p-1">
                <Image alt="Placeholder avatar" src={avatar} height={50} />
                <p className="font-medium">8tw8ehdp..........784xgyj</p>
                <Image alt="Placeholder avatar" src={copyIcon} height={20} />
                <div className="ml-auto flex flex-col gap-1">
                  <small className="text-center text-[#8C8C8C]">Balance:</small>
                  <small className="text-center font-semibold">0.0006ETH</small>
                </div>
              </div>
            </div>
            <label className="mb-14 font-semibold">Description</label>
            <br />
            <InputField
              readonly={true}
              value="2024 Hackathon"
              placeholder="This is payment for this hackathon"
              className="mt-2"
            />
            <br />
            <br />
            <label className="mb-[10px] font-semibold">Amount</label>
            <div className="mt-2 flex w-full flex-row items-center gap-[8px]">
              <SelectField
                name="currencySelect"
                id="currency-select"
                className="w-[20%]"
                options={selectOptions}
              />
              <InputField
                readonly={true}
                value="0.0006"
                placeholder="This is payment for this hackathon"
              />
            </div>
            <Button className="mb-12 mt-7 w-full" onClick={goToStageFour}>
              Pay with Base
            </Button>

            <small className="inline-block w-96 text-center font-medium">
              Don&apos;t have enough for this transaction?
            </small>
            <small className="inline-block w-96 text-center font-medium">
              Fund wallet with <a href="">Fiat</a> or <a href="">Crypto</a>
            </small>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="relative flex w-full flex-col items-center justify-center">
          {backButton()}
          <div className="fade-in-animated mt-8 w-[28rem] rounded-[40px] border border-[#EBEBEB] px-4 pt-[80px]">
            <h2 className="w-full text-center text-4xl font-semibold">
              Payment Sucessful
            </h2>
            <Image
              src={successfulIcon}
              height={150}
              alt="Payment successful"
              className="mx-auto my-8"
            ></Image>
            <p className="px-8 text-center font-medium">
              Payment for &quot;2024 Hackathon&quot; has been successfully
              completed
            </p>
            <Button className="mb-12 mt-12 w-full" onClick={goToStageThree}>
              Done
            </Button>
          </div>
        </div>
      );
    default:
      return (
        <div
          className="relative flex w-full flex-col items-center justify-center"
          // className="flex w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-border bg-blue/5 p-10 text-2xl font-semibold"
        >
          <h2 className="text-5xl font-semibold">Hackathon Payment</h2>
          <div className="mt-8 w-[28rem] rounded-[40px] border border-[#EBEBEB] p-4 py-[68px]">
            <label className="mb-14 font-semibold">Description</label>
            <br />
            <InputField
              readonly={true}
              value="2024 Hackathon"
              placeholder="This is payment for this hackathon"
              className="mt-2"
            />
            <br />
            <br />
            <label className="mb-[10px] font-semibold">Amount</label>
            <div className="mt-2 flex w-full flex-row items-center gap-[8px]">
              <SelectField
                name="currencySelect"
                id="currency-select"
                className="w-[20%]"
                options={selectOptions}
              />
              <InputField
                readonly={true}
                value="0.0006"
                placeholder="This is payment for this hackathon"
              />
            </div>
            <Button className="mt-7 w-full">Connect wallet and pay</Button>
          </div>
        </div>
      );
  }
}
