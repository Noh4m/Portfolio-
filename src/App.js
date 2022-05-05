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
            <div className="page2 bg-black text-white h-screen relative font-sans">
                <TextWithBar title="Sommaire"/>
                <ArrowScroll />

                <div className="container mx-auto flex relative items-center flex-col top-20 tablet:top-4 tablet:flex-col laptop:flex-row laptop:left-1/2 laptop:-translate-x-1/2 laptop:flex-wrap laptop:top-1/2 laptop:mx-auto laptop:-translate-y-1/2 laptop:absolute laptop:w-full laptop:justify-between">
                    <div className="md:w-1/3 md:ml-40 ">
                        <p className="text-sm leading-8   md:text-2xl md:leading-14" >0 - À propos de moi </p>
                        <p className="text-sm leading-8   md:text-2xl md:leading-14">1 - Compétences  </p>
                        <p className="text-sm leading-8   md:text-2xl md:leading-14">2 - Réalisation </p>
                        <p className="text-sm leading-8   md:text-2xl md:leading-14">3 - Contact </p>
                    </div>
                    <figure className="md:w-2/4 hidden tablet:hidden laptop:block ">
                        <img src={img} alt="img" className="md:w-128"/>
                    </figure>

                </div>
            </div>
        </>
    );
}

export default App;
