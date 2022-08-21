import "./index.css"
import "./reset.css"
import IconAndPresentation from "./components/IconAndPresentation";
import data from "./data/Data";
import GridProject from "./components/GridProject";
import "./ArrowScroll.css"
import Cover from "./components/Cover";
import Summary from "./components/Summary";

function App() {


    return (
        <>
            <Cover />
            <Summary />
            <div className="page3 text-black h-screen relative font-sans laptop:container laptop:mx-auto">
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
            </div>

            <div className="page4 container mx-auto px-6 text-black h-screen relative font-sans">
                <div className="pt-11">
                    <h2 className="text-5xl mb-6">Réalisations</h2>
                    <GridProject />
                </div>

            </div>
        </>
    );
}

export default App;
