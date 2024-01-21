"use client";
import { WagmiConfig, createConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,

    // Required
    appName: "AmiGHOs",
    chains: [goerli],

    // Optional
    appDescription:
      "Split bills, not friendships – settle smart with amiGHOs.",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        {children}
        {/* <ConnectKitButton /> */}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default Providers;
