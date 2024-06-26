"use client"
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

export default function HackathonPaymentPage() {
	const selectOptions = [
		{text: "ETH", value: "ETH"}
	];

	const [stage, setStage] = useState(1);

	const goToStageTwo = () => {setStage(2)}
	const goToStageThree = () => {setStage(3)}
	const goToStageFour = () => {setStage(4)}
	const goPreviousStage = () => {setStage(stage - 1)}


	function backButton() {
		return (
			<button onClick={() => {goPreviousStage()}} className="w-[28rem] flex flex-row gap-4 items-center justify-start mb-4">
				<Image src={arrow} alt="back arrow" className="tr -rotate-90 scale-[1.8]"></Image>
				<span className="font-semibold text-xl">Back</span>
			</button>
		)
	}
	

	switch (stage) {
		case 1:
			return (
				<div
				className="flex w-full flex-col items-center justify-center relative"
				>
					<h2 className="text-5xl font-semibold">Hackathon Payment</h2>
					<div className="w-[28rem] mt-8 rounded-[40px] py-[68px] border-[#EBEBEB] border p-4 anim-fade-in">
						<label className="mb-14 font-semibold">Description</label><br />
						<InputField readonly={true} value="2024 Hackathon" placeholder="This is payment for this hackathon" className="mt-2"/>
						<br /><br />
						<label className="mb-[10px] font-semibold">Amount</label>
						<div className="w-full flex flex-row items-center gap-[8px] mt-2">
							<SelectField name="currencySelect" id="currency-select" className="w-[20%]" options={selectOptions} />
							<InputField readonly={true} value="0.0006" placeholder="This is payment for this hackathon"/>
						</div>
						<Button className="w-full mt-7" onClick={goToStageTwo}>Connect wallet and pay</Button>
					</div>
				</div>
			);
		case 2:
			return (
				<div
				className="flex w-full flex-col items-center justify-center relative"
				>
					{backButton()}
					<div className="w-[28rem] mt-8 rounded-[40px] py-[80px] border-[#EBEBEB] border px-4 anim-fade-in">
						<h2 className="text-4xl font-semibold w-full text-center">Connect Wallet</h2>
						<p className="mt-8 text-center font-medium px-16">Connect your BasePay wallet to complete this payment</p>
						<Button className="w-full mt-12 mb-12" onClick={goToStageThree}>Connect wallet</Button>						
						<small className="font-medium w-96 text-center inline-block">Don't have a wallet yet? We'll create one for you on BasePay.</small>
						<small className="font-medium w-96 text-center inline-block"><a href="">Click here</a> to create a new one.</small>
					</div>
				</div>
			);
		case 3:
			return (
				<div
				className="flex w-full flex-col items-center justify-center relative"
				>
					{backButton()}
					<div className="w-[28rem] rounded-[40px] pb-[68px] pt-4 border-[#EBEBEB] border px-4 mb-8 fade-in-animated">
						<div className="w-full rounded-[18px] mb-4 border-[#3B72FF33] border p-4 shadow-[0px_4px_44px_0px_#3B72FF12]">
							<div className="flex flex-row gap-2 w-40 p-1 rounded-full bg-[#3B72FF1A]">
								<Image alt="Coinbase icon" height={20} src={coinbaseIcon}/>
								<small className="text-[#3B72FF]">Wallet connected</small>
							</div>
							<div className="flex flex-row gap-2 p-1 justify-center items-center w-full rounded-full mt-4">
								<Image alt="Placeholder avatar" src={avatar} height={50}/>
								<p className="font-medium">8tw8ehdp..........784xgyj</p>
								<Image alt="Placeholder avatar" src={copyIcon} height={20}/>
								<div className="flex flex-col gap-1 ml-auto">
									<small className="text-center text-[#8C8C8C]">Balance:</small>
									<small className="text-center font-semibold">0.0006ETH</small>
								</div>
							</div>

						</div>
						<label className="mb-14 font-semibold">Description</label><br />
						<InputField readonly={true} value="2024 Hackathon" placeholder="This is payment for this hackathon" className="mt-2"/>
						<br /><br />
						<label className="mb-[10px] font-semibold">Amount</label>
						<div className="w-full flex flex-row items-center gap-[8px] mt-2">
							<SelectField name="currencySelect" id="currency-select" className="w-[20%]" options={selectOptions} />
							<InputField readonly={true} value="0.0006" placeholder="This is payment for this hackathon"/>
						</div>
						<Button className="w-full mt-7 mb-12" onClick={goToStageFour}>Pay with Base</Button>
						
						<small className="font-medium w-96 text-center inline-block">Don't have enough for this transaction?</small>
						<small className="font-medium w-96 text-center inline-block">Fund wallet with <a href="">Fiat</a> or <a href="">Crypto</a></small>
					</div>
				</div>
			);
		case 4:
			return (
				<div
				className="flex w-full flex-col items-center justify-center relative"
				>
					{backButton()}
					<div className="w-[28rem] mt-8 rounded-[40px] pt-[80px] border-[#EBEBEB] border px-4 fade-in-animated">
						<h2 className="text-4xl font-semibold w-full text-center">Payment Sucessful</h2>
						<Image src={successfulIcon} height={150} alt="Payment successful" className="mx-auto my-8"></Image>
						<p className="text-center font-medium px-8">Payment for "2024 Hackathon" has been successfully completed</p>
						<Button className="w-full mt-12 mb-12" onClick={goToStageThree}>Done</Button>						
					</div>
				</div>
			);
		default:
			return (
				<div
				className="flex w-full flex-col items-center justify-center relative"
				// className="flex w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-border bg-blue/5 p-10 text-2xl font-semibold"
				>
					<h2 className="text-5xl font-semibold">Hackathon Payment</h2>
					<div className="w-[28rem] mt-8 rounded-[40px] py-[68px] border-[#EBEBEB] border p-4">
						<label className="mb-14 font-semibold">Description</label><br />
						<InputField readonly={true} value="2024 Hackathon" placeholder="This is payment for this hackathon" className="mt-2"/>
						<br /><br />
						<label className="mb-[10px] font-semibold">Amount</label>
						<div className="w-full flex flex-row items-center gap-[8px] mt-2">
							<SelectField name="currencySelect" id="currency-select" className="w-[20%]" options={selectOptions} />
							<InputField readonly={true} value="0.0006" placeholder="This is payment for this hackathon"/>
						</div>
						<Button className="w-full mt-7">Connect wallet and pay</Button>
					</div>
				</div>
			);
	}
}