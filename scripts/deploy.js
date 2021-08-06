const hre = require('hardhat');

async function main() {
  // const HackTelephone = await hre.ethers.getContractFactory('HackTelephone');
  // const hackTelephone = await HackTelephone.deploy();
  // await hackTelephone.deployed();
  // console.log('HackTelephone deployed to:', hackTelephone.address);

  // const UseTheForce = await hre.ethers.getContractFactory('UseTheForce');
  // const useTheForce = await UseTheForce.deploy('0xF24660c2a08924e124dfC5C9CA0B25D3122B7D20');
  // await useTheForce.deployed();
  // console.log('UseTheForce deployed to:', useTheForce.address);

  const MaliciousKing = await hre.ethers.getContractFactory('MaliciousKing');
  const maliciousKing = await MaliciousKing.deploy('0x657ddA2001E32C225467EBAC89cF1FaaC9c6d747');
  await maliciousKing.deployed();
  console.log('MaliciousKing deployed to:', maliciousKing.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
