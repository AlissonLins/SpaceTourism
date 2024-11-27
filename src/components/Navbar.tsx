"use client";

import React, { useState } from "react";
import logo from "../../public/shared/logo.svg";
import Link  from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

import Closehamburger from '../../public/shared/icon-close.svg';
import HamburgerIcon from '../../public/shared/icon-hamburger.svg';

function Navbar() {
    const pathname = usePathname();

    const [isNavopen, setIsNavOpen] = useState(false)

    const handleNavbar = () => {
        setIsNavOpen(!isNavopen)
    }

    return (
        <header className="flex justify-between items-center h-32 relative px-14">
            <Link href={"/"}>
                <img src={logo} alt="Logo" sizes="40" />
            </Link>

            <nav className="hidden xl:flex items-center gap-x-10 py-4 px-20 backdrop-blur-lg absolute right-0 h-[10vh]">
                {NaviLink.map((data,idx)=>(
                    <Link key={idx} href={data.href} 
                    className={cn(
                    `flex space-x-2 items-center text-slate-200 uppercase tracking-widest text-sm h-[10vh] pb-4 ${
                    pathname === data.href ? "border-b border-slate-400" : ""
                }`
                    )}
                >        
                    <span className="">{data.number} </span>
                    <span className="text-normal">{data.label}</span>
                    </Link>
                ))}
            </nav>
            

            <div className="xl:hidden">
                <div className="absolute top-11 right-11">
                    <div onClick={handleNavbar}>
                        {isNavopen ? (
                            <img src={Closehamburger} alt="Hamburger Icon" />
                        ) : (
                            <img src={HamburgerIcon} alt="Hambuerger Icon" />
                        )}
                    </div>
                    <nav className="absolute top-12 right-2 z-20 ">
                        {isNavopen ? (
                            <div className="flex flex-col justify-between gap-y-10 backdrop-blur-lg px-5 py-6 rounded-lg">
                                {NaviLink.map((data, idx) => (
                                <Link
                                    href={data.href}
                                    className={cn(
                                    `flex space-x-2 items-center text-slate-200 uppercase tracking-widest text-sm ${
                                        pathname === data.href ? "border-b border-slate-400" : ""
                                    }`
                                    )}
                                    key={idx}
                                    >
                                    <span className="">{data.number}</span>
                                    <span className="text-normal">{data.label}</span>
                                </Link>
                            ))}
                                </div>
                            ) : (
                            ""
                        )} 
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;

const NaviLink = [
    {
        number: "00",
        label: "Home",
        href: "/",
    },
    {
        number: "01",
        label: "Destination",
        href: "/destination",
    },  {
        number: "02",
        label: "Crew",
        href: "/crew",
    },  {
        number: "03",
        label: "Technology",
        href: "/technology",
    },
]