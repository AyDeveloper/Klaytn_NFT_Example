import { ethers } from "hardhat";


async function main() {
    const deployerAddr = "0x8B93b7d7Ed0960e9A0090851334e19b3c451E4E9";
    const deployer = await ethers.getSigner(deployerAddr);

    console.log(`Deploying contracts with the account: ${deployer.address}`);
    console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);

    //  Fetch the compiled contract using ethers.js
    const myNft = await ethers.getContractFactory("MYNFT");

    // calling deploy() will return an async Promise that we can await on 
    const nft = await myNft.connect(deployer).deploy();
    await  nft.deployed();

    console.log(`Contract deployed to address: ${nft.address}`);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
