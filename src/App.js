import "./index.css"
import "./reset.css"
import TextWithBar from "./components/TextWithBar";
import IconAndPresentation from "./components/IconAndPresentation";
import img from "./image/Market launch-amico.svg"
import data from "./data/Data";
import ArrowScroll from "./components/ArrowScroll";

function App() {


    return (
        <>
            <div className="page1 bg-black relative h-screen text-white flex font-sans">
                <TextWithBar title="Portfolio ." date="2022"/>
                <div className=" absolute top-1/2 left-1/2 -translate-y-3/4  -translate-x-2/4">
                    <IconAndPresentation firstName={data.firstName} work={data.work}
                                         hearderSubTitle={data.hearderSubTitle}/>
                </div>
                <ArrowScroll/>
            </div>
            <div className="page2 bg-black text-white h-screen relative font-sans">
                <TextWithBar title="Sommaire"/>
                <ArrowScroll/>

                <div
                    className="mx-auto flex relative items-center flex-col top-20 tablet:top-4 tablet:flex-col laptop:flex-row laptop:left-1/2 laptop:-translate-x-1/2 laptop:flex-wrap laptop:top-1/2 laptop:mx-auto laptop:-translate-y-1/2 laptop:absolute laptop:w-full laptop:justify-between">
                    <div className="md:w-1/3 md:ml-40 ">
                        <p className="text-sm leading-8   md:text-2xl md:leading-14">0 - À propos de moi </p>
                        <p className="text-sm leading-8   md:text-2xl md:leading-14">1 - Compétences </p>
                        <p className="text-sm leading-8   md:text-2xl md:leading-14">2 - Réalisation </p>
                        <p className="text-sm leading-8   md:text-2xl md:leading-14">3 - Contact </p>
                    </div>
                    <figure className="md:w-2/4 hidden tablet:hidden laptop:block ">
                        <img src={img} alt="img" className="md:w-128"/>
                    </figure>

                </div>
            </div>
            <div className="page3 text-black h-screen relative font-sans laptop:px-20 ">
                <div className="flex flex-col laptop:items-center laptop:mb-16 laptop:flex-row">
                    <IconAndPresentation firstName={data.firstName} work={data.work}/>
                    <p className="px-6 text-sm mt-5 laptop:text-2xl laptop:w-1/2 laptop:ml-10">Je suis un développeur junior qui rêve de devenir un développeur
                        full stack. Actuellement,
                        j'étudie à HETIC</p>
                </div>
                { /*Logo*/}
                <div className="mt-5 laptop:flex laptop:row laptop:shrink-0">
                    <div className="laptop:w-1/3 laptop:flex laptop:flex-col">
                        <h3 className="pl-6 laptop:pl-0">Stack technique</h3>
                        <div className="grid grid-cols-3 place-items-center px-6 laptop:mt-16">
                            {data.Logo.map((data) => (

                                <img src={data.logo} alt="logo" key={data.id} className="w-12 mt-3 laptop:w-16"/>
                            ))}
                        </div>
                    </div>
                    {/*Experience PRO*/}
                    <div className="px-6 mt-10 laptop:w-1/3 laptop:mt-0">
                        <h3 className="mb-3">Expériences professionnelles</h3>

                        {data.xpPro.map(data => (
                            <div className="bg-zinc-100  mb-4 p-3">
                                <p className="mb-1"> {data.entreprise}</p>
                                <p className="mb-1">{data.date}</p>
                                <p className="mb-1">{data.titleJob}</p>
                            </div>
                        ))}

                    </div>

                    {/* Formation*/}
                    <div className="px-6 mt-10 laptop:w-1/3 laptop:mt-0">
                        <h3 className="mb-3">Formation</h3>

                        {data.Degree.map(data => (
                            <div className="bg-zinc-100  mb-4 p-3">
                                <p className="mb-1"> {data.degreeSchool}</p>
                                <p className="mb-1">{data.degreeTitle}</p>
                                <p className="mb-1">{data.degreeDate}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <ArrowScroll/>
            </div>
        </>
    );
}

export default App;
