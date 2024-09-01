import hardhat from "hardhat";

async function main() {
  // Get the ContractFactory and Signers
  const CoinFlip = await hardhat.ethers.getContractFactory("CoinFlip");
  const [deployer] = await hardhat.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy the contract
  const coinFlip = await CoinFlip.deploy();

  console.log("CoinFlip contract deployed to:", coinFlip.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
