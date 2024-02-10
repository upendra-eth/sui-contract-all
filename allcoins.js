// import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
// import { getFaucetHost, requestSuiFromFaucetV0 } from '@mysten/sui.js/faucet';
// import { MIST_PER_SUI } from '@mysten/sui.js/utils';

const { getFullnodeUrl, SuiClient } = require("@mysten/sui.js/client");
const {
  getFaucetHost,
  requestSuiFromFaucetV0,
} = require("@mysten/sui.js/faucet");
const { MIST_PER_SUI } = require("@mysten/sui.js/utils");
// use getFullnodeUrl to define Devnet RPC location
const rpcUrl = getFullnodeUrl('testnet');

// create a client connected to devnet
const client = new SuiClient({ url: rpcUrl });
// replace <YOUR_SUI_ADDRESS> with your actual address, which is in the form 0x123...
const MY_ADDRESS =
  "0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237";

async function main() {
 

 
 
// get coins owned by an address
// replace <OWNER_ADDRESS> with actual address in the form of 0x123...
const suiAfter = await client.getAllCoins ({
	owner:MY_ADDRESS,
});

  // Output result to console.
  console.log( suiAfter);
}

main();
