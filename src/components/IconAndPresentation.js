import nohamIconeHey from "../image/Frame 24.png"

function IconAndPresentation(props) {
    return (
        <div className=" flex flex-col items-center  md:flex-row ">
            <img src={nohamIconeHey} alt="test" className="w-32 md:w-48"/>
            <div className=" mt-4 md:mt-0 md:ml-5">
                <p className="text-sm md:text-3xl font-bold">Salut! Je suis {props.firstName}</p>
                <p className="text-xs md:text-2xl">{props.work}</p>
                <p className="text-xs md:text-2xl ">{props.hearderSubTitle}</p>
            </div>
        </div>
    );
}

export default IconAndPresentation;