const { getFullnodeUrl, SuiClient, } = require("@mysten/sui.js/client");
const { TransactionBlock} = require("@mysten/sui.js/transactions");
const { Ed25519Keypair } = require('@mysten/sui.js/keypairs/ed25519');
const { fromB64 } = require ('@mysten/sui.js/utils');

const treasury_cap = 0xb7159bec8f490094220fb3de26a8d82f6fb8ae20b15e1ba5af39d539a514f116;

const client = new SuiClient({ url: getFullnodeUrl('testnet') });
const adminPhrase = 'manage wheel addict pizza unable corn large long embody twin fruit door';


// create a new coin with balance 100, based on the coins used as gas payment
// you can define any balance here
// const [coin] = txb.splitCoins(txb.gas, [100]);
 
// transfer the split coin to a specific address
// txb.transferObjects([coin], '0x3caa667cf2bf6c3dfbe861a475ca47a59882aa19fd727de966c40b6d0c0a6619');
///////////////////////////00000000000000000000000000000000000000000// main 000000000000000000000000000000000000
async function main() {
// see Network Interactions with SuiClient for more info on creating clients
// const txb = new TransactionBlock();
// const initHouseBalance = 10000000000;
// const houseCoin = tx.splitCoins(tx.gas, [tx.pure(initHouseBalance)]);
const keypair = Ed25519Keypair.deriveKeypair(adminPhrase);

const tx = new TransactionBlock();
const [coin] = tx.splitCoins(tx.gas, [1000]);
tx.transferObjects([coin], keypair.getPublicKey().toSuiAddress());
const result = await client.signAndExecuteTransactionBlock({
	signer: keypair,
	transactionBlock: tx,
});
console.log({ result });
// tx.moveCall({
//     target: `0x981c6a1977b82746465e1cb5c7eec3dbd0abbf72716107f41f107d5ad6598b5e::mycoin::mint`,
//     arguments: [
//       tx.object(treasury_cap),
//       houseCoin,
//       tx.pure(Array.from(blsKeyAsMoveParameter))
//     ],
//   });

// // ... add some transactions...
// const bytes = await txb.build({ client });
// const keyPair = Ed25519Keypair.deriveKeypair(exampleMnemonic);
// client.signAndExecuteTransactionBlock({ signer: keyPair, transactionBlock: txb });
// /////////////////''''''''''''''''''''///////////////////////////
// const result = await client.signAndExecuteTransactionBlock({
//     transactionBlock: tx,
//     signer: owner_keypair,
//     options: {
//       showEffects: true,
//     },
//   });

//   console.log("Status", result.effects?.status);
//   console.log("Result", result);
 
// const { signature } = await keypair.signTransactionBlock(bytes);
 
}

function getSigner() {
    const keypair = Ed25519Keypair.deriveKeypair(adminPhrase);
    const admin = keypair.getPublicKey().toSuiAddress();
    console.log("Admin Address = " + admin);
    
    return keypair;
  }
  
  getSigner();

main()