import React,{useEffect, useState} from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import {uploadFileToFirebase,uploadEventDataToFirebase} from '../firebase/firebase'
 

const AddEvent = ({setAddingEvent,updateEvents}) => {
    const handleHideAddEvent=()=>{
        setAddingEvent((pre)=>{
            return false;
        })
        clearAddEventForm()
    }
    const [eventImage,setEventImage]=useState(null)
    const handleImageUpload=(e)=>{
        if (e.target.files && e.target.files.length > 0) {
            setEventImage(e.target.files[0]);
          }
    }
    const [eventImageUrl,setEventImageUrl]=useState('')
    const addImageToDb= async () =>{
         const ImageUrl =await uploadFileToFirebase(eventImage);
         setEventImageUrl(ImageUrl)
         return ImageUrl;
       
    }
    const addEventToDb= async (data) =>{
        const Result =await uploadEventDataToFirebase(data);
        // console.log(Result);
        return Result;
      
   }
   
    const [eventName,setEventName]=useState('')
    const [eventDescription,setEventDescription]=useState('')
    const [eventStartDate,setEventStartDate]=useState('')
    const [eventEndDate,setEventEndDate]=useState('')
    const [eventTime,setEventTime]=useState('')
    const [eventVenue,setEventVenue]=useState('')
    const [eventLink,setEventLink]=useState('')
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
    const handleAddEventToDB= async ()=>{
        if(validateEventDetails()===false) return;
        else{
            toast.success("Adding Event");
            handleHideAddEvent()
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
            const res= await addEventToDb(EventDetails);
            updateEvents()
            clearAddEventForm()
       }
    }

    
   useEffect(()=>{
      
   },[])

    return (

        <div className="w-[100%] max-w-[1000px]  shadow rounded p-5 mx-auto mb-4">
             
              
            <div className='w-[100%]'>
                {/* Event Name  */}
                <div className='flex'>
                <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                            <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Name*" variant="filled" size="small" background="#F1F3F6" onChange={((e)=>{setEventName(e.target.value)})}   />
                  </FormControl>
                  <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                            {/* <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Image" variant="filled" size="small" background="#F1F3F6"   /> */}
                            <Button   variant="contained" component="label" sx={{height:60,background:'#F1F3F6',color:'black','&:hover': { background: "#F1F3F6", },}}>
                                {"Upload Event Image*"}
                                <input hidden accept="image/*" onChange={handleImageUpload}  type="file" />
                            </Button>
                  </FormControl>

                </div>
                {/* event link */}
                <div className=' mt-2'>
                <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none', }} > 
                            <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Related Link" variant="filled" size="small" background="#F1F3F6" onChange={((e)=>{setEventLink(e.target.value)})}   />
                  </FormControl>
                </div>

                {/* Description */}
                <div className='flex mt-2'>

                    <FormControl variant="standard" sx={{width:'100%',background:'#F1F3F6',outline:'none',border:'none', }} > 
                                <TextField multiline rows={3} InputProps={{ disableUnderline: true }} sx={{height:95,background:'#F1F3F6'}} id="filled-basic" label="Description*" variant="filled" size="small" background="#F1F3F6"  onChange={((e)=>{setEventDescription(e.target.value)})}  />
                               
                    </FormControl>
                     

                </div>

                {/* Other info */}
                <div className='flex mt-2 flex-wrap'>

                    <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Start Date*" variant="filled" size="small" background="#F1F3F6" onChange={((e)=>{setEventStartDate(e.target.value)})}  placeholder="DD/MM/YYYY" />
                    </FormControl>
                    <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event End Date*" variant="filled" size="small" background="#F1F3F6"  onChange={((e)=>{setEventEndDate(e.target.value)})} placeholder="DD/MM/YYYY" />
                    </FormControl>
                    <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Time*" variant="filled" size="small" background="#F1F3F6"  onChange={((e)=>{setEventTime(e.target.value)})} type="time" />
                    </FormControl>
                    <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Venue*" variant="filled" size="small" background="#F1F3F6"  onChange={((e)=>{setEventVenue(e.target.value)})} />
                    </FormControl>
                     

                </div>

            </div>


          
             <div className='flex'>
                      <div className="h-8 mt-5 bg-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-white font-sans mr-2 px-8" onClick={handleAddEventToDB} >Add</div>
                      <div className="h-8 mt-5 border-2 border-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-[#5555a3] font-sans mr-2 px-4" onClick={handleHideAddEvent}>Cancel</div>
            </div>
        </div>
    )
}

export default AddEvent
