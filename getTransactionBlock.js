const { getFullnodeUrl, SuiClient, } = require("@mysten/sui.js/client");

const client = new SuiClient({
	url: getFullnodeUrl('testnet'),
});

async function main(){
    
    const txn = await client.getTransactionBlock({
	digest: 'Db5Va8DEMSF98EhRJywGfjDt5QmDXTB1Sg1DrsjkQCKu',
	// only fetch the effects field
	options: {
		showEffects: true,
		showInput: false,
		showEvents: false,
		showObjectChanges: false,
		showBalanceChanges: false,
	},
});
}
main()



