import react from 'react'
import Image from 'next/image';

import CrewDesktop from "../../../public/crew/background-crew-desktop.jpg";
import CrewTablet from "../../../public/crew/background-crew-tablet.jpg";
import CrewMobile from "../../../public/crew/background-crew-mobile.jpg";
import CrewComponent from '@/components/CrewComponents';
import { crew } from '@/utils/data';

const CrewPage = () => {
    return <div>
        <CrewBg />


        <div className="flex justify-center xl:justify-start items-center gap-x-5 xl:px-36">
            <span className="text-xl font-extrabold text-gray-500 tracking-widest">
                02
            </span>
            <p className="text-white font-normal text-xl tracking-widest">
                MEET YOUR CREW
            </p>
        </div>

        <div>
            <CrewComponent data = {crew}/>
        </div>
        
    </div>
};

export default CrewPage;

const CrewBg = () => {
    return (
        <div className="absolute top-0 left-0 w-full -z-20">
            <img src={CrewMobile.src} alt="background do tablet" 
            className="min-h screen object-cover md:hidden w-full"/>

            <img src={CrewTablet.src} alt="background do tablet"
            className="hidden md:block min-h-screen object-cover xl:hidden w-full"/>

            <img src={CrewDesktop.src} alt="background"
            className="hidden max-h-screen w-full object-cover xl:block"/>
        </div>
    )
}
