import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import AdminEvents from './AdminEvents'
import AddEvent from './AddEvent'


const Admin = () => {
    const [addingEvent,setAddingEvent]=useState(false)
    const handleShowAddEvent=()=>{
        setAddingEvent((pre)=>{
            return true;
        })
    }


    return (
        < div className='max-w-screen-xl m-auto'>

            {/* admin navbar */}
            <div className='flex p-4'> 
                <div className='text-lg font-extrabold'>Technical Club</div>
                <div className='m-auto mr-0 w-[80px] font-semibold'><Link to={"/admin"}>Log Out</Link></div>
            </div>

            {/* Event listing */}
            <div className='flex p-4 mt-4'> 
                <div className='text-lg  '>Events</div>
                <div className='m-auto mr-0 w-[120px] font-semibold h-12'>
                   {(addingEvent===false)?<div className=" h-10 bg-[#5555a3]  text-[18px] cursor-pointer flex items-center justify-center text-white font-sans" onClick={handleShowAddEvent}>Add Event</div> :''}
                </div>
            </div>
            <div className='p-2'>

                {(addingEvent===true)?<AddEvent setAddingEvent={setAddingEvent} />:''}
                 
                 <AdminEvents  />
                 <AdminEvents  />
                 <AdminEvents  />
                 <AdminEvents  />

            </div>
              
        </ div >
    )
}

export default Admin
