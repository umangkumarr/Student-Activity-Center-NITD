import React from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
 

const AddEvent = ({setAddingEvent}) => {
    const handleHideAddEvent=()=>{
        setAddingEvent((pre)=>{
            return false;
        })
    }
    return (

        <div className="w-[100%] max-w-[1000px]  shadow rounded p-5 mx-auto mb-4">
             
              
            <div className='w-[100%]'>
                {/* Event Name  */}
                <div className='flex'>
                <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                            <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Password" variant="filled" size="small" background="#F1F3F6"   />
                  </FormControl>
                  <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                            <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Image" variant="filled" size="small" background="#F1F3F6"   />
                  </FormControl>

                </div>

                {/* Description */}
                <div className='flex mt-2'>

                    <FormControl variant="standard" sx={{width:'100%',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField multiline rows={3} InputProps={{ disableUnderline: true }} sx={{height:100,background:'#F1F3F6'}} id="filled-basic" label="Description" variant="filled" size="small" background="#F1F3F6"   />
                               
                    </FormControl>
                     

                </div>

                {/* Other info */}
                <div className='flex mt-2 flex-wrap'>

                    <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Start Date" variant="filled" size="small" background="#F1F3F6"   />
                    </FormControl>
                    <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event End Date" variant="filled" size="small" background="#F1F3F6"   />
                    </FormControl>
                    <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Date" variant="filled" size="small" background="#F1F3F6"   />
                    </FormControl>
                    <FormControl variant="standard" sx={{marginTop:'4px',minWidth:'100px',width:'20%',height:'48px',background:'#F1F3F6',outline:'none',border:'none',marginRight:'10px'}} > 
                                <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Event Venue" variant="filled" size="small" background="#F1F3F6"   />
                    </FormControl>
                     

                </div>

            </div>


          
             <div className='flex'>
                      <div className="h-8 mt-5 bg-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-white font-sans mr-2">Add</div>
                      <div className="h-8 mt-5 border-[2px] border-[#5555a3] p-2 text-[18px] cursor-pointer flex items-center justify-center text-[#5555a3] font-sans mr-2" onClick={handleHideAddEvent}>Cancel</div>
            </div>
        </div>
    )
}

export default AddEvent
