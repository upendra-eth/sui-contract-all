const { getFullnodeUrl, SuiClient, } = require("@mysten/sui.js/client");

const client = new SuiClient({
	url: getFullnodeUrl('testnet'),
});

async function main(){
    // You can also fetch package details 
const txns = await client.getObject({
	id: '0x981c6a1977b82746465e1cb5c7eec3dbd0abbf72716107f41f107d5ad6598b5e', //this is package id 
    // fetch the object content field
	options: { showContent: true },
});

const coinType = txns.data
console.log("yyyyyyyyyyyyyyyyyyyyy",coinType.content.disassembled);
    const coins = await client.getCoins({
        owner: '0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237',
        coinType: '0x981c6a1977b82746465e1cb5c7eec3dbd0abbf72716107f41f107d5ad6598b5e::mycoin::MYCOIN',
    });
console.log("MYCOIN owned by the address - 0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237",coins)
}
main();