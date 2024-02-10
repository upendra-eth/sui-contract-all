const { getFullnodeUrl, SuiClient } = require("@mysten/sui.js/client");
const { TransactionBlock } = require("@mysten/sui.js/transactions");
const { Ed25519Keypair } = require("@mysten/sui.js/keypairs/ed25519");

const DISPERSE_PACKAGE_ID =
  "0xe09d35535a4812517e615d53db7cc249ac14fb8673f2aa265f67222ec6264076"; // package id of disperse smart contract on testnet

const ADMIN_MNEMONIC =
  "manage wheel addict pizza unable corn large long embody twin fruit door"; // transection sender

const SENDER_COIN_OBJECT_ID =
  "0x40c054f105f034e672fd239022815aa6755bced0a56e0920f5a3d3848abecc8c"; //update if you want to transfer diffrent coin
const SENDER_SUI_COIN_OBJECT_ID =
  "0x40c054f105f034e672fd239022815aa6755bced0a56e0920f5a3d3848abecc8c"; //update if you want to transfer diffrent coin
const COIN_TYPE =
  "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"; //update if you want to transfer diffrent coin

const client = new SuiClient({ url: getFullnodeUrl("testnet") });

async function main() {
  // Generate a Ed25519 Keypair from admin mnemonic
  const keypair = getSigner();

  const tx = new TransactionBlock();

  // Input arguments
  let amounts = [345, 786];
  let coin_onject_id = tx.object(SENDER_COIN_OBJECT_ID);
  let receivers = [
    "0x83cda0e14a477ecf2f556c7b717c9082f43589bb4124bce7c618b0efe9ab440c",
    "0x3caa667cf2bf6c3dfbe861a475ca47a59882aa19fd727de966c40b6d0c0a6619",
  ];
  let total_amount = 0;
  let i =0;
  while (i < amounts.length) {
    total_amount = total_amount + amounts[i];
    i++
  }



  console.log("total amount ======== ", total_amount);

  // Create a new coin with balance 100, based on the coins used as gas payment.
// You can define any balance here.
const [coin] = tx.splitCoins(tx.gas, [tx.pure(total_amount)]);
console.log("coin",coin);



// Transfer the split coin to a specific address.
tx.transferObjects([coin], tx.pure("0x8cf5b63a58944d7aa2d37f2a070fa15dd7dd3e2ffaed1f4282eb9060ea1c6a17"));

//   //create transection
//   tx.moveCall({
//     target: `${DISPERSE_PACKAGE_ID}::disperse::disperse_token`,
//     arguments: [coin, tx.pure(amounts), tx.pure(receivers)],
//     typeArguments: [COIN_TYPE],
//   });

  const result = await client.signAndExecuteTransactionBlock({
    transactionBlock: tx,
    signer: keypair,
    options: {
      showEffects: true,
    },
  });
//   const txb = new TransactionBlock();
//    //create transection
//    txb.moveCall({
//     target: `${DISPERSE_PACKAGE_ID}::disperse::disperse_token`,
//     arguments: [coin, txb.pure(amounts), txb.pure(receivers)],
//     typeArguments: [COIN_TYPE],
//   });

//   const result2 = await client.signAndExecuteTransactionBlock({
//     transactionBlock: txb,
//     signer: keypair,
//     options: {
//       showEffects: true,
//     },
//   });
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
