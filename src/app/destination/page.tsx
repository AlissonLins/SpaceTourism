import React from "react";
import image from 'next/image';

import destinationDesktop from '../../../public/destination/background-destination-desktop.jpg';
import destinationTablet from '../../../public/destination/background-destination-tablet.jpg';
import destinationMobile from '../../../public/destination/background-destination-mobile.jpg';
import DestinationComponent from "@/components/DestinationComponent";
import { destinations } from "@/utils/data";
function DestinationPage ()  {
    return (
        <div>
           <DestinationBg />

           <div className="flex justify-center xl:justify-start items-center gap-x-5 xl:px-36">
                <span className="text-xl font-extrabold text-gray-500 tracking-widest">
                    01
                </span>
                <p className="text-white font-normal text-xl tracking-widest">
                    PICK YOUR DESTINATION
                </p>
           </div>

           <div>
             < DestinationComponent data = {destinations} />
           </div>
        </div>
    )
}

export default DestinationPage;


const DestinationBg = () => {
    return (
        <div className="absolute top-0 left-0 w-full -z-20">
            <img src={destinationMobile.src} alt="background do tablet" 
            className="min-h screen object-cover md:hidden w-full"/>

            <img src={destinationTablet.src} alt="background do tablet"
            className="hidden md:block min-h-screen object-cover xl:hidden w-full"/>

            <img src={destinationDesktop.src} alt="background"
            className="hidden max-h-screen w-full object-cover xl:block"/>
        </div>
    )
}