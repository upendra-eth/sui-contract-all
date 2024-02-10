const { Ed25519Keypair } = require("@mysten/sui.js/keypairs/ed25519");
const { MultiSigPublicKey } = require("@mysten/sui.js/multisig");

const kp1 = new Ed25519Keypair();
const kp2 = new Ed25519Keypair();
const kp3 = new Ed25519Keypair();

const multiSigPublicKey = MultiSigPublicKey.fromPublicKeys({
  threshold: 2,
  publicKeys: [
    {
      publicKey: kp1.getPublicKey(),
      weight: 1,
    },
    {
      publicKey: kp2.getPublicKey(),
      weight: 1,
    },
    {
      publicKey: kp3.getPublicKey(),
      weight: 2,
    },
  ],
});

const multisigAddress = multiSigPublicKey.toSuiAddress();

console.log('sighnig by three address');
console.log("kp1 - ",kp1.toSuiAddress());
console.log("kp1 - ",kp2.toSuiAddress());
console.log("kp1 - ",kp3.toSuiAddress());
console.log("we get new address - ",multisigAddress);
