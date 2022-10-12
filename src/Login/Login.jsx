import React,{useEffect} from 'react'
import LoginIllustrator  from '../img/login-illustrator.svg'
import Logo from '../img/logo.png'
import { CgCardClubs } from 'react-icons/cg';
import {FaLock} from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getClubs } from '../firebase/firebase';

import './login.css'

const Login = () => {
    const [selectedClub, setSelectedClub] = React.useState(0);
    const handleChangeSelectedClub = (event) => {
        setSelectedClub(event.target.value);
    };
    const [allClubs, setAllClubs] = React.useState([]);
    useEffect(()=>{
        // setAllClubs((pre)=>{
        //     return getClubs();
        // })
        const dat=getClubs();
        // console.log(dat[1])
    },[ ]) 
 


    return (

        <div className="w-[100%] flex h-[100vh]">
            {/* Login options */}
            <div className='md:w-[40%] w-[100%]  shadow-2xl'>
                <div className='w-[80%] m-auto mt-[22%]'>
                    <div> <img className="h-8 md:h-16 object-cover m-auto" src={Logo} alt="Logo" /> </div>
                    <div className='text-center mt-5 font-bold'>Login into your account</div>
                    <div className='w-[80%] m-auto mt-[22px] flex'>
                        <FormControl variant="standard" sx={{width:'100%',background:'#e3e5e8',outline:'none',border:'none'}} >
                            {/* <InputLabel id="select-club-input"   sx={{width:'100%',outline:'none',border:'none'}}>Select Club</InputLabel> */}
                                <Select 
                                    labelId="select-club-input"
                                    id="select-club-input-id"
                                    value={selectedClub}
                                    label="Select Club"
                                    placeholder='Select Club'
                                    
                                    disableUnderline
                                    sx={{height:'48px',background:'#e3e5e8',padding:'0px 6px'}}
                                    onChange={handleChangeSelectedClub}
                                >
                                    <MenuItem value={0}>Select Club</MenuItem>
                                    {allClubs.map(()=>{
                                        return (<>
                                            <MenuItem value={10}>Technical Club</MenuItem>
                                        </>)
                                    })}

                                    {/* <MenuItem value={10}>Technical Club</MenuItem>
                                    <MenuItem value={11}>Technical Club</MenuItem>
                                    <MenuItem value={12}>Technical Club</MenuItem>
                                    <MenuItem value={15}>Technical Club</MenuItem>
                                    <MenuItem value={17}>Technical Club</MenuItem>
                                    <MenuItem value={18}>Technical Club</MenuItem> */}
                                    
                                </Select>    
                        </FormControl>
                        <div className='h-[48px] w-[48px] bg-[#1E2772] rounded-tr rounded-br'> <CgCardClubs style={{color:'white',fontSize:'2rem',margin:'auto',marginTop:'6px'}}/> </div>
                    </div>




                    {/* password input */}
                    <div className='w-[80%] m-auto mt-[22px] flex'>
                        <FormControl variant="standard" sx={{width:'100%',height:'48px',background:'#F1F3F6',outline:'none',border:'none'}} >
                            {/* <InputLabel id="select-club-input"   sx={{width:'100%',outline:'none',border:'none'}}>Select Club</InputLabel> */}
                             
                            <TextField InputProps={{ disableUnderline: true }} sx={{height:40,background:'#F1F3F6'}} id="filled-basic" label="Password" variant="filled" size="small" background="#F1F3F6" />
                        </FormControl>
                        <div className='h-[48px] w-[48px] bg-[#1E2772] rounded-tr rounded-br'> <FaLock style={{color:'white',fontSize:'1.5rem',margin:'auto',marginTop:'10px'}}/> </div>
                    </div>



                    {/* login button */}
                    <div className='w-[80%] m-auto mt-[22px]'>
                        <Button className='login-button'  sx={{background:'#1E2772',color:'white',width:'100%'}} >Log In</Button>
                    </div>
                      


                      {/* forgot password */}
                    <div className='text-center mt-5 cursor-pointer'>Forgot password/ Not having password</div>
                </div>
               
            </div>
            {/* Asset */}
            <div className='md:w-[60%] w-[0%] md:visible invisible'>
                <img className=" items-center justify-center h-[70%] w-[70%] m-auto mr-[10%] mt-[15%]" src={LoginIllustrator} alt="" ></img>

            </div>
        </div>
    )
}

export default Login





