import Image from "next/image";

import HomeBg from "@/components/Home";
export default function Home() {
  return (
    <div>
      <HomeBg />

      <div className="w-full xl:flex justify-between items-center h-[80vh] text-white md:mt-44 xl:mt-0">
        <div className="xl:w-1/2 flex flex-col justify-between items-center xl:items-start mb-14 xl:mb-0">
          <h1 className="text-lg:text-sm mb-10">SO, YOU WANT TO TRAVEL TO</h1>
          <span className="font-medium text-9xl mb-14">SPACE</span>
          <p className="text-lg text-center lg:text-justify tracking-wider font-normal text-slate-400 leading-normal w-[96%]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the 
            edge of it. Well sit back, and relax because we'll give you 
            a trully out of this world experience!
          </p>
        </div>

        <div className="xl:w-1/2 flex justify-center md:mt-60 xl:mt-0">
          <div className="w-72 h-72 xl:w-56 xl:h-56 bg-white rounded-full flex items-center justify-center text-black">
            <p className="text-2xl md:text-4xl font-bold tracking-widest">
              EXPLORE
            </p>
          </div> 
        </div>
      </div>  
    </div>
  );
}
