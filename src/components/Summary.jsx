import React from 'react';
import TextWithBar from './TextWithBar';

import img from "../image/Market launch-amico.svg"
import ArrowScroll from "../components/ArrowScroll";

function Summary(props) {
	return (
		<section className="page2 text-white h-screen relative font-sans ">
				<TextWithBar title="Sommaire"/>
				<div
					className="mx-auto flex relative items-center flex-col top-20 tablet:top-4 tablet:flex-col laptop:flex-row laptop:left-1/2 laptop:-translate-x-1/2 laptop:flex-wrap laptop:top-1/2 laptop:mx-auto laptop:-translate-y-1/2 laptop:absolute laptop:w-full laptop:justify-between laptop:container">
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
				<ArrowScroll color="borderWhite" />
		</section>
	);
}

export default Summary;