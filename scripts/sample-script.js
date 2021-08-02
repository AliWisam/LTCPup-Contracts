// // We require the Hardhat Runtime Environment explicitly here. This is optional 
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // When running the script with `hardhat run <script>` you'll find the Hardhat
// // Runtime Environment's members available in the global scope.
// const hre = require("hardhat");

// async function main() {
//   // Hardhat always runs the compile task when running scripts with its command
//   // line interface.
//   //
//   // If this script is run directly using `node` you may want to call compile 
//   // manually to make sure everything is compiled
//   // await hre.run('compile');

//   // We get the contract to deploy
//   // const Greeter = await hre.ethers.getContractFactory("Greeter");
//   // const greeter = await Greeter.deploy("Hello, Hardhat!");

//   // await greeter.deployed();

//   // console.log("Greeter deployed to:", greeter.address);
//   const IterableMapping = await hre.ethers.getContractFactory("IterableMapping");
//   const iterableMapping = await IterableMapping.deploy();

//   console.log("deployed at:", iterableMapping.address);

  
//   const LTCPup = await hre.ethers.getContractFactory("LTCPup",{
//     libraries:{
//       IterableMapping: iterableMapping.address,
//     },
//   });
//   const ltcPup = await LTCPup.deploy();
// // npx hardhat run --network testnet scripts/sample-script.js 
//   await ltcPup.deployed();

//   console.log("deployed at:", ltcPup.address);

// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });
//   /*
// npx hardhat verify --network testnet 0x55866E46D975BbB1a26E6eD99a902ce2d440A320 
// {'0xA11c8D9DC9b66E209Ef60F0C8D969D3CD988782c','0xC42a2109719Ff02dE9284a2eCaE3d357E82EE03a',
// 0x8A289B2A93e02296Ab91E0bfF92Eb07E40e5CA40','200000000000000','BTNT USDT','bUSDT','8','0xb18698E0B3Fa6fEC7c1935f36E138c644B2b1027',
// '0x34f36967b32E6E33739ceAD3574DA680B57316F1','0x00'}

// */