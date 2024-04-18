import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx"
import { IoSearchOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }
    return (
        <>  
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
                zIndex: 9999999999
            }}>
                <div onClick={(e) => {e.stopPropagation()}} className='w-[500px] bg-white h-full absolute duration-[300ms]' style={{left: toggle ? '0%' : '-100%'}}></div>
            </div>
            <header className='p[15px] shadow-xl text-[#686b78]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-[60px] h-[60px] pt-4'>
                        <img src='images/Swiggy-logo.png' className='w-full' alt=''/>
                    </div>
                    <div>
                        <span className='font-bold border-b-[3px] border-[black]'>Bhubaneswar</span>  Odisha, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019] cursor-pointer'/>
                    </div>
                    <nav className='flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                            <li className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                                <IoSearchOutline/>
                                Search
                            </li>
                            <li className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                                <CiDiscount1/>
                                Offers<sup className='text-[#ebad5b]'>New</sup>
                            </li>
                            <li className='cursor-pointer hover:text-[#fc8019]'>
                                Help
                            </li>
                            <li className='cursor-pointer hover:text-[#fc8019]'>
                                Sign In
                            </li>
                            <li className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                                <MdOutlineShoppingCart />
                                Cart<sup className='text-[#ebad5b]'>(3)</sup>
                            </li>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header