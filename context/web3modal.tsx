"use client";
import { mainnet, metadata, projectId } from "@/config/walletconnect";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  defaultChainId: 1,
});

createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return children;
}
