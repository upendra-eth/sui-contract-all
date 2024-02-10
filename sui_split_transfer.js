const { getFullnodeUrl, SuiClient } = require("@mysten/sui.js/client");
const { TransactionBlock } = require("@mysten/sui.js/transactions");
const { Ed25519Keypair } = require("@mysten/sui.js/keypairs/ed25519");

const coinOnject =
  "0x4f21c361054bd4f919cd4329b6872de9c8374b835521501ef25df16afa87e6c5";
const packageObjectId =
  "0x0000000000000000000000000000000000000000000000000000000000000002";

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

  let amount = tx.pure.u64(81888888888888);
  let coin_onject = tx.object(coinOnject);
  let reciveradd = tx.pure.address(
    "0x83cda0e14a477ecf2f556c7b717c9082f43589bb4124bce7c618b0efe9ab440c"
  );

  tx.moveCall({
    target: `${packageObjectId}::pay::split_and_transfer`,
    arguments: [coin_onject, amount, reciveradd],
    typeArguments:['981c6a1977b82746465e1cb5c7eec3dbd0abbf72716107f41f107d5ad6598b5e::mycoin::MYCOIN']
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
