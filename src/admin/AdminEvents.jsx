import React, { useState } from 'react'
import AppDev from '../img/AppDev.png'
import {deleteEventDataFromFirebase} from '../firebase/firebase'
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import {uploadFileToFirebase,updateEventDataToFirebase} from '../firebase/firebase'

 

const AdminEvents = ({eventData,updateEvents}) => {
    const [updatingEvent,setUpdatingEvent] = useState(false)
    const deleteEvent= async ()=>{
        toast.error("Deleting Event")
         const res= await deleteEventDataFromFirebase(eventData.id)
         updateEvents();
    }
    const showEditOption=()=>{
        setUpdatingEvent((pre)=>{
            return true;
        })
    }
    const hideEditOption=()=>{
        setUpdatingEvent((pre)=>{
            return false;
        })
    }
    const [eventImage,setEventImage]=useState(null)
    const handleImageUpload=(e)=>{
        if (e.target.files && e.target.files.length > 0) {
            setEventImage(e.target.files[0]);
          }
        //   console.log(e.target.files[0])
    }
    const [eventImageUrl,setEventImageUrl]=useState('')
    const addImageToDb= async () =>{
         const ImageUrl =await uploadFileToFirebase(eventImage);
         setEventImageUrl(ImageUrl)
         return ImageUrl;
    }
    const updateEventToDb= async (data) =>{
        const Result =await updateEventDataToFirebase(eventData.id,data);
        // console.log(Result);
        return Result;
      
   }
    
    const [eventName,setEventName]=useState(eventData.event_name)
    const [eventDescription,setEventDescription]=useState(eventData.event_desc)
    const [eventStartDate,setEventStartDate]=useState(eventData.event_start_date)
    const [eventEndDate,setEventEndDate]=useState(eventData.event_end_date)
    const [eventTime,setEventTime]=useState(eventData.event_time)
    const [eventVenue,setEventVenue]=useState(eventData.event_venue)
    const [eventLink,setEventLink]=useState(eventData.event_link)
    const clearAddEventForm=()=>{
        setEventName('')
        setEventDescription('')
        setEventStartDate('')
        setEventEndDate('')
        setEventTime('')
        setEventVenue('')
        setEventLink('')
        setEventImage(null)
        setEventImageUrl('')
    }
     const validateEventDetails=()=>{
        if(eventName===''){
            toast.error("Please Enter Event Name")
            return false;
        }

        if(eventImage===null){
            toast.error("Please Upload Event Image")
            return false;
        }

        if(eventDescription===''){
            toast.error("Please Enter Event Description")
            return false;
        }
        if(eventStartDate===''){
            toast.error("Please Enter Event Start Date")
            return false;
        }

        if(eventEndDate===''){
            toast.error("Please Enter Event End Date")
            return false;
        }
         if(eventTime===''){
            toast.error("Please Enter Event Time")
            return false;
        }
        return true;
     }

     const handleUpdateEventToDB= async ()=>{
        if(validateEventDetails()===false) return;
        else{
            toast.success("Updating Event");
            hideEditOption()
            var imageLink = await addImageToDb(eventImage)
            var EventDetails={
                "event_name":eventName,
                "event_image_url":imageLink,
                "event_club_id":"12",
                "event_desc":eventDescription,
                "event_time":eventTime,
                "event_venue":eventVenue,
                "event_start_date":eventStartDate,
                "event_end_date":eventEndDate,
                "event_link":eventLink,
                "isApprovedCoordinator":0,
                "isApprovedDSW":0,
                "date_and_time": Date.now()
            }
            const res= await updateEventToDb(EventDetails);
            updateEvents();
            clearAddEventForm()
       }
    }





    return (

        <div className="w-[100%] max-w-[1000px]  bg-[#e1e9f1] rounded p-5 mx-auto mb-4">
            <div className="rounded flex items-center justify-center">
                <div className="w-[40%] items-right p-2">
                    <img className="rounded-md border-[2px] border-[#5555bd] object-cover h-[300px] w-[300px]" src={`${eventData.event_image_url}`} alt="" ></img>
                </div>

                <div className="w-[60%]  px-[40px] py-1 ">
                    <div className="font-bold text-[20px]">{eventData.event_name} <span> [ GDSC Club ]  </span></div>
                    <div className="my-4 text-[14px]"> 
                    {eventData.event_desc} 
                     </div>
                    <div className="font-semibold text-[15px] my-2">Schedule</div>
                    <div className="gapx-4 grid grid-cols-2">
                        <div className="text-[12px]">Date: 26-09-22 </div>
                        <div className="text-[12px]">Start at: 6:00 PM</div>
                        <div className="text-[12px]">Venue: LT-2 Admin Block</div>
                    </div>
                   
                    <div className='flex'>
                      <div className="h-8 mt-5 bg-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-white font-sans mr-2" onClick={deleteEvent}>Delete Event</div>
                        {updatingEvent===false?<div className="h-8 mt-5 border-[2px] border-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-[#5555a3] font-sans mr-2" onClick={showEditOption}>Edit Event</div>:''} 

                    </div>
                </div>

            </div>

            {/* update event entities */}
            {updatingEvent===true?
            <div className='bg-white p-4 rounded'>

                {/* update info content */}

                <div className="w-[100%] max-w-[1000px]  shadow rounded p-5 mx-auto mb-4">
             
              
             <div className='w-[100%]'>
                 {/* Event Name  */}
                 <div className='flex'>
                 <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                             <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Name*" variant="filled" size="small" background="#F1F3F6" onChange={((e)=>{setEventName(e.target.value)})} value={eventName}  />
                   </FormControl>
                   <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                             {/* <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Image" variant="filled" size="small" background="#F1F3F6"   /> */}
                             <Button   variant="contained" component="label" sx={{height:60,background:'#F1F3F6',color:'black','&:hover': { background: "#F1F3F6", },}}>
                                 {"Upload Event Image*"}
                                 <input id='id2345' hidden accept="image/*" onChange={handleImageUpload}  type="file" />
                             </Button>
                   </FormControl>
 
                 </div>
                 {/* event link */}
                 <div className=' mt-2'>
                 <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none', }} > 
                             <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Related Link" variant="filled" size="small" background="#F1F3F6" onChange={((e)=>{setEventLink(e.target.value)})} value={eventLink}   />
                   </FormControl>
                 </div>
 
                 {/* Description */}
                 <div className='flex mt-2'>
 
                     <FormControl variant="standard" sx={{width:'100%',background:'#F1F3F6',outline:'none',border:'none', }} > 
                                 <TextField multiline rows={3} InputProps={{ disableUnderline: true }} sx={{height:95,background:'#F1F3F6'}} id="filled-basic" label="Description*" variant="filled" size="small" background="#F1F3F6"  onChange={((e)=>{setEventDescription(e.target.value)})} value={eventDescription}  />
                                
                     </FormControl>
                      
 
                 </div>
 
                 {/* Other info */}
                 <div className='flex mt-2 flex-wrap'>
 
                     <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                 <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Start Date*" variant="filled" size="small" background="#F1F3F6" onChange={((e)=>{setEventStartDate(e.target.value)})}  placeholder="DD/MM/YYYY" value={eventStartDate}  />
                     </FormControl>
                     <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                 <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event End Date*" variant="filled" size="small" background="#F1F3F6"  onChange={((e)=>{setEventEndDate(e.target.value)})} placeholder="DD/MM/YYYY" value={eventEndDate}  />
                     </FormControl>
                     <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                 <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Time*" variant="filled" size="small" background="#F1F3F6"  onChange={((e)=>{setEventTime(e.target.value)})} type="time" value={eventTime}  />
                     </FormControl>
                     <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                 <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Venue*" variant="filled" size="small" background="#F1F3F6"  onChange={((e)=>{setEventVenue(e.target.value)})} value={eventVenue}  />
                     </FormControl>
                      
 
                 </div>
 
             </div>
 
 
           
               
         </div>

                
                



                {/* cancel or update */}
                <div className='flex'>
                      <div className="h-8 mt-5 bg-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-white font-sans mr-2" onClick={handleUpdateEventToDB}  >Update Event</div>
                        <div className="h-8 mt-5 border-[2px] border-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-[#5555a3] font-sans mr-2" onClick={hideEditOption}>Cancel</div> 

                    </div>
            </div>
            :''}
        </div>
    )
}

export default AdminEvents
