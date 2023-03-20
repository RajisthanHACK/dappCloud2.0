const hre = require("hardhat");

async function main() {
  const Upload1 = await hre.ethers.getContractFactory("Upload");
  const contract = await Upload1.deploy();

  await contract.deployed();
  console.log("Address of contract: ", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0x9004148Ea65e3a72f8dA10551224649e1ecc98c7