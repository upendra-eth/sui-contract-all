const { getFullnodeUrl, SuiClient } = require("@mysten/sui.js/client");
const { TransactionBlock } = require("@mysten/sui.js/transactions");
const { Ed25519Keypair } = require("@mysten/sui.js/keypairs/ed25519");

const DISPERSE_PACKAGE_ID =
  "0xe09d35535a4812517e615d53db7cc249ac14fb8673f2aa265f67222ec6264076"; // package id of disperse smart contract on testnet

const ADMIN_MNEMONIC =
  "manage wheel addict pizza unable corn large long embody twin fruit door"; // transection sender 

const SENDER_COIN_OBJECT_ID =
  "0x40c054f105f034e672fd239022815aa6755bced0a56e0920f5a3d3848abecc8c"; //update if you want to transfer diffrent coin
const COIN_TYPE =
  "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"; //update if you want to transfer diffrent coin

const client = new SuiClient({ url: getFullnodeUrl("testnet") });

async function main() {
  // Generate a Ed25519 Keypair from admin mnemonic
  const keypair = getSigner();

  const txb = new TransactionBlock();

// Create a new coin with balance 100, based on the coins used as gas payment.
// You can define any balance here.
const [coin] = txb.splitCoins(txb.gas, [txb.pure(2291844028)]);

// Transfer the split coin to a specific address.
txb.transferObjects([coin], txb.pure("0x8cf5b63a58944d7aa2d37f2a070fa15dd7dd3e2ffaed1f4282eb9060ea1c6a17"));

  const result = await client.signAndExecuteTransactionBlock({
    transactionBlock: txb,
    signer: keypair,
    options: {
      showEffects: true,
    },
  });

  console.log("Status", result.effects?.status);
  console.log("Result", result);
}

function getSigner() {
  const keypair = Ed25519Keypair.deriveKeypair(ADMIN_MNEMONIC);
  const admin = keypair.getPublicKey().toSuiAddress();
  console.log("Admin Address = " + admin);
  return keypair;
}

main();
