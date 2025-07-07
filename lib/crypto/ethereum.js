// lib/crypto/ethereum.js
   import { ethers } from 'ethers';
   
   export const connectWallet = async () => {
     if (window.ethereum) {
       const provider = new ethers.providers.Web3Provider(window.ethereum);
       await provider.send("eth_requestAccounts", []);
       const signer = provider.getSigner();
       return signer.getAddress();
     }
     throw new Error("Ethereum wallet not detected");
   };

   