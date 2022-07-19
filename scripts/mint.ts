import { ethers } from "hardhat";

async function main() {
   const deployerAddr = "0x8B93b7d7Ed0960e9A0090851334e19b3c451E4E9";
   const deployer = await ethers.getSigner(deployerAddr);

// gets the instance of the already deployed contract
 const myNftInstance = await ethers.getContractAt("MYNFT", "0x0f32D0e8936bd19CBe7395726a7B07090C041676");

// you can add the link to your metadata here
  const uri = "https://bafybeigtfhnfoyh2fw73tqhinxy4bfz5ijnug3wjx3mvtia2iuqpkixfke.ipfs.nftstorage.link/metadata/1";

    const mint = await myNftInstance.connect(deployer).mintNftTo("0xA83FD9Dd7C37E1C9390774A959584e739cae54d3", uri);
    const tx = await mint.wait()
    console.log(tx);

    const bal = await myNftInstance.balanceOf("0xA83FD9Dd7C37E1C9390774A959584e739cae54d3");
    console.log(bal);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
