# Harhat_Klaytn_Nft_Example

This is a simple example for setting up a hardhat Nft project for Klaytn putting in to consideration its fixed gas price model. In this guide, we will walk through creating and deploying KIP-17 smart contract on the Klaytn test network using Solidity, Hardhat, Kaikas, Nft Storage and visualizing it on opensea. 

This would guide you into how to set up a project, test and deploy it to klaytn putting into consideration the Klaytn compatible gas price using Hardhat and ethers js.

## Installation
1. Clone this repo:

```shell
git clone https://github.com/AyDeveloper/Klaytn_NFT_Example.git
```

2. Install NPM packages:

```shell
cd Hardhat_Klaytn_Example
npm install
```

3. Compile Contract

```shell
  npx hardhat compile
```

4. Start Hardhat Node

```shell
  npx hardhat node
```

5. Deployment

```shell
npx hardhat run scripts/deploy.ts --network klaytn
```


5. Mint

```shell
npx hardhat run scripts/mint.ts --network klaytn
```



# Other Links
1. How to set up a hardhat project for klaytn https://oxpampam.hashnode.dev/how-to-set-up-a-hardhat-project-for-klaytn

