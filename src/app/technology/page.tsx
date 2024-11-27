import React from "react";
import Image from 'next/image';

import TechnologyDesktop from "../../../public/technology/background-technology-desktop.jpg";
import TechnologyTablet from "../../../public/technology/background-technology-tablet.jpg";
import TechnologyMobile from "../../../public/technology/background-technology-mobile.jpg";
import TechnologyComponent from "@/components/TechnologyComponent";
import { technology } from "@/utils/data";

const TechnologyPage = () => {
    return (
        <div>
            <TechnologyBg />

            <div className="flex justify-center xl:justify-start items-center gap-x-5 xl:px-36">
                <span className="text-xl font-extrabold text-gray-500 tracking-widest">
                    03
                </span>
                <p className="text-white font-normal text-xl tracking-widest">
                    SPACE LAUNCH 101
                </p>
            </div>

            <div>
                <TechnologyComponent data={technology}/>
            </div>
        </div>
    )
}

export default TechnologyPage;

const TechnologyBg = () => {
    return (
        <div className="absolute top-0 left-0 w-full -z-20">
            <img src={TechnologyMobile.src} alt="background do tablet" 
            className="min-h screen object-cover md:hidden w-full"/>

            <img src={TechnologyTablet.src} alt="background do tablet"
            className="hidden md:block min-h-screen object-cover xl:hidden w-full"/>

            <img src={TechnologyDesktop.src} alt="background"
            className="hidden max-h-screen w-full object-cover xl:block"/>
        </div>
    )
}