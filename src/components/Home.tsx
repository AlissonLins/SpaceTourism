import React from "react";
import image from 'next/image';

import HomeDesktop from "../../public/home/background-home-desktop.jpg";
import HomeTablet from "../../public/home/background-home-tablet.jpg";
import HomeMobile from "../../public/home/background-home-mobile.jpg"

function Home() {
    return (
        <div className="absolute top-0 left-0 w-full -z-20">
            <img src={HomeMobile.src} alt="background do tablet" 
            className="min-h screen object-cover md:hidden w-full"/>

            <img src={HomeTablet.src} alt="background do tablet"
            className="hidden md:block min-h-screen object-cover xl:hidden w-full"/>

            <img src={HomeDesktop.src} alt="background"
            className="hidden max-h-screen w-full object-cover xl:block"/>

        </div>
    )
}

export default Home;