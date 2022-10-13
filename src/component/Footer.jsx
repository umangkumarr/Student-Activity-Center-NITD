import React from 'react'
import { RiLinkedinBoxFill, RiFacebookBoxFill, RiInstagramLine, RiYoutubeFill, RiTwitterFill } from "react-icons/ri"

const Footer = () => {
    return (
        <div className="w-screen flex justify-evenly bg-[#e1e9f1]" >
            <div className=" my-16 mx-10">
                <div>
                    <div className="text-[20px] font-bold">
                        Student Activity Council
                    </div>
                    <div className="text-[16px] ">
                        National Institue of Technology, Delhi, 110036
                    </div>
                </div>
                <div className="my-10 font-bold text-[18px]">Email: <span>sac@nitdelhi.ac.in</span></div>
            </div>
            <div className="items-center justify-center my-10 mx-5">
                <div className="text-[20px] font-bold">
                    Clubs
                </div>
                <div className="text-[16px] ">
                    <ul className="cursor-pointer text-[16px]">Google Student Developer Club</ul>
                    <ul className="cursor-pointer text-[16px]">Technical Club</ul>
                    <ul className="cursor-pointer text-[16px]">Sports Club</ul>
                    <ul className="cursor-pointer text-[16px]">Literature Club</ul>
                    <ul className="cursor-pointer text-[16px]">Cultural Club</ul>
                </div>
            </div>
            <div className="items-center justify-center my-10 mx-5">
                <div className="text-[20px] font-bold">
                    Social
                </div>
                <div className="py-4 flex gap-2">
                    <RiTwitterFill size="20" className="cursor-pointer" color="#00acee" />
                    <RiLinkedinBoxFill size="20" className="cursor-pointer" color="#0666bf" />
                    <RiInstagramLine size="20" className="cursor-pointer" color="#C13584" />
                    <RiFacebookBoxFill size="20" className="cursor-pointer" color="#1477ee" />
                    <RiYoutubeFill size="20" className="cursor-pointer" color="#c4302b" />
                </div>

            </div>
        </div>
    )
}

export default Footer
