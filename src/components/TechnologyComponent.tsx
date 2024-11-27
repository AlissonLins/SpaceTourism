"use client";

import { TechnologyProp } from "@/types/Types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";


interface TechnologyComponentProps{
    data:TechnologyProp[]
}

const TechnologyComponent :React.FC<TechnologyComponentProps> = ({data}) => {
    const [currentTabs, setCurrentTabs] = useState(0);
    return (
        <div className="xl:flex xl:justify-between items-center gap-x-10">
            <div className="flex xl:flex-col justify-center xl:gap-y-10 gap-x-10 mb xl:mb-0">
                {data.map((_, idx) => (
                    <button
                    key={idx}
                    onClick={() => setCurrentTabs(idx)}
                    className={cn(
                        `w-[80px] h-[80px] rounded-full bg-black text-white border text-2xl hover:bg-white hover:text-black flex items-center justify-center ${
                            currentTabs === idx ? "bg-white text-black" : ""
                        }`
                    )}>
                        {idx}
                    </button>
                ))}
            </div>

            <div>
                {data.map((data, idx) => (
                    <div
                    key={idx}
                    className={cn(`${currentTabs === idx ? "" : "hidden"}`)}
                    >
                        <div className="xl:flex gap-x-10 w-full items-center justify-between">
                            <div className="xl:w-[60%] mb-10 xl:mb-0 text-center xl:text-left">
                                <h2 className="uppercase tracking-wide font-normal mb-2">
                                    the terminology
                                </h2>
                                <p className="text-5xl xl:text-7xl uppercase tracking-widest mb-10">
                                    {data?.name}
                                </p>

                                <p className="xl:w-[80%] text-base tracking-wide leading-loose">
                                    {data?.description}
                                </p>
                            </div>

                            <div className="xl:w-[40%] flex justify-center items-center">
                                <img 
                                src={data?.images.portrait.src}
                                alt="technology image"
                                className="hidden xl:block object-contain"
                                />

                                <img 
                                src={data?.images.landscape.src}
                                alt="technology image"
                                className="xl:hidden object-contain"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechnologyComponent;