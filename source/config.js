// import { config } from "dotenv";
// import hkdf from "futoin-hkdf";

// config({});
// export const SUI_NETWORK = process.env.SUI_NETWORK as string;
// export const assetTokenizationPackageId = process.env.ASSET_TOKENIZATION_PACKAGE_ID as string;
// export const publisher = process.env.ASSET_PUBLISHER as string;
// export const adminPhrase = process.env.OWNER_MNEMONIC_PHRASE as string;
// export const HOUSE_ADMIN_CAP = process.env.HOUSE_ADMIN_CAP as string;

// const keys = Object.keys(process.env);
// console.log(
//   "env contains OWNER_MNEMONIC_PHRASE:",
//   keys.includes("OWNER_MNEMONIC_PHRASE")
// );


// export function deriveBLS_SecretKey(private_key: string): Uint8Array {
//   // initial key material
//   const ikm = private_key;
//   const length = 32;
//   const salt = "blackjack";
//   const info = "bls-signature";
//   const hash = 'SHA-256';
//   const derived_sk = hkdf(ikm, length, {salt, info, hash});
//   return Uint8Array.from(derived_sk);
// }

 const CALLER_MNEMONIC =
  "found term chuckle harvest comfort system left only autumn pet apology riot";
const TREASURY_CAP =
  "0x1318a8ed847a864caa22e7cef72da55497bcd61be6331860a57320ec4dab5925";
const ACOIN_PACKAGE_ID  =
  "0x231d6a9ae841f2bfac7e3e73eee2d3812d0f20b17059ed1fa9c6e0eb2bfb0b34";