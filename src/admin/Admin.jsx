import React,{useEffect, useState} from 'react' 
import AdminEvents from './AdminEvents'
import AddEvent from './AddEvent'
import {getEventDataFromFirebase} from '../firebase/firebase'



const Admin = ({setIsAdmin}) => {
    const [addingEvent,setAddingEvent]=useState(false)
    const handleShowAddEvent=()=>{
        setAddingEvent((pre)=>{
            return true;
        })
    }
    const handleLogOut=()=>{
        setIsAdmin((pre)=>{
            return false;
        })
    }
    const [event,setEvent]=useState([])
    const getAllEvents = async () =>{
        const Result = await getEventDataFromFirebase();
        setEvent((pre)=>{
            return Result;
        })
    }

    useEffect(()=>{
        getAllEvents();
    },[])


    return (
        < div className='max-w-screen-xl m-auto'>

            {/* admin navbar */}
            <div className='flex p-4'> 
                <div className='text-lg font-extrabold'>Technical Club</div>
                <div className='m-auto mr-0 w-[80px] font-semibold cursor-pointer ' onClick={handleLogOut}> Log Out </div>
            </div>

            {/* Event listing */}
            <div className='flex p-4 mt-4'> 
                <div className='text-lg  '>Approved Events</div>
                <div className='m-auto mr-0 w-[120px] font-semibold h-12'>
                   {(addingEvent===false)?<div className=" h-10 bg-[#5555a3]  text-[18px] cursor-pointer flex items-center justify-center text-white font-sans" onClick={handleShowAddEvent}>Add Event</div> :''}
                </div>
            </div>
            <div className='p-2'>

                {(addingEvent===true)?<AddEvent setAddingEvent={setAddingEvent} updateEvents={getAllEvents}/>:''}

                {(event.length===0)?'No Events Available / Loading Events':(

                   event.map((eve,index)=>{
                    return  <AdminEvents eventData={eve} key={index+102} updateEvents={getAllEvents}/>
                   })
                    
                )}
                 
                 

            </div>
              
        </ div >
    )
}

export default Admin
