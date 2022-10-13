import React from 'react'
import AppDev from '../img/AppDev.png'

const AdminEvents = () => {
    return (

        <div className="w-[100%] max-w-[1000px]  bg-[#e1e9f1] rounded p-5 mx-auto mb-4">
            <div className="rounded flex items-center justify-center">
                <div className="w-[40%] items-right p-2">
                    <img className="rounded-md border-[2px] border-[#5555bd] object-cover h-[300px] w-[300px]" src={AppDev} alt="" ></img>
                </div>

                <div className="w-[60%]  px-[40px] py-1 ">
                    <div className="font-bold text-[20px]">App Development <span> [ GDSC Club ] </span></div>
                    <div className="my-4 text-[14px]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, deserunt? Accusantium inventore at ut deserunt tempora sequi non labore laudantium quibusdam! Possimus tempora iure delectus quia quis tenetur similique sunt?</div>
                    <div className="font-semibold text-[15px] my-2">Schedule</div>
                    <div className="gapx-4 grid grid-cols-2">
                        <div className="text-[12px]">Date: 26-09-22 </div>
                        <div className="text-[12px]">Start at: 6:00 PM</div>
                        <div className="text-[12px]">Venue: LT-2 Admin Block</div>
                    </div>
                   
                    <div className='flex'>
                      <div className="h-8 mt-5 bg-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-white font-sans mr-2">Delete Event</div>
                      <div className="h-8 mt-5 border-[2px] border-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-[#5555a3] font-sans mr-2">Edit Event</div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminEvents
