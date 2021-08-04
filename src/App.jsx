import { ethers } from 'ethers';
import React, { useState } from 'react';
import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json';

const greeterAddress = '0xaaED153Ea94100f37aE0D676182cA6fdaD7d8A0E';

export default function App() {
  const [greeting, setGreetingValue] = useState('');

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider);
      try {
        const data = await contract.greet();
        console.log('data: ', data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function setGreeting() {
    if (!greeting) return;
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      await transaction.wait();
      fetchGreeting();
    }
  }

  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold uppercase tracking-widest text-center mb-8">Create Vite DApp</h1>
      <h2 className="text-2xl font-bold mb-2">Greeter </h2>
      <button
        type="button"
        onClick={fetchGreeting}
        className="p-2 bg-blue-500 text-white font-bold border-2 border-blue-500 mt-2"
      >
        Fetch Greeting
      </button>
      <label htmlFor="your-rinkeby" className="block mt-6">
        New Greeting Text
      </label>
      <input type="text" onChange={(e) => setGreetingValue(e.target.value)} placeholder="Wassup?" />
      <button
        type="button"
        onClick={setGreeting}
        className="p-2 bg-green-500 text-white font-bold border-2 border-green-500 ml-2"
      >
        Set Greeting
      </button>
    </div>
  );
}
