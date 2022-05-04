import "./index.css"
import "./reset.css"
import TextWithBar from "./components/TextWithBar";
import IconAndPresentation from "./components/IconAndPresentation";
import img from "./image/Market launch-amico.svg"
import data from "./data/data";
import ArrowScroll from "./components/ArrowScroll";

function App() {
    return (
        <>
            <div className="page1 bg-black h-screen text-white flex font-sans">
                <TextWithBar title="Portfolio ." date="2022"/>
                <IconAndPresentation firstName={data.firstName} work={data.work} hearderSubTitle={data.hearderSubTitle}/>
                <ArrowScroll />
            </div>
            <div className="page2 bg-amber-400 text-white h-screen relative font-sans">
                <TextWithBar title="Sommaire"/>
                <ArrowScroll />

                <div className="md:pl-40 md:pt-20 flex relative items-center flex-col top-28 ">
                    <div className="">
                        <p className="text-sm leading-8   " >0 - À propos de moi </p>
                        <p className="text-sm leading-8   ">1 - Compétences  </p>
                        <p className="text-sm leading-8   ">2 - Réalisation </p>
                        <p className="text-sm leading-8   ">3 - Contact </p>
                    </div>
                        <img src={img} alt="img" className="w-2/6 hidden relative"/>

                </div>
            </div>
        </>
    );
}

export default App;
