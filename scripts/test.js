const hre = require("hardhat");
async function main() {
  // const NFT = await hre.ethers.getContractFactory("Mujiri");
  const NFT = await hre.ethers.getContractFactory("Mujiri");
  // const URI = "ipfs://QmZthJwtnCygUA8Ae2BPMkGRY2xuh1KVgE46EgzxGbeRJZ/1.json"
  // const WALLET_ADDRESS = "0x9630f551e812eAF8b6dd3A53C1f5Ff80a6f2dA58"
  const CONTRACT_ADDRESS = "0x7e7C40d1f0C8c1acc7a869DADe1ef1Ba194c2d4C"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  // await contract.mint(1);
  await contract.reveal();
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
