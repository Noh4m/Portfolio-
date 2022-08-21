import React from 'react';
import data from "../data/Data";

function GridProject(props) {


    return (
        <>
            <div className="grid grid-cols-1 content-center gap-y-10 laptop:mt-16 text-white">
                {data.Achievements.map(data =>  (
                    <div className=" group relative bg-orange-600 h-52" key={data.id}>
                        <a href={data.link} className="absolute w-full h-20 pt-1 text-center bottom-0  bg-slate-900/[.50]  laptop:bg-black laptop:invisible group-hover:visible ">
                            <p className="leading-6"> {data.AchievementTitle} </p>
                            <p className="leading-6"> {data.AchievementParagraph} </p>
                        </a>
                        <img className="h-full w-full"  src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt="test"/>
                    </div>
                ))}



            </div>
        </>
    );
}

export default GridProject;