/*import contract from "contracts/BlazinBuffaloes.json";
import { ethers } from "ethers";

const contractAddress = "0xF2dC7665A10286BDed61eD0Da88BF946E1Ecd154";
const abi = contract.abi;

export const checkWallet = async () => {
	const { ethereum } = window;

	if (!ethereum) {
		console.log("Make sure you have Metamask installed!");
		return;
	} else {
		console.log("Wallet exists! We're ready to go!");
	}

	const accounts = await ethereum.request({ method: "eth_accounts" });

	if (accounts.length > 0) {
		console.log("found account");
		return accounts[0];
	} else {
		console.log("No authorized account found");
		return null;
	}
};

export const connectWallet = async () => {
	const { ethereum } = window;

	if (!ethereum) {
		alert("Please install Metamask!");
	}

	try {
		const accounts = await ethereum.request({
			method: "eth_requestAccounts",
		});
		return accounts[0];
	} catch (err) {
		console.log(err);
	}
};

export const mint = async () => {
	try {
		const { ethereum } = window;

		if (ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const nftContract = new ethers.Contract(contractAddress, abi, signer);

			console.log("Initialize payment");
			let nftTxn = await nftContract.mintBuffalo(1, {
				value: ethers.utils.parseEther("0.025"),
			});

			console.log("Mining... please wait");
			await nftTxn.wait();

			console.log(
				`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
			);
		} else {
			console.log("Ethereum object does not exist");
		}
	} catch (err) {
		console.log(err);
	}
};
*/