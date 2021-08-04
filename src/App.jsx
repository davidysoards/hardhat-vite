import { ethers } from 'ethers';
import React, { useState } from 'react';
import HackTele from '../artifacts/contracts/4_HackTelephone.sol/HackTelephone.json';

const hackTeleAddress = '0x9Ba4552E1Ea4EC240A5dB8dFD279c6CE02CaCFd1';

export default function App() {
  const [teleAddress, setTeleAddress] = useState('');
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function hackTelephone() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(hackTeleAddress, HackTele.abi, provider.getSigner());
      const transaction = await contract.takeOwnership(teleAddress);
      await transaction.wait();
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold uppercase text-center mb-8">Let's Play Ethernaut</h1>
      {/* LEVEL 4 */}
      <div className=" max-w-screen-md mx-auto bg-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-2">4) Telephone</h2>
        <label>
          Your Rinkeby Address
          <input
            type="text"
            onChange={(e) => setTeleAddress(e.target.value)}
            placeholder="####"
            id="your-rinkeby"
            className="block mt-1"
          />
        </label>
        <button
          type="button"
          className="p-2 bg-blue-500 text-white border-2 border-blue-500 mt-3"
          onClick={hackTelephone}
        >
          Take Ownership
        </button>
      </div>
    </div>
  );
}
