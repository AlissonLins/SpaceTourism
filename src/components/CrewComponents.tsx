"use client";

import { CrewMemberProp } from "@/types/Types";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import Image from "next/image";

interface CrewComponentProps {
    data:CrewMemberProp[]
}

const CrewComponent:React.FC<CrewComponentProps> = ({data}) => {
    const [currentTabs, setCurrentTabs] = useState(0);
    return (
        <div className="xl:px-36 mx-auto flex flex-col">
            <div className="flex justify-between items-center relative order-2 xl:order-1">
                {data.map((data, idx) => (
                <div
                    className={cn(` ${currentTabs === idx ? "" : "hidden"}`)}
                    key={idx}
                >
                    <div className="w-full xl:flex justify-between items-center gap-x-10 text-center xl:text-left">
                        <div className="xl:w-1/2 mb-5 xl:mb-0">
                            <h2 className="text-2xl text-slate-600 uppercase font-medium tracking-wide xl:mb-8">
                                flight engineer
                            </h2>

                            <p className="text-5xl tracking-wider text-slate-200 xl:mb-10 mb-5">
                                {data?.name}
                            </p>

                            <p className="text-lg font-normal tracking-wide leading-6">
                                {data.bio}
                            </p>
                        </div>

                        <div className="flex justify-center items-center xl:w-1/2">
                            <img 
                            src={data?.images.webp.src}
                            alt="Crew iamge"
                            className="object-contain xl:h-[600px] h-[400px]"/>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            
            <div className="flex xl:justify-start items-center gap-x-5 justify-center xl:order-2">
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentTabs(idx)}
                        className={cn(
                            `w-[20px] h-[20px] rounded-full bg-slate-500 hover:bg-slate-200 ${
                            currentTabs === idx ? "bg-slate-200" : ""
                            }`
                        )}
                    ></button>
                ))}
            </div>
        </div>
    );
};
export default CrewComponent;