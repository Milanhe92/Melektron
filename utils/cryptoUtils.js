import { ethers } from 'ethers';
import { TonConnect } from '@tonconnect/sdk';

// Ethereum операције
export const connectEthereumWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      
      return {
        address,
        provider,
        signer
      };
    } catch (error) {
      console.error("Ethereum connection error:", error);
      throw new Error("Could not connect to Ethereum wallet");
    }
  } else {
    throw new Error("Ethereum wallet not detected");
  }
};

// TON операције
const connector = new TonConnect({
  manifestUrl: process.env.NEXT_PUBLIC_TON_CONNECT_MANIFEST_URL
});

export const connectTONWallet = async () => {
  try {
    const wallets = await connector.getWallets();
    const wallet = wallets[0];
    
    if (wallet) {
      await connector.connect({ jsBridgeKey: wallet.jsBridgeKey });
      const { account } = connector.wallet;
      
      return {
        address: account.address,
        wallet: connector.wallet
      };
    } else {
      throw new Error("No TON wallets available");
    }
  } catch (error) {
    console.error("TON connection error:", error);
    throw new Error("Could not connect to TON wallet");
  }
};

// Квантна сигурност
export const generateQuantumSafeKey = async () => {
  const array = new Uint8Array(32);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};