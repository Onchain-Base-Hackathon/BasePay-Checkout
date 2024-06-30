export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

export const mainnet = {
  chainId: 8453,
  name: "Base",
  currency: "ETH",
  explorerUrl: "https://basescan.org",
  rpcUrl: "https://mainnet.base.org",
};

export const metadata = {
  name: "BasePay",
  description: "Fiat to Crypto payments with ease",
  url: "https://basepay.com",
  icons: ["https://avatars.mywebsite.com/"],
};
