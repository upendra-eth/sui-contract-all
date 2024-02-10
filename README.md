# SUI.js SDK Example: Calling SUI Blockchain Smart Contract Function

## Prerequisites

Ensure you have Node.js installed on your system.

## Installation

npm install @mysten/sui.js/client @mysten/sui.js/transactions @mysten/sui.js/keypairs/ed25519

The provided JavaScript code utilizes the Sui.js SDK to interact with the SUI blockchain. Here's a brief overview:

Packages Used:

@mysten/sui.js/client: SUI client for interacting with the blockchain.
@mysten/sui.js/transactions: TransactionBlock for building transactions.
@mysten/sui.js/keypairs/ed25519: Ed25519Keypair for generating keypairs.
Constants:

DISPERSE_PACKAGE_ID: Package ID of the disperse smart contract on the SUI testnet.
ADMIN_MNEMONIC: Mnemonic of the transaction sender (admin).
SENDER_COIN_OBJECT_ID: Object ID of the sender's coin.
COIN_TYPE: Type of the coin to be transferred.
SUI Client Setup:

Initialize the SUI client with the testnet full node URL.
Main Function (main):

Generate an Ed25519 Keypair from the admin mnemonic.
Create a new TransactionBlock.
Define input arguments for the smart contract function.
Build the transaction by calling the disperse_token function.
Sign and execute the transaction using the SUI client.
Display the transaction status and result.
Helper Function (getSigner):

Derive the keypair from the admin mnemonic.
Log the admin's SUI address.
Return the keypair.

Install the required packages using npm install.
Run the script:

node your-script-name.js
View the transaction status and result.

Ensure you have the necessary dependencies installed and configured, such as Node.js and a valid SUI testnet environment.





