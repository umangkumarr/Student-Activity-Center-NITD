import React from 'react'
import AppDev from '../img/AppDev.png'
import { RiLinkedinBoxFill, RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri"

const ClubCard = () => {
    return (
        <div class="w-[300px] rounded-xl shadow-lg bg-white hover:scale-105 cursor-pointer">
            <img class="h-[300px] object-cover rounded-t-xl z-[-2]" src={AppDev} alt="club-banner" />
            <div class="px-6 py-4">
                <div class="font-bold text-lg mb-2 cursor-pointer">Technical Club</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>

            <div className="px-6 pb-4 flex gap-2">
                <RiLinkedinBoxFill size="20" className="cursor-pointer" color="#0666bf" />
                <RiInstagramLine size="20" className="cursor-pointer" color="#C13584" />
                <RiFacebookBoxFill size="20" className="cursor-pointer" color="#1477ee" />
            </div>
        </div>
    )
}

export default ClubCard
