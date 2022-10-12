import React from 'react'
import ClubCard from './ClubCard'
import './clubs.css'

const Clubs = () => {
    return (
        <div className="bg-[#e1e9f1] w-full justify-center items-center py-10">
            <div className="text-[40px] w-screen font-semibold flex items-center justify-center">Clubs</div>
            <div className="flex items-center justify-center w-screen">
                <div className="w-[75px] h-2 flex items-center justify-center"></div>
                <div className="w-[125px] h-2 bg-[#5c5ca5] flex items-center justify-center"></div>
            </div>

            <div className=" clubs-container w-[80%] m-auto flex overflow-x-scroll items-center py-10 gap-12">
                <div   className="  px-3 m-auto flex justify-center py-10 gap-10 ">
                    < ClubCard />
                    < ClubCard />
                    < ClubCard />
                    < ClubCard />
                    < ClubCard />
                    < ClubCard />
                    < ClubCard />
                    < ClubCard />
                </div>


            </div>




        </div>
    )
}

export default Clubs
