import React from 'react';
import GridProject from "../components/GridProject";

function Work() {
    return (
        <section className="page4 container mx-auto px-6 text-white h-screen relative font-sans">
				<div className="pt-11">
					<h2 className="text-5xl mb-6">Réalisations</h2>
					<div className=" laptop:w-full laptop:absolute laptop:top-1/2 laptop:-translate-y-1/2 laptop:left-1/2 laptop:-translate-x-1/2">
					<GridProject />
					</div>
				</div>
			</section>
    );
}

export default Work;