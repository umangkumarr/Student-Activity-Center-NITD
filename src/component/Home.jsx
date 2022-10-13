import React from 'react'
import { Header, WhatWeDo, UpcomingEvents, Clubs, FAQ } from '.'
import Banner from '../img/section.png'
import Footer from './Footer'


const Home = () => {
    return (
        <div>
            <Header />
            <div id="#home" className="w-full flex items-center justify-center">
                <div className="w-[90%] flex items-center justify-center">
                    <div className="w-[50%] flex items-center justify-center">
                        <div className="relative">

                            <div className="text-[14px] md:text-[50px] block font-extrabold">
                                Student Activity Council
                            </div>
                            <div className="text-[8px] md:text-[24px] font-bold block">
                                National Institute of Technology, Delhi
                            </div>

                            <div className="text-[6px] md:text-[18px]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit totam corrupti deleniti repellat voluptatibus sunt nam tenetur nostrum earum natus facere corporis aliquam alias, reprehenderit porro molestiae praesentium saepe.
                            </div>

                            <div className="flex gap-2 md:gap-5 w-full mt-2">

                                <div className="h-4 px-4 md:h-10 md:mt-5 md:px-8 bg-[#5c5ca5] text-[4px] md:text-[18px] cursor-pointer flex items-center justify-center text-white font-sans">Get Started</div>


                                <div className="h-4 px-3 md:w-30 md:h-10 md:mt-5 md:px-8 border-[1px]  md:border-[2px] border-[#5c5ca5] text-[4px] md:text-[18px] cursor-pointer flex items-center justify-center font-sans">Upcoming Events</div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[50%]  flex items-center justify-center">
                        <img className="h-full max-h-[500px] object-cover" src={Banner} alt="logo" />
                    </div>
                </div>
            </div>


            <WhatWeDo />
            <UpcomingEvents />
            <Clubs />
            <FAQ />
            <Footer />

        </div >
    )
}

export default Home
