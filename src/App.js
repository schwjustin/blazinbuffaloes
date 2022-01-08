import { useEffect, useState } from "react";
import React, { Component }  from 'react';
import "styles/App.scss";
import * as contractUtils from "utils/ContractUtil";
import Tilt from 'react-parallax-tilt';
// import {checkWallet } from "utils/ContractUtil";

function importAll(r) {
	let images = {};
	r.keys().map((item, _) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const assets = importAll(
	require.context("assets", false, /\.(png|jpe?g|svg)$/)
);

function App() {
	const [currAccount, setCurrAccount] = useState(null);
	const [mintLabelActive, setMintActive] = useState(false);

	const contractButton = () => {
		return (
			<button
				onClick={async () =>
					currAccount
						? setCurrAccount(contractUtils.mint)
						: contractUtils.connectWallet
				}
				className="contractButton"
			>
				{currAccount ? "Mint NFT" : "COnnect"}
			</button>
		);
	};

	const connectWalletButton = () => {
		return (
			<button
				onClick={contractUtils.connectWallet}
				className="cta-button connect-wallet-button"
			>
				Connect Wallet
			</button>
		);
	};

	const mintNftButton = () => {
		return (
			<button
				onClick={contractUtils.mint}
				className="cta-button mint-nft-button"
			>
				Mint NFT
			</button>
		);
	};

	//   toggleMintClass() {

	//   }

	useEffect(async () => {
		const account = await contractUtils.checkWallet();
		setCurrAccount(account);
	}, []);

	return (
		<div class="content">
			<div class="hero">
				<div class="container">
					<div class="bar top-bar">
						<p>@BLAZINBUFFALOES</p>
						<div class="socials">
							<a href="https://discord.com/invite/ezCzNwfNg3">
								<img src={assets["discord.png"]}></img>
							</a>
							<a href="https://instagram.com/blazinbuffaloes/">
								<img src={assets["insta.png"]}></img>
							</a>
							<a href="https://twitter.com/blazinbuffaloes/">
								<img src={assets["twitter.png"]}></img>
							</a>
						</div>
						{/* <p>NFT COLLECTION</p> */}
					</div>
					<div class="titleContent">
						<img
							class="logotype"
							src={assets["logotype.png"]}
							alt="BlazinBuffaloes"
						></img>

						{/* <h1>BlazinBuffaloes</h1> */}
						<h2>1,000 Piece NFT Collection</h2>
					</div>
					{/* <img class="logo" src={assets["bzbf.png"]} alt="BlazinBuffalo NFT Graphic"></img>
					 */}

					{/* <div class="image-section">
				<img class="" src={assets["sky-storm.png"]} alt="BlazinBuffalo NFT Graphic"></img>
				<img class="" src={assets["tuscany-lime.png"]} alt="BlazinBuffalo NFT Graphic"></img>
				<img class="" src={assets["scarlet-apricot.png"]} alt="BlazinBuffalo NFT Graphic"></img>
				<img class="" src={assets["violet.png"]} alt="BlazinBuffalo NFT Graphic"></img>
				<img class="" src={assets["fuschia-scarlet.png"]} alt="BlazinBuffalo NFT Graphic"></img>
			</div> */}

					<div class="hero-image"></div>

					<a href="https://discord.com/invite/ezCzNwfNg3" class="discord-link">
						<span>
							<svg
								class="join-discord"
								width="80"
								height="80"
								viewBox="0 0 80 80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z"
									fill="white"
								/>
								<g clip-path="url(#clip0_463_384)">
									<path
										d="M51.5513 29.3888C49.4268 28.414 47.1485 27.6958 44.7664 27.2844C44.7231 27.2765 44.6797 27.2963 44.6574 27.336C44.3644 27.8572 44.0398 28.537 43.8125 29.0714C41.2505 28.6878 38.7016 28.6878 36.192 29.0714C35.9647 28.5251 35.6284 27.8572 35.3341 27.336C35.3117 27.2977 35.2684 27.2778 35.225 27.2844C32.8442 27.6945 30.566 28.4127 28.4401 29.3888C28.4217 29.3968 28.4059 29.41 28.3955 29.4272C24.0741 35.8833 22.8903 42.1806 23.471 48.3999C23.4736 48.4303 23.4907 48.4595 23.5144 48.478C26.3655 50.5718 29.1273 51.8429 31.8378 52.6854C31.8812 52.6987 31.9271 52.6828 31.9548 52.6471C32.5959 51.7715 33.1675 50.8482 33.6575 49.8773C33.6864 49.8205 33.6588 49.753 33.5997 49.7305C32.6932 49.3866 31.8299 48.9673 30.9995 48.4912C30.9339 48.4528 30.9286 48.3589 30.989 48.3139C31.1638 48.183 31.3386 48.0467 31.5054 47.9092C31.5356 47.8841 31.5777 47.8788 31.6132 47.8946C37.0684 50.3853 42.9743 50.3853 48.3651 47.8946C48.4006 47.8774 48.4427 47.8827 48.4742 47.9079C48.6411 48.0454 48.8158 48.183 48.9919 48.3139C49.0523 48.3589 49.0484 48.4528 48.9827 48.4912C48.1523 48.9766 47.2891 49.3866 46.3812 49.7292C46.3221 49.7517 46.2958 49.8205 46.3247 49.8773C46.8253 50.8469 47.3968 51.7701 48.0262 52.6457C48.0525 52.6828 48.0997 52.6987 48.1431 52.6854C50.8668 51.8429 53.6286 50.5718 56.4797 48.478C56.5047 48.4595 56.5204 48.4317 56.5231 48.4012C57.2181 41.2111 55.3589 34.9653 51.5947 29.4285C51.5855 29.41 51.5697 29.3968 51.5513 29.3888ZM34.4722 44.613C32.8298 44.613 31.4765 43.1052 31.4765 41.2534C31.4765 39.4016 32.8035 37.8938 34.4722 37.8938C36.1539 37.8938 37.4941 39.4149 37.4678 41.2534C37.4678 43.1052 36.1408 44.613 34.4722 44.613ZM45.5482 44.613C43.9058 44.613 42.5525 43.1052 42.5525 41.2534C42.5525 39.4016 43.8795 37.8938 45.5482 37.8938C47.23 37.8938 48.5701 39.4149 48.5439 41.2534C48.5439 43.1052 47.23 44.613 45.5482 44.613Z"
										fill="#5865F2"
									/>
								</g>
								<g class="circular-text">
									<path
										d="M68.2345 42.7158C68.3121 42 68.5693 41.4512 69.0064 41.0694C69.4426 40.6942 70.0121 40.5447 70.7146 40.6208L71.3708 40.6919L71.2286 42.0042L70.5724 41.9331C70.2609 41.8994 70.0063 41.959 69.8087 42.1119C69.6177 42.2656 69.5053 42.4981 69.4716 42.8097C69.44 43.1013 69.5017 43.336 69.6568 43.5137C69.8112 43.6981 70.0474 43.8075 70.3656 43.842L74.044 44.2406L74.1733 43.0476L75.3663 43.1768L75.0087 46.4775L73.8156 46.3482L73.9018 45.5529L70.2234 45.1543C69.5009 45.076 68.9687 44.8205 68.6266 44.3878C68.2912 43.9558 68.1605 43.3985 68.2345 42.7158Z"
										fill="#272727"
									/>
									<path
										d="M66.8718 49.0939C67.1529 48.26 67.6039 47.6734 68.2249 47.3339C68.8521 46.9966 69.5922 46.9717 70.4451 47.2592L72.037 47.7958C72.8899 48.0833 73.4607 48.5501 73.7494 49.1962C74.0445 49.8444 74.0515 50.5855 73.7704 51.4194C73.4893 52.2533 73.0351 52.8389 72.4078 53.1762C71.7869 53.5156 71.05 53.5416 70.1971 53.2541L68.6052 52.7174C67.7523 52.43 67.1783 51.9621 66.8833 51.3139C66.5945 50.6678 66.5907 49.9278 66.8718 49.0939ZM67.99 49.4709C67.8324 49.9383 67.8458 50.3474 68.0301 50.698C68.2144 51.0485 68.534 51.3005 68.9889 51.4538L70.6567 52.016C71.1115 52.1693 71.5184 52.1623 71.8774 51.9948C72.2364 51.8274 72.4946 51.5099 72.6522 51.0424C72.8077 50.5813 72.7943 50.1722 72.6121 49.8153C72.4278 49.4648 72.1082 49.2128 71.6533 49.0595L69.9855 48.4973C69.5307 48.344 69.1237 48.351 68.7648 48.5185C68.4037 48.6922 68.1454 49.0097 67.99 49.4709Z"
										fill="#272727"
									/>
									<path
										d="M65.5553 52.6472L71.758 55.8916L71.1462 57.0613L64.9435 53.8169L65.5553 52.6472Z"
										fill="#272727"
									/>
									<path
										d="M64.4682 54.8626L70.0835 59.0421L68.5848 61.0556L62.8616 58.5285L62.7541 58.6729L67.6474 62.315L66.8712 63.3579L61.2559 59.1784L62.7546 57.1649L68.4779 59.692L68.5853 59.5476L63.692 55.9054L64.4682 54.8626Z"
										fill="#272727"
									/>
									<path
										d="M58.8463 61.5606L59.5218 62.5037L58.7739 63.0394L61.4992 66.844L62.2471 66.3083L62.9226 67.2513L60.5813 68.9284C59.8171 69.4758 59.0974 69.6961 58.4223 69.5893C57.7456 69.4917 57.1336 69.0609 56.5862 68.2967L55.8175 67.2236C55.2701 66.4594 55.0572 65.7386 55.1787 65.0611C55.2987 64.3929 55.7408 63.7851 56.505 63.2377L58.8463 61.5606ZM57.7241 63.8406L57.1875 64.2249C56.754 64.5355 56.5184 64.8764 56.481 65.2477C56.4435 65.6189 56.5723 66.0105 56.8673 66.4224L57.6826 67.5606C57.9815 67.9779 58.3108 68.2258 58.6705 68.3044C59.0341 68.3884 59.4327 68.2751 59.8662 67.9645L60.4028 67.5802L57.7241 63.8406Z"
										fill="#272727"
									/>
									<path
										d="M53.2819 65.2312L56.4108 71.493L55.23 72.083L52.1011 65.8213L53.2819 65.2312Z"
										fill="#272727"
									/>
									<path
										d="M48.4717 67.0741C48.9866 66.9113 49.4702 66.8597 49.9226 66.9194C50.375 66.9792 50.7667 67.1455 51.0977 67.4184C51.4287 67.6913 51.6706 68.0693 51.8234 68.5523L51.9078 68.8193L50.6683 69.2113L50.5839 68.9443C50.4573 68.5438 50.2378 68.2811 49.9256 68.1561C49.6154 68.0374 49.2474 68.0454 48.8215 68.1801C48.3892 68.3168 48.0954 68.5041 47.9399 68.7421C47.778 68.982 47.7393 69.2355 47.8237 69.5025C47.882 69.6868 47.9833 69.8191 48.1275 69.8993C48.2654 69.9816 48.4471 70.0255 48.6726 70.0311C48.8938 70.0451 49.1575 70.0386 49.4636 70.0117L49.698 69.9901C50.1878 69.9471 50.6221 69.9496 51.0009 69.9976C51.3753 70.054 51.6917 70.1812 51.9501 70.3792C52.2021 70.5791 52.3924 70.8825 52.5211 71.2894C52.6497 71.6962 52.6639 72.0727 52.5637 72.4191C52.4591 72.7738 52.2561 73.0827 51.9548 73.3458C51.649 73.6173 51.2578 73.8284 50.7811 73.9791C50.3044 74.1299 49.8555 74.1809 49.4346 74.1322C49.0093 74.0919 48.6405 73.9428 48.3283 73.685C48.0116 73.4355 47.7769 73.0692 47.6242 72.5861L47.5337 72.3001L48.7732 71.9081L48.8637 72.1942C48.9441 72.4484 49.0593 72.6358 49.2092 72.7562C49.3548 72.8849 49.5308 72.9551 49.7373 72.9667C49.9457 72.9847 50.1771 72.9535 50.4313 72.8731C50.8127 72.7525 51.0725 72.59 51.2106 72.3855C51.3443 72.1894 51.372 71.9674 51.2936 71.7194C51.2414 71.5542 51.1558 71.4274 51.037 71.3391C50.9119 71.2528 50.7514 71.1987 50.5557 71.1767C50.3599 71.1547 50.1195 71.1573 49.8344 71.1845L49.6001 71.2062C49.0912 71.2552 48.6368 71.2556 48.2369 71.2072C47.8307 71.1609 47.4879 71.0385 47.2084 70.8402C46.929 70.6419 46.7249 70.3394 46.5963 69.9326C46.4677 69.5257 46.459 69.1334 46.5702 68.7556C46.6772 68.3862 46.8932 68.0522 47.2183 67.7536C47.539 67.4634 47.9569 67.2369 48.4717 67.0741Z"
										fill="#272727"
									/>
									<path
										d="M42.3453 68.2655C43.2085 68.1887 43.9138 68.3669 44.461 68.8002C45.0087 69.24 45.3225 69.9082 45.4022 70.8047L45.551 72.4781C45.6308 73.3745 45.4396 74.0842 44.9774 74.6072C44.5158 75.1369 43.8534 75.4401 42.9902 75.5168C42.1335 75.593 41.4519 75.4161 40.9451 74.9859C40.4323 74.563 40.1396 73.9432 40.0669 73.1264L40.0616 73.0666L41.3565 72.9515L41.3654 73.0511C41.402 73.4628 41.5483 73.7911 41.8043 74.0361C42.0537 74.2816 42.4142 74.3834 42.8856 74.3415C43.3505 74.3001 43.703 74.1249 43.9432 73.8157C44.1834 73.5066 44.2817 73.1063 44.238 72.6149L44.0856 70.9017C44.0425 70.4169 43.8752 70.0403 43.5836 69.7717C43.2926 69.5098 42.9146 69.3995 42.4498 69.4408C41.9783 69.4828 41.6415 69.6466 41.4394 69.9323C41.2312 70.2252 41.1451 70.5742 41.1811 70.9793L41.197 71.1586L39.9022 71.2737L39.8898 71.1343C39.8171 70.3175 39.9956 69.6524 40.4251 69.139C40.8486 68.6328 41.4887 68.3416 42.3453 68.2655Z"
										fill="#272727"
									/>
									<path
										d="M36.135 68.0995C37.0074 68.2145 37.6701 68.5439 38.1229 69.0877C38.5749 69.6381 38.7421 70.3595 38.6245 71.2517L38.4051 72.9173C38.2875 73.8096 37.9396 74.4598 37.3614 74.8677C36.7823 75.2823 36.0565 75.4321 35.184 75.3172C34.3116 75.2022 33.6493 74.8695 33.1974 74.3191C32.7445 73.7753 32.5769 73.0572 32.6944 72.165L32.9139 70.4993C33.0315 69.6071 33.3798 68.9536 33.9589 68.5391C34.5372 68.1311 35.2625 67.9846 36.135 68.0995ZM35.9808 69.2694C35.4917 69.205 35.093 69.297 34.7845 69.5455C34.4761 69.794 34.2905 70.1562 34.2278 70.6321L33.9979 72.377C33.9352 72.8529 34.0206 73.2508 34.2542 73.5707C34.4877 73.8907 34.8491 74.0828 35.3382 74.1473C35.8207 74.2108 36.2194 74.1188 36.5345 73.8712C36.8429 73.6227 37.0285 73.2605 37.0912 72.7846L37.3211 71.0397C37.3838 70.5638 37.2984 70.1659 37.0648 69.846C36.8247 69.5252 36.4633 69.333 35.9808 69.2694Z"
										fill="#272727"
									/>
									<path
										d="M32.4393 67.5925L30.0295 74.1646L27.1753 73.1181C26.7622 72.9666 26.4287 72.7626 26.1748 72.5062C25.9209 72.2498 25.7576 71.9592 25.685 71.6343C25.6124 71.3095 25.6415 70.9686 25.7723 70.6119L25.8137 70.4992C25.9582 70.1049 26.1692 69.8201 26.4465 69.6448C26.7238 69.4696 27.0208 69.3761 27.3375 69.3644L27.3994 69.1954C27.1537 69.0911 26.9918 68.9323 26.9137 68.7191C26.8334 68.5121 26.8414 68.2772 26.9378 68.0143L27.7262 65.8643L28.9655 66.3187L28.2426 68.2904C28.1875 68.4406 28.1834 68.5776 28.2303 68.7013C28.271 68.8227 28.3821 68.9167 28.5636 68.9833L30.2912 69.6167L31.2 67.1381L32.4393 67.5925ZM29.878 70.7434L28.3946 70.1994C28.1005 70.0916 27.8433 70.086 27.6232 70.1828C27.3945 70.2836 27.232 70.4654 27.1356 70.7283L27.1012 70.8222C27.0048 71.0851 27.0093 71.3246 27.1146 71.5408C27.2177 71.7632 27.4194 71.9295 27.7199 72.0396L29.2033 72.5836L29.878 70.7434Z"
										fill="#272727"
									/>
									<path
										d="M26.9491 65.5048L26.3192 66.4789L25.5467 65.9794L23.0055 69.9094L23.778 70.4089L23.1481 71.383L20.7297 69.8192C19.9404 69.3088 19.4717 68.7199 19.3236 68.0526C19.1664 67.3872 19.3429 66.6599 19.8534 65.8705L20.5701 64.7621C21.0805 63.9727 21.6732 63.5104 22.3481 63.3752C23.0138 63.242 23.7413 63.4306 24.5307 63.941L26.9491 65.5048ZM24.4165 65.2962L23.8623 64.9379C23.4144 64.6483 23.0109 64.554 22.6517 64.6552C22.2926 64.7564 21.9754 65.0198 21.7003 65.4452L20.9401 66.6209C20.6614 67.0519 20.5514 67.4492 20.6101 67.8126C20.6652 68.1817 20.9166 68.511 21.3645 68.8006L21.9187 69.159L24.4165 65.2962Z"
										fill="#272727"
									/>
								</g>
								<g class="circular-text">
									<path
										d="M11.7656 37.2845C11.6881 38.0003 11.4308 38.5491 10.9938 38.9309C10.5575 39.3061 9.98806 39.4557 9.2855 39.3795L8.62934 39.3084L8.77155 37.9961L9.42771 38.0672C9.73922 38.101 9.99378 38.0414 10.1914 37.8884C10.3824 37.7348 10.4948 37.5022 10.5285 37.1907C10.5601 36.8991 10.4984 36.6644 10.3433 36.4866C10.1889 36.3023 9.95269 36.1929 9.63455 36.1584L5.95608 35.7598L5.82681 36.9528L4.63379 36.8235L4.99146 33.5228L6.18447 33.6521L6.09829 34.4475L9.77675 34.8461C10.4992 34.9243 11.0314 35.1798 11.3735 35.6125C11.7089 36.0445 11.8396 36.6018 11.7656 37.2845Z"
										fill="#272727"
									/>
									<path
										d="M13.1283 30.9064C12.8472 31.7403 12.3962 32.327 11.7752 32.6664C11.148 33.0037 10.4079 33.0286 9.55506 32.7411L7.96308 32.2045C7.11023 31.917 6.53943 31.4502 6.25068 30.8042C5.95561 30.1559 5.94862 29.4149 6.22972 28.581C6.51082 27.7471 6.965 27.1615 7.59227 26.8242C8.21323 26.4848 8.95013 26.4588 9.80298 26.7463L11.395 27.2829C12.2478 27.5704 12.8218 28.0382 13.1168 28.6865C13.4056 29.3325 13.4094 30.0725 13.1283 30.9064ZM12.0101 30.5295C12.1677 30.062 12.1544 29.653 11.97 29.3024C11.7857 28.9518 11.4661 28.6999 11.0112 28.5465L9.34343 27.9843C8.88858 27.831 8.48167 27.8381 8.12271 28.0055C7.76376 28.173 7.50548 28.4904 7.3479 28.9579C7.19244 29.4191 7.20582 29.8281 7.38803 30.185C7.57237 30.5356 7.89196 30.7876 8.34682 30.9409L10.0146 31.5031C10.4695 31.6564 10.8764 31.6493 11.2353 31.4819C11.5964 31.3081 11.8547 30.9907 12.0101 30.5295Z"
										fill="#272727"
									/>
									<path
										d="M14.4448 27.3531L8.24209 24.1088L8.85389 22.9391L15.0566 26.1835L14.4448 27.3531Z"
										fill="#272727"
									/>
									<path
										d="M15.5319 25.1378L9.91663 20.9583L11.4153 18.9448L17.1386 21.4719L17.246 21.3275L12.3527 17.6853L13.1289 16.6425L18.7442 20.822L17.2455 22.8355L11.5223 20.3084L11.4148 20.4528L16.3081 24.0949L15.5319 25.1378Z"
										fill="#272727"
									/>
									<path
										d="M21.1538 18.4397L20.4783 17.4967L21.2262 16.961L18.5009 13.1563L17.753 13.6921L17.0775 12.749L19.4188 11.0719C20.183 10.5246 20.9027 10.3043 21.5778 10.4111C22.2545 10.5086 22.8666 10.9395 23.4139 11.7036L24.1826 12.7767C24.73 13.5409 24.9429 14.2618 24.8214 14.9393C24.7014 15.6075 24.2593 16.2152 23.4951 16.7626L21.1538 18.4397ZM22.276 16.1598L22.8126 15.7754C23.2462 15.4649 23.4817 15.1239 23.5192 14.7527C23.5566 14.3814 23.4279 13.9898 23.1328 13.5779L22.3176 12.4398C22.0186 12.0225 21.6893 11.7745 21.3296 11.696C20.966 11.612 20.5675 11.7253 20.1339 12.0358L19.5973 12.4202L22.276 16.1598Z"
										fill="#272727"
									/>
									<path
										d="M26.7182 14.7691L23.5893 8.50734L24.7701 7.91731L27.899 14.1791L26.7182 14.7691Z"
										fill="#272727"
									/>
									<path
										d="M31.5284 12.9263C31.0135 13.0891 30.5299 13.1406 30.0775 13.0809C29.6251 13.0212 29.2334 12.8549 28.9024 12.582C28.5714 12.3091 28.3295 11.9311 28.1767 11.448L28.0923 11.181L29.3318 10.7891L29.4162 11.0561C29.5429 11.4565 29.7623 11.7192 30.0745 11.8443C30.3847 11.9629 30.7528 11.9549 31.1786 11.8202C31.6109 11.6836 31.9047 11.4962 32.0602 11.2583C32.2221 11.0183 32.2608 10.7649 32.1764 10.4979C32.1181 10.3135 32.0168 10.1813 31.8726 10.101C31.7347 10.0188 31.553 9.97483 31.3275 9.96923C31.1063 9.95526 30.8427 9.96172 30.5365 9.98861L30.3022 10.0103C29.8123 10.0533 29.378 10.0508 28.9993 10.0028C28.6248 9.94636 28.3084 9.81917 28.05 9.62119C27.798 9.4212 27.6077 9.1178 27.479 8.71099C27.3504 8.30418 27.3362 7.9276 27.4364 7.58126C27.541 7.22656 27.744 6.91765 28.0454 6.65455C28.3511 6.38307 28.7423 6.17196 29.219 6.02121C29.6958 5.87046 30.1446 5.81943 30.5655 5.86811C30.9908 5.90843 31.3596 6.05752 31.6719 6.31537C31.9885 6.56485 32.2232 6.93113 32.3759 7.41422L32.4664 7.70026L31.2269 8.09221L31.1364 7.80617C31.056 7.55192 30.9409 7.36459 30.7909 7.2442C30.6453 7.11544 30.4693 7.04524 30.2628 7.03361C30.0544 7.01562 29.823 7.04683 29.5688 7.12723C29.1874 7.24783 28.9276 7.41038 28.7895 7.61487C28.6558 7.81099 28.6281 8.033 28.7065 8.2809C28.7587 8.44617 28.8443 8.57294 28.9631 8.66123C29.0883 8.74751 29.2487 8.80165 29.4445 8.82365C29.6402 8.84566 29.8806 8.84306 30.1657 8.81584L30.4 8.79417C30.9089 8.74512 31.3633 8.74478 31.7632 8.79314C32.1694 8.83949 32.5122 8.96182 32.7917 9.16012C33.0711 9.35842 33.2752 9.66098 33.4038 10.0678C33.5325 10.4746 33.5412 10.8669 33.4299 11.2447C33.323 11.6141 33.1069 11.9481 32.7818 12.2467C32.4611 12.5369 32.0433 12.7634 31.5284 12.9263Z"
										fill="#272727"
									/>
									<path
										d="M37.6548 11.7349C36.7916 11.8117 36.0864 11.6334 35.5392 11.2002C34.9914 10.7603 34.6776 10.0922 34.5979 9.1957L34.4491 7.5223C34.3693 6.62584 34.5606 5.91611 35.0227 5.39312C35.4843 4.86348 36.1467 4.56027 37.01 4.4835C37.8666 4.40732 38.5483 4.5843 39.055 5.01443C39.5678 5.43733 39.8606 6.05717 39.9332 6.87395L39.9385 6.93371L38.6436 7.04887L38.6348 6.94926C38.5982 6.53756 38.4518 6.20923 38.1958 5.96428C37.9464 5.71874 37.586 5.61693 37.1145 5.65886C36.6497 5.7002 36.2971 5.87545 36.0569 6.18462C35.8167 6.49378 35.7184 6.89406 35.7621 7.38545L35.9145 9.09869C35.9576 9.58344 36.1249 9.9601 36.4165 10.2287C36.7076 10.4906 37.0855 10.6009 37.5503 10.5595C38.0218 10.5176 38.3586 10.3538 38.5608 10.0681C38.769 9.77515 38.855 9.42616 38.819 9.02109L38.8031 8.8418L40.098 8.72664L40.1104 8.86609C40.183 9.68286 40.0046 10.348 39.575 10.8614C39.1515 11.3675 38.5115 11.6587 37.6548 11.7349Z"
										fill="#272727"
									/>
									<path
										d="M43.8652 11.9008C42.9927 11.7859 42.33 11.4565 41.8772 10.9127C41.4252 10.3623 41.258 9.6409 41.3756 8.74861L41.595 7.083C41.7126 6.19071 42.0605 5.54059 42.6387 5.13263C43.2179 4.71805 43.9436 4.56824 44.8161 4.68319C45.6886 4.79814 46.3508 5.13083 46.8027 5.68125C47.2556 6.22506 47.4232 6.94311 47.3057 7.8354L47.0862 9.50101C46.9687 10.3933 46.6203 11.0467 46.0412 11.4613C45.463 11.8693 44.7376 12.0158 43.8652 11.9008ZM44.0193 10.7309C44.5084 10.7954 44.9072 10.7033 45.2156 10.4548C45.524 10.2063 45.7096 9.84413 45.7723 9.36824L46.0022 7.62332C46.0649 7.14743 45.9795 6.74953 45.7459 6.42962C45.5124 6.1097 45.1511 5.91752 44.662 5.85308C44.1795 5.78951 43.7807 5.88154 43.4656 6.12918C43.1572 6.37769 42.9716 6.73988 42.9089 7.21577L42.679 8.96069C42.6163 9.43658 42.7018 9.83448 42.9353 10.1544C43.1755 10.4752 43.5368 10.6674 44.0193 10.7309Z"
										fill="#272727"
									/>
									<path
										d="M47.5608 12.4078L49.9706 5.83571L52.8248 6.88228C53.2379 7.03376 53.5714 7.23771 53.8253 7.49413C54.0792 7.75055 54.2425 8.04119 54.3151 8.36604C54.3877 8.69089 54.3586 9.03171 54.2278 9.38848L54.1865 9.50114C54.0419 9.89547 53.8309 10.1803 53.5536 10.3555C53.2764 10.5308 52.9794 10.6242 52.6627 10.6359L52.6007 10.8049C52.8465 10.9092 53.0084 11.068 53.0864 11.2812C53.1667 11.4882 53.1587 11.7231 53.0623 11.986L52.2739 14.136L51.0346 13.6816L51.7576 11.71C51.8126 11.5598 51.8167 11.4228 51.7698 11.2991C51.7291 11.1776 51.618 11.0836 51.4365 11.0171L49.709 10.3836L48.8001 12.8622L47.5608 12.4078ZM50.1221 9.25698L51.6055 9.80092C51.8997 9.90879 52.1568 9.91432 52.3769 9.81752C52.6056 9.71675 52.7681 9.53492 52.8645 9.27204L52.899 9.17815C52.9954 8.91527 52.9909 8.67575 52.8855 8.4596C52.7824 8.23719 52.5807 8.0709 52.2803 7.96073L50.7968 7.41679L50.1221 9.25698Z"
										fill="#272727"
									/>
									<path
										d="M53.051 14.4955L53.6809 13.5214L54.4534 14.021L56.9947 10.091L56.2221 9.59144L56.852 8.61734L59.2704 10.1812C60.0598 10.6916 60.5285 11.2805 60.6765 11.9478C60.8338 12.6131 60.6572 13.3405 60.1468 14.1298L59.43 15.2383C58.9196 16.0276 58.3269 16.4899 57.652 16.6251C56.9863 16.7583 56.2588 16.5697 55.4695 16.0593L53.051 14.4955ZM55.5836 14.7041L56.1378 15.0625C56.5857 15.3521 56.9892 15.4463 57.3484 15.3451C57.7076 15.2439 58.0247 14.9806 58.2998 14.5551L59.06 13.3795C59.3388 12.9484 59.4488 12.5512 59.3901 12.1877C59.335 11.8186 59.0835 11.4893 58.6356 11.1997L58.0814 10.8413L55.5836 14.7041Z"
										fill="#272727"
									/>
								</g>
								<defs>
									<clipPath id="clip0_463_384">
										<rect
											width="33.3333"
											height="25.8216"
											fill="white"
											transform="translate(23.3333 27.0894)"
										/>
									</clipPath>
								</defs>
							</svg>
						</span>
					</a>

					{/* <div>{contractButton()}</div> */}
					<div class="mint-section">
						<div
							class={
								// "mint-label" + (mintLabelActive ? " mint-label-animation" : "")
								"mint-label mint-label-animation"
							}
						>
							Minting will be available on Jan 14th! Presale: 0.05 Eth, Public: 0.1 ETH
						</div>
						<button
							onClick={() => {
								setMintActive(true);
							}}
							className="mint-button"
						>
							Mint Your NFT
						</button>
					</div>

					<div class="bar bottom bottom-bar">
						<p>$BZBF</p>
						<p>ETH BLOCKCHAIN</p>
					</div>
				</div>
			</div>

			<div class="roadmap">
				<p class="story">
					Since ancient times the White Buffalo has been a sacred symbol of hope
					and abundance—find the White Buffalo to bring prosperity to the{" "}
					<span class="meta">metaverse.</span>
				</p>
				<div class="what-container">
					<div class="what">
						<h2>WHAT IS BLAZINBUFFALOES?</h2>
						<p>
							<span class="party">BlazinBuffaloes</span> is a 1,000 piece NFT
							collection that doubles as a membership to both a social club and
							an entrepreneurial club. Owning an NFT will grant you access to
							parties, socials, workshops, networking events, as well as a
							community across different cities! This gives you
							the opportunity to connect, create a new social life, and even
							open up opportunities to invest and do business with others.
						</p>
						<p>
							<span>
								As the project and community grows, so will the perks and rewards for
								BlazinBuffaloes holders.
							</span>
						</p>
						<p>
							Each buffalo is randomly generated with a variety of 64 different
							traits including background, base, horns, hooves, eyes, and up to
							3 accessories. Some traits are rarer than others, making some
							buffaloes more valuable than others.{" "}
							<span>
								The White Buffalo is the rarest of them all with a 1/500 chance
								of being generated.
							</span>
						</p>
						<p>
							After being minted, BlazinBuffaloes can be bought or sold on the{" "}
							<span class="opensea no-under">OpenSea</span> NFT marketplace.
						</p>
						<div></div>
						<p>
							<span>
								All holders will have access to our DAO (Decentralized
								Autonomous Organization) to create and vote on new partnerships,
								roadmap milestones, and more.
							</span>
						</p>
					</div>
				</div>
				{/* <div class="partnerships">
					<div>
					<img src={assets["whitebuff.png"]}></img>
					<img src={assets["tasty.png"]}></img>
					
					</div>
					<h1>PARTNERS</h1>
				</div> */}
				<div class="privileges-container">
					<h1>PRIVILEGES</h1>
					<div class ="privileges">
					<div class="column">
					<Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#6547ff" glarePosition="all"
					glareBorderRadius="1rem"
					tiltMaxAngleX={10} tiltMaxAngleY={10}>
						<div class="card">
							<h2>Parties & Socials </h2>
							<p>Once joining the BlazinBuffaloes community there will be parties and socials organized in cities where members live. These will be fun bar tabs, special access to nightclubs, and opportunities to make friends at socials.</p>
						</div> 
						</Tilt>
						<Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#6547ff" glarePosition="all"
					glareBorderRadius="1rem"
					tiltMaxAngleX={10} tiltMaxAngleY={10}>
						<div class="card">
							<h2>Networking</h2>
							<p>We will be holding in-person and virtual networking events for members. These will be carefully orchestrated events where you can get to know each individual holder and build long-term relationships.</p>
						</div> 
						</Tilt>
						</div>
						<div class="column">
						<Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#6547ff" glarePosition="all"
					glareBorderRadius="1rem"
					tiltMaxAngleX={10} tiltMaxAngleY={10}>
						<div class="card">
							<h2>Workshops & Education</h2>
							<p>We will also bring in world-class speakers to hold mini-conferences around <span>web3, blockchain tech, defi, NFTs,</span> and other topics such as entrepreneurship. This will help build lifelong opportunities to build wealth and capitalize on the largest transfer of wealth in human history.</p>
						</div> 
						</Tilt>
						<Tilt glareEnable={true} glareMaxOpacity={0.6} glareColor="#6547ff" glarePosition="all"
					glareBorderRadius="1rem"
					tiltMaxAngleX={10} tiltMaxAngleY={10}>

						<div class="card">
							<h2>Business & Investment Opportunities</h2>
							<p>This will be an opportunity to learn about and build <span>web3 startups</span> with different groups within the community. There will also be opportunities to fund projects within the community to become an investor in <span>the future of the world's industries.</span></p>
						</div> 
						</Tilt>
						</div>
					</div>
				</div>
				<div class="roadmap-container">
					<h1>ROADMAP</h1>
					<div class="quarter done">
						<div class="done-capsule">Q2 2021</div>
						<div class="milestone done milestone-done">
							<h2>I. DESIGN THE COLLECTION</h2>
							<h2>DONE</h2>
							<p>
								Each BlazinBuffalo NFT is made up of multiple graphic layers
								(background, base, horns, etc.). All graphics for the collection
								were carefully designed to be{" "}
								<span>
									pixel-perfect with vibrant solid colors and gradients.
								</span>
							</p>
						</div>
					</div>
					<div class="quarter done">
						<div class="done-capsule">Q3 2021</div>
						<div class="milestone done milestone-done">
							<h2>II. DEVELOP THE SMART CONTRACT</h2>
							<h2>DONE</h2>
							<p>
								The smart contracts of the most popular NFT collections,
								including <span>CryptoPunks</span> and{" "}
								<span>Bored Ape Yacht Club</span>, comply with the ERC721
								standard. Similarly, the{" "}
								<span class="party">BlazinBuffaloes</span> smart contract
								complies with the <span>ERC721 standard.</span>
							</p>
						</div>
					</div>
					<div class="quarter done">
						<div class="progress-capsule">Q4 2021</div>
						<div class="milestone done milestone-progress">
							<h2>III. BUILD THE COMMUNITY</h2>
							<h2>IN PROGRESS</h2>
							<p>
								Currently, we are growing our community on{" "}
								<a href="https://discord.com/invite/ezCzNwfNg3">
									<span class="discord">Discord</span>
								</a>{" "}
								through word of mouth with the help of our friends and families
								and partnerships on{" "}
								<a href="https://twitter.com/blazinbuffaloes/">
									<span class="twitter">Twitter</span>
								</a>
								,{" "}
								<a href="https://instagram.com/blazinbuffaloes/">
									<span class="instagram">
										<u>Instagram</u>
									</span>
								</a>
								, and <span class="tiktok">Tiktok.</span>{" "}
								<span>
									Share our website with your friends to help grow the
									community!
								</span>
							</p>
						</div>
					</div>
					<div class="quarter">
						<div class="capsule">SOON</div>
						<div class="milestone">
							<h2>IV. LAUNCH THE COLLECTION</h2>
							<p>
								<span>
									Minting will be available exclusively on the BlazinBuffaloes
									website soon.
								</span>{" "}
								Create a{" "}
								<a href="https://metamask.io/">
									<span class="metamask">MetaMask</span>
								</a>{" "}
								account to prepare in advance!
							</p>
						</div>
					</div>
					<div class="quarter">
						<div class="capsule">Q1 2022</div>
						<div class="milestone">
							<h2>V. PARTNERSHIPS</h2>
							<p>
								Our current partners are <span>White Buffalo</span> and <span>TastyTabs!</span> We are working on more partnerships for events, venues, and limited
								edition products. Please contact <a href="mailto: hello@blazinbuffaloes.com">hello@blazinbuffaloes.com</a> for partnership inquiries.</p>
						</div>
						<div class="milestone">
							<h2>VI. MERCH DROP</h2>
							<p>
								Merch (t-shirts, hoodies, etc.) will be sent to all holders!
							</p>
						</div>
						<div class="milestone">
							<h2>VII. NFT GALLERY AND AFTER PARTY</h2>
							<p>
								We are partnering with the <span>White Buffalo nightclub</span>{" "}
								in Gainesville, Florida to host an{" "}
								<span>in-person NFT gallery</span> featuring holders'{" "}
								<a href="https://opensea.io/">
									<span class="opensea">OpenSea</span>
								</a>{" "}
								NFT portfolios and an <span class="party">after party!</span>{" "}
								This will be a great opportunity to view, buy, and sell your
								BlazinBuffaloes.
							</p>
						</div>
					</div>
					<div class="quarter">
						<div class="capsule">Q2 2022</div>
						<div class="milestone">
							<h2>VIII. WEB3 CONFERENCE CALL</h2>

							<p>
								Virtual conference call with a leading{" "}
								<span class="web3">Web3</span> <span>guest speaker</span> via
								Zoom. Previously, our founders have hosted virtual conference
								calls with guests including the Chief Ethics Officer at{" "}
								<span class="airbnb">Airbnb</span>, the former VP of Growth at{" "}
								<span class="spotify">Spotify</span>, and the Customer
								Partnerships Lead at{" "}
								<span class="sequoia">Sequoia Capital.</span>
							</p>
						</div>
						<div class="milestone">
							<h2>IX. CAPITAL INVESTMENT</h2>
							<p>
								A portion of the capital raised by the project will be set aside to invest in virtual events or in-person venues to host parties or mini-conferences. <span>This investment and future investments will be voted on by our holder community!</span>
							</p>
						</div>
						<div class="milestone">
							<h2>IX. LAUNCH EXPANDED COLLECTION</h2>
							<p>
								The expanded collection continues the BlazinBuffaloes story with
								a different set of creatures...{" "}
								<span>
									Holders will have exclusive access to the presale whitelist
									for the expanded collection.
								</span>
							</p>
						</div>
					</div>
				</div>
				<div class="footer center-text">
					<h3>© 2021 BlazinBuffaloes</h3>
					<a href="mailto: hello@blazinbuffaloes.com">
						hello@blazinbuffaloes.com
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
