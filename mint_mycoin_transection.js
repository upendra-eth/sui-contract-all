const { getFullnodeUrl, SuiClient } = require("@mysten/sui.js/client");
const { TransactionBlock } = require("@mysten/sui.js/transactions");
const { Ed25519Keypair } = require("@mysten/sui.js/keypairs/ed25519");
const { fromB64 } = require("@mysten/sui.js/utils");
const { execSync } = require("child_process");

const TreasuryCap =
  "0xb7159bec8f490094220fb3de26a8d82f6fb8ae20b15e1ba5af39d539a514f116";
const packageObjectId =
  "0x981c6a1977b82746465e1cb5c7eec3dbd0abbf72716107f41f107d5ad6598b5e";

const client = new SuiClient({ url: getFullnodeUrl("testnet") });
const adminPhrase =
  "manage wheel addict pizza unable corn large long embody twin fruit door";

async function main() {
  // Generate a new Ed25519 Keypair
  const keypair = getSigner();
  const client = new SuiClient({
    url: getFullnodeUrl("testnet"),
  });
  const tx = new TransactionBlock();

  let amount = tx.pure.u64(8188888888888888);
  let treasury_cap = tx.object(TreasuryCap);
  let reciveradd = tx.pure.address(
    "0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237"
  );

  tx.moveCall({
    target: `${packageObjectId}::mycoin::mint`,
    arguments: [treasury_cap, amount, reciveradd],
  });

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

function getSigner() {
  const keypair = Ed25519Keypair.deriveKeypair(adminPhrase);
  const admin = keypair.getPublicKey().toSuiAddress();
  console.log("Admin Address = " + admin);

  return keypair;
}

main();
