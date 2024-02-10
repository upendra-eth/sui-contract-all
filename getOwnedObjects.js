// ## Reading APIs

// ### Get Owned Objects

// Fetch objects owned by the address
// `0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231`

const { getFullnodeUrl, SuiClient, } = require("@mysten/sui.js/client");

const client = new SuiClient({
	url: getFullnodeUrl('testnet'),
});

async function main(){
const objects = await client.getOwnedObjects({
	owner: '0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237',
});
console.log("Objects owned by the address - 0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237",objects.data)
}
main();
