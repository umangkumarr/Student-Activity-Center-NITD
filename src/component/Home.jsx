import React from 'react'
import { Header } from '.'
import Banner from '../img/section.png'
import WhatWeDo from '../img/WhatWeDo.png'
import AppDev from '../img/AppDev.png'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="w-full flex items-center justify-center">
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

            <div className="w-full bg-[#e1e9f1] px-10 py-12">
                <div className="w-[90%] h-full flex items-center justify-center">
                    <div className="w-[50%] h-full flex items-center justify-center">
                        <img className="h-full max-h-[500px] object-cover" src={WhatWeDo} alt="logo" />
                    </div>
                    <div className="w-[50%] flex items-center justify-center">
                        <div className="relative">
                            <div className="text-[30px]" >What we do</div>
                            <div className="ml-[30px] w-[200px] h-2 bg-[#5c5ca5]"></div>

                            <div className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, deserunt nisi architecto ipsam nulla magni quam molestiae illum culpa, alias repellat a ex accusamus quibusdam distinctio officiis suscipit quis recusandae.</div>

                            <div className="grid grid-cols-2 gap-6">
                                <div >
                                    <div className="font-bold">Technical</div>
                                    <div className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo repellat quam dolor, odit impedit eveniet est sit possimus accusamus tempore dicta nostrum a corrupti iusto. Esse praesentium sunt impedit.</div>
                                </div>
                                <div>
                                    <div className="font-bold">Sports</div>
                                    <div className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo repellat quam dolor, odit impedit eveniet est sit possimus accusamus tempore dicta nostrum a corrupti iusto. Esse praesentium sunt impedit.</div>
                                </div>
                                <div>
                                    <div className="font-bold">Culture</div>
                                    <div className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo repellat quam dolor, odit impedit eveniet est sit possimus accusamus tempore dicta nostrum a corrupti iusto. Esse praesentium sunt impedit.</div>
                                </div>
                                <div>
                                    <div className="font-bold">Literature</div>
                                    <div className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo repellat quam dolor, odit impedit eveniet est sit possimus accusamus tempore dicta nostrum a corrupti iusto. Esse praesentium sunt impedit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full justify-center items-center py-10">

                <div className="text-[40px] w-screen font-semibold flex items-center justify-center">Upcoming Events</div>
                <div className="flex items-center justify-center w-screen">
                    <div className="w-[80px] h-2 flex items-center justify-center"></div>
                    <div className="w-[350px] h-2 bg-[#5c5ca5] flex items-center justify-center"></div>
                </div>

                <div className="w-screen flex items-center justify-center ">
                    <div className="m-8 w-[60%] max-w-[1000px] h-[350px] bg-[#e1e9f1] rounded p-5">
                        <div className="rounded flex items-center justify-center">
                            <div className="w-[40%] items-right p-2">
                                <img className="rounded-md border-[2px] border-[#5c5ca5] object-cover h-[300px] w-[300px]" src={AppDev} alt="" ></img>
                            </div>

                            <div className="w-[60%] h-[300px] px-[40px] py-1 ">
                                <div className="font-bold text-[20px]">App Developement <span> [ GDSC Club ] </span></div>
                                <div className="my-4 text-[14px]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, deserunt? Accusantium inventore at ut deserunt tempora sequi non labore laudantium quibusdam! Possimus tempora iure delectus quia quis tenetur similique sunt?</div>
                                <div className="font-semibold text-[15px] my-2">Schedule</div>
                                <div className="gapx-4 grid grid-cols-2">
                                    <div className="text-[12px]">Date: 26-09-22 </div>
                                    <div className="text-[12px]">Start at: 6:00 PM</div>
                                    <div className="text-[12px]">Venue: LT-2 Admin Block</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
