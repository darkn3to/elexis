<br clear="both">

<h1 align="center">ELEXIS - A Blockchain Voting App</h1>

# ELEXIS - A Blockchain Voting App

Welcome to Elexis, a decentralized voting system built on the Volta testnet blockchain. This secure and transparent solution guarantees tamper-proof voting records, enabling users to cast their votes remotely while prioritizing anonymity and fraud prevention. Dive into this project for a dependable and decentralized approach to voting processes.

## Features

• Simple and elegant UI for a seamless voting experience.

• User-initiated election setup without a complex admin panel.

• Utilizes the Volta testnet for secure transaction processing.

• Leverages blockchain for fraudless and transparent voting.

• Ensures tamper-proof voting records.

• Prioritizes user anonymity.

• Maintains transparency in the entire voting process.

• Utilizes blockchain features to prevent fraud, ensuring electoral integrity.

## Requirements
• HardHat

• MetaMask

• Live Server Extension

## Installation

1. Open a terminal.

2. Clone the repository by using the command

3. Download and install node.js. Add it to your path.

4. Install hardhat by running the following command in the terminal: 
   ```cmd 
   npx hardhat
   ```
   then
   ```cmd
   npx hardhat init
   ``` 
   and 
   ```cmd
   npx hardhat compile
   ```

5. Create a .env file as follows:
   ```.env
    API_URL="https://volta-rpc.energyweb.org/"
    PRIVATE_KEY="{THE_KEY_IN_YOUR_METAMASK_ACCOUNT}" 
    CONTRACT_ADDRESS="{YOUR_CONTRACT_ADDRESS}" 
    ```

## Usage

1. Add MetaMask extension to your browser and create an account if not already created.

2. Open deploy.js and add/remove names as per requirement.

3. Run the command:
    ```cmd
    npx hardhat run --network volta scripts/deploy.js
    ```
4. Copy paste the generated contract address into the .env file.

5. Deploy index.html using live server.

## Live Demo
   [Elexis](https://elexis.netlify.app)
