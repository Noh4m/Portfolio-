import "./index.css"
import "./reset.css"
import "./ArrowScroll.css"
import Cover from "./components/Cover";
import Summary from "./components/Summary";
import About from "./components/About";
import Work from "./components/Work";
import {Helmet} from "react-helmet";

function App() {

	
	return (
		<div className="PageContainer">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Noham Portfolio</title>
			</Helmet>
			<Cover />
			<Summary />
			<About />
			<Work />
		</div>
	);
}

export default App;
