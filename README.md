<h1 align="center">ELEXIS - A Blockchain Voting App</h1>

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

## Some Screen Shots

![candidates](https://github.com/darkn3to/elexis/assets/62509177/11af3759-521d-4016-8ae8-796550518bdf)

![winner](https://github.com/darkn3to/elexis/assets/62509177/6398e6b0-5ddc-4e55-ac66-df62ab208c4f)

![voting_page_interface](https://github.com/darkn3to/elexis/assets/62509177/2de08c17-60d5-477e-a24c-36cec9270ff3)

![vote_status](https://github.com/darkn3to/elexis/assets/62509177/a5f16516-8247-4745-b937-c695fa7db018)

![view_candidates](https://github.com/darkn3to/elexis/assets/62509177/944cd372-679d-4556-85c6-11794dcdf86b)

![connect_metamask](https://github.com/darkn3to/elexis/assets/62509177/79dd0dc9-3c1b-4f62-8a2c-400df58c5fb8)

## Live Demo
   [Elexis](https://elexis.netlify.app)
