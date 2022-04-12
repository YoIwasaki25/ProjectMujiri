const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("Mujiri");
  const nft = await NFT.deploy(
	  "Mujiri",
	  "MJ",
	  "ipfs://QmYnnjsjiUXZvPfP63xEjx8AL6YngQrrkEM2KYWenMifRp/",
	  "ipfs://QmSTxWFYFpZTznXgV75XU8QMn2duM2shgtvVNRtQNvfHaz"
  );
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
