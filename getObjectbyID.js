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

const zerothObject = objects.data[0];
console.log("Objects owned by the address - 0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237",zerothObject)

const txn = await client.getObject({
	id: zerothObject.data.objectId,
	// fetch the object content field
	options: { showContent: true },
});

console.log("Object content field- 0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231",txn)

// You can also fetch multiple objects in one batch request
const txns = await client.getObject({
	id: '0x981c6a1977b82746465e1cb5c7eec3dbd0abbf72716107f41f107d5ad6598b5e',
    // fetch the object content field
	options: { showContent: true },
});
console.log("package id    -------- 0x981c6a1977b82746465e1cb5c7eec3dbd0abbf72716107f41f107d5ad6598b5e",txns , txns.data.content.disassembled);
}
main();
