import React from 'react'
import Event from './Event'

const UpcomingEvents = () => {
    return (
        <div className="w-full justify-center items-center py-10">

            <div className="text-[40px] w-screen font-semibold flex items-center justify-center">Upcoming Events</div>
            <div className="flex items-center justify-center w-screen">
                <div className="w-[80px] h-2 flex items-center justify-center"></div>
                <div className="w-[350px] h-2 bg-[#5c5ca5] flex items-center justify-center"></div>
            </div>

            <div className="w-screen grid grid-cols-1 justify-center gap-6 my-6">
                <Event />
                <div className="w-[120px] border-[#8c8cd4] mx-auto rounded-full border-[5px]" />
                <Event />
            </div>

            <div className="flex item-center justify-center my-2 cursor-pointer">View more events..</div>

        </div>
    )
}

export default UpcomingEvents
