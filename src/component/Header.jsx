import React from 'react'
import { MdLogout } from "react-icons/md"
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Header = () => {
    return (
        <div id="header" className="relative fixed-top w-[100%] h-8 md:h-16 flex items-center justify-center white shadow-md">
            <div className="w-[90%] flex items-center justify-between">
                <div> <img className="h-8 md:h-16 object-cover" src={Logo} alt="Logo" /> </div>
                <div id="navbar" className="flex">
                    <ul className="flex gap-2 md:gap-5">
                        <li className="cursor-pointer text-[9px] md:text-[17px]">Home</li>
                        <li className="cursor-pointer text-[9px] md:text-[17px]"> <a href="#faq">About Us</a></li>
                        <li className="cursor-pointer text-[9px] md:text-[17px]">Events</li>
                        <li className="cursor-pointer text-[9px] md:text-[17px]">Tech</li>
                        <li className="cursor-pointer text-[9px] md:text-[17px]">Contacts</li>
                        <Link to={"/login"}> <li className="cursor-pointer text-[9px] md:text-[17px]"><MdLogout className="m-[4px]" /></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
