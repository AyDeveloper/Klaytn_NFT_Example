# Harhat_Klaytn_Nft_Example

This is a simple example for setting up a hardhat Nft project for Klaytn. In this guide, we will walk through creating and deploying KIP-17 smart contract on the Klaytn test network using Solidity, Hardhat, Kaikas, Nft Storage and visualizing it on opensea. 

This would guide you into how to set up a project, compile and deploy it to klaytn putting into consideration the Klaytn compatible gas price using Hardhat and ethers js.

## Installation
1. Clone this repo:

```shell
git clone https://github.com/AyDeveloper/Klaytn_NFT_Example.git
```

2. Install NPM packages:

```shell
cd Klaytn_NFT_Example
npm install
```
3. Setting Hardhat Config
```shell
  const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    klaytn: {
      url: process.env.KLAYTN_URL || "",
      // This is the only field we are including in our file
      gasPrice: 250000000000,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

```

4. : Create a .env file and paste the code below

```shell
   KLAYTN_URL='https://api.baobab.klaytn.net:8651'
  PRIVATE_KEY= your private key copied from kaikas wallet

```

5. Compile Contract

```shell
  npx hardhat compile
```

6. Start Hardhat Node

```shell
  npx hardhat node
```

7. Deployment

```shell
npx hardhat run scripts/deploy.ts --network klaytn
```


8. Mint

```shell
npx hardhat run scripts/mint.ts --network klaytn
```



# Other Links
1. Build, Deploy and Mint KIP17 Token on Klaytn https://oxpampam.hashnode.dev/build-deploy-and-mint-kip17-token-on-klaytn

