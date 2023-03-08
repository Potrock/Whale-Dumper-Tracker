import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

main();

async function main() {
	const client = createPublicClient({
		chain: mainnet,
		transport: http(
			"https://eth-mainnet.g.alchemy.com/v2/egkFrpvti67RhylHuUvYLNZkt-nEoXYo"
		),
	});

	const blockNumber = await client.getBlockNumber();

	console.log(blockNumber);
}
