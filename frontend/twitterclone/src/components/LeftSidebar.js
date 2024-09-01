import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineBookmarks } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
const LeftSidebar=()=>{
    return (
        <div className='w-[20%]'>
            <div>
                <div>
                    <img className='ml-4' width={"35px"}  src='https://imgs.search.brave.com/aqB_1MrCNFw2qHhI7HfUwq5kJ8L-bdVz_Lsn3Ac_tsk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzgxLzMwLzQ3/LzM2MF9GXzY4MTMw/NDc4MF92SkZoYlVt/VWhlZXhKMnVVQ2hk/MW5PdTFQZ1A5TjdQ/TS5qcGc' alt='twitter-logo'/>
                </div>
                <div className='my-4'>
                    <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <AiOutlineHome size={"24px"}/>
                        </div>
                       
                        <h1 className='font-bold text-lg ml-2'>Home</h1>
                    </Link>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <IoSearchOutline size={"24px"}/>
                        </div>
                       
                        <h1 className='font-bold text-lg ml-2'>Explore</h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <IoMdNotificationsOutline size={"24px"}/>
                        </div>
                       
                        <h1 className='font-bold text-lg ml-2'>Notification</h1>
                    </div>
                    <Link to="profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <IoPersonOutline size={"24px"}/>
                        </div>
                       
                        <h1 className='font-bold text-lg ml-2'>Profile</h1>
                    </Link>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <MdOutlineBookmarks size={"24px"}/>
                        </div>
                       
                        <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <IoIosLogOut size={"24px"}/>
                        </div>
                       
                        <h1 className='font-bold text-lg ml-2'>Logout</h1>
                    </div>
                    
                    <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold w-[60%]'>Post</button>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
}
export default LeftSidebar