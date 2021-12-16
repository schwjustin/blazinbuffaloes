import "./styles/app.scss";
import buffalo from './assets/blazinbuffalo.svg'

function App() {
	return (
		<div class="content">
			<div class="titleContent">
				<h1>BlazinBuffaloes</h1>
				<h2>Stampeding Soon</h2>
			</div>
			<img
				class="logo"
				src={buffalo}
				alt="Blazin Buffalo NFT Graphic"
			></img>
		</div>
	);
}

export default App;
