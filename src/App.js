import "./index.css"
import "./reset.css"
import "./ArrowScroll.css"
import Cover from "./components/Cover";
import Summary from "./components/Summary";
import About from "./components/About";
import Work from "./components/Work";

function App() {


	return (
		<div className="PageContainer">
			<Cover />
			<Summary />
			<About />
			<Work />
		</div>
	);
}

export default App;
