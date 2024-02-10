const { getFullnodeUrl, SuiClient } = require("@mysten/sui.js/client");
const { TransactionBlock } = require("@mysten/sui.js/transactions");
const { Ed25519Keypair } = require("@mysten/sui.js/keypairs/ed25519");

const CALLER_MNEMONIC =
  "found term chuckle harvest comfort system left only autumn pet apology riot";
const TREASURY_CAP =
  "0x1318a8ed847a864caa22e7cef72da55497bcd61be6331860a57320ec4dab5925";
const ACOIN_PACKAGE_ID  =
  "0x231d6a9ae841f2bfac7e3e73eee2d3812d0f20b17059ed1fa9c6e0eb2bfb0b34";

const client = new SuiClient({ url: getFullnodeUrl("testnet") });

const keypair = getSigner();

async function mint_coin() {
  //create new transaction block
  const tx = new TransactionBlock();
  let amount = tx.pure.u64(100_000000);
  let receiver_add = tx.pure.address(
    "0xbb950a67b1fdf6629231f28710d7dc572028a6cfe0bd487881038642b86229f5"
  );

  //create transaction
  tx.moveCall({
    target: `${ACOIN_PACKAGE_ID}::acoin::mint`,
    arguments: [tx.object(TREASURY_CAP), amount, receiver_add],
  });

  //execute transaction
  const result = await client.signAndExecuteTransactionBlock({
    transactionBlock: tx,
    signer: keypair,
    options: {
      showEffects: true,
    },
  });
  console.log("Status", result.effects?.status);
  console.log("Result", result);
}
mint_coin();

function getSigner() {
  const keypair = Ed25519Keypair.deriveKeypair(CALLER_MNEMONIC);
  const caller = keypair.getPublicKey().toSuiAddress();
  console.log("Caller Address = " + caller);
  return keypair;
}





