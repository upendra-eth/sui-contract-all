const { getFullnodeUrl, SuiClient, } = require("@mysten/sui.js/client");

const client = new SuiClient({
	url: getFullnodeUrl('testnet'),
});

async function main(){
    const mycoins = await client.getCoins({
        owner: '0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237',
        coinType: '0x981c6a1977b82746465e1cb5c7eec3dbd0abbf72716107f41f107d5ad6598b5e::mycoin::MYCOIN',
    });

    const Suicoins = await client.getCoins({
        owner: '0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237',
        coinType: '0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI',
    });
console.log("MYCOIN owned by the address - 0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237",mycoins)
console.log("SUI COIN owned by the address - 0x269c69dd8a34fc115f972656a6d3356a528a617a461446dc8c7abd5705db1237",Suicoins)

}
main();