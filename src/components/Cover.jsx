import React from 'react';
import IconAndPresentation from "../components/IconAndPresentation";
import TextWithBar from "../components/TextWithBar";
import ArrowScroll from "../components/ArrowScroll";
import data from "../data/Data";

function Cover(props) {
	return (
		<section className="page1 relative h-screen text-white flex font-sans ">
				<TextWithBar title="Portfolio ." date="2022"/>
				<div className=" absolute top-1/2 left-1/2 -translate-y-3/4  -translate-x-2/4  laptop:left-1/2  laptop:mx-auto">
					<IconAndPresentation firstName={data.firstName} work={data.work}
										 hearderSubTitle={data.hearderSubTitle}/>
				</div>
				<ArrowScroll color="borderWhite" />
		</section>
	);
}

export default Cover;