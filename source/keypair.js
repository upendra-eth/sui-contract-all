const { Ed25519Keypair } = require('@mysten/sui.js/keypairs/ed25519');

const exampleMnemonic = 'manage wheel addict pizza unable corn large long embody twin fruit door';
 
const keyPair = Ed25519Keypair.deriveKeypair(exampleMnemonic);


// let mykeypair = Ed25519Keypair.deriveKeypairFromSeed("manage wheel addict pizza unable corn large long embody twin fruit door");

// const keypair = new Ed25519Keypair();
// const bytes = keypair.getPublicKey().toBytes();
// const publicKey = new Ed25519PublicKey(bytes);
// const address = publicKey.toSuiAddress();
// console.log(address)

console.log("we got address is - ",keyPair.getPublicKey().toSuiAddress())
