import "./index.css"
import "./reset.css"
import TextWithBar from "./components/TextWithBar";
import IconAndPresentation from "./components/IconAndPresentation";
import data from "./data/data";

function App() {
    return (
        <>
            <div className="page1 bg-black h-screen text-white flex font-sans">
                <TextWithBar/>
                <IconAndPresentation firstName={data.firstName} work={data.work} hearderSubTitle={data.hearderSubTitle}/>
            </div>
            <div className="page2 bg-black text-white h-screen">
                    <p> lolilol</p>
            </div>
        </>
    );
}

export default App;
