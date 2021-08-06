import { ethers } from 'ethers';
import React, { useState } from 'react';
// import HackTele from '../artifacts/contracts/4_HackTelephone.sol/HackTelephone.json';
// import UseTheForce from '../artifacts/contracts/7_UseTheForce.sol/UseTheForce.json';
import MaliciousKing from '../artifacts/contracts/9_MaliciousKing.sol/MaliciousKing.json';

export default function App() {
  // const [teleAddress, setTeleAddress] = useState('');

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // async function hackTelephone() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract('0x3E2e7babe08939A16e975638b7fE1787e77daE6E', HackTele.abi, provider.getSigner());
  //     const transaction = await contract.takeOwnership(teleAddress);
  //     await transaction.wait();
  //   }
  // }

  // async function getForceBalance() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract('0x63A6539B8e78d33125431a761b543f1D9fD853F1', UseTheForce.abi, provider);
  //     const balance = await contract.getBalance();
  //     console.log('Force Balance: ', balance.toString());
  //   }
  // }

  // async function useTheForce() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract(
  //       '0x63A6539B8e78d33125431a761b543f1D9fD853F1',
  //       UseTheForce.abi,
  //       provider.getSigner()
  //     );
  //     const transaction = await contract.kill();
  //     await transaction.wait();
  //   }
  // }

  async function beKing() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        '0x7a3542a2F2a18D7e6B68EdaD7F463838822Db2Be',
        MaliciousKing.abi,
        provider.getSigner()
      );
      const transaction = await contract.becomeKing({ value: ethers.utils.parseEther('1.0') });
      await transaction.wait();
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold uppercase text-center mb-8">Let's Play Ethernaut</h1>
      {/* LEVEL 4 Telephone */}
      {/* <div className=" max-w-screen-md mx-auto bg-gray-200 p-6">
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
      </div> */}
      {/* LEVEL 7 Force */}
      {/* <div className=" max-w-screen-md mx-auto bg-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-2">7) Force</h2>
        <button
          type="button"
          className="p-2 bg-green-500 text-white border-2 border-green-500 mt-3 block"
          onClick={getForceBalance}
        >
          Get Force Balance
        </button>
        <button
          type="button"
          className="p-2 bg-red-500 text-white border-2 border-red-500 mt-3 block"
          onClick={useTheForce}
        >
          Kill Force
        </button>
      </div> */}
      {/* LEVEL 9 King */}
      <div className=" max-w-screen-md mx-auto bg-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-2">9) King</h2>
        <button type="button" className="p-2 bg-red-500 text-white border-2 border-red-500 mt-3 block" onClick={beKing}>
          Be King 4 Life
        </button>
        <p className="mt-1 italic">CAUTION: Costs 1 ETH!!</p>
      </div>
    </div>
  );
}
