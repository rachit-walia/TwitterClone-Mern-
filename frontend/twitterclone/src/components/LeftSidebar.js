// import React from 'react';
// import { CiHome } from "react-icons/ci";
// import { CiHashtag } from "react-icons/ci";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { CiUser } from "react-icons/ci";
// import { CiBookmark } from "react-icons/ci";
// import { AiOutlineLogout } from "react-icons/ai";
// import { Link,useNavigate } from 'react-router-dom';
// import {useSelector,useDispatch} from "react-redux";
// import axios from "axios";
// import { USER_API_END_POINT } from '../utils/constant';
// import toast from "react-hot-toast"
// import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';
 

// const LeftSidebar = () => {

//     const {user} = useSelector(store=>store.user);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`);
//             localStorage.removeItem("id");
//             dispatch(getUser(null));
//             dispatch(getOtherUsers(null));
//             dispatch(getMyProfile(null));
//             navigate('/login');
//             toast.success(res.data.message);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className='w-[20%]'>
//             <div>
//                 <div>
//                     <img className='ml-5' width={"24px"} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png" alt="twitter-logo" />
//                 </div>
//                 <div className='my-4'>
//                     <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                         <div>
//                             <CiHome size="24px" />
//                         </div>
//                         <h1 className='font-bold text-lg ml-2'>Home</h1>
//                     </Link>
//                     <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                         <div>
//                             <CiHashtag size="24px" />
//                         </div>
//                         <h1 className='font-bold text-lg ml-2'>Explore</h1>
//                     </div>
//                     <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                         <div>
//                             <IoIosNotificationsOutline size="24px" />
//                         </div>
//                         <h1 className='font-bold text-lg ml-2'>Notifications</h1>
//                     </div>
//                     <Link to={`/profile/${user?._id}`} className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                         <div>
//                             <CiUser size="24px" />
//                         </div>
//                         <h1 className='font-bold text-lg ml-2'>Profile</h1>
//                     </Link>
//                     <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                         <div>
//                             <CiBookmark size="24px" />
//                         </div>
//                         <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
//                     </div>
//                     <div onClick={logoutHandler} className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
//                         <div>
//                             <AiOutlineLogout size="24px" />
//                         </div>
//                         <h1 className='font-bold text-lg ml-2'>Logout</h1>
//                     </div>
//                      <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LeftSidebar

import React from 'react';
import { CiHome, CiHashtag, CiUser , CiBookmark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import { getMyProfile, getOtherUsers, getUser  } from '../redux/userSlice';

const LeftSidebar = () => {
    const { user } = useSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`);
            localStorage.removeItem("id");
            dispatch(getUser (null));
            dispatch(getOtherUsers(null));
            dispatch(getMyProfile(null));
            navigate('/login');
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-[20%] bg-gray-900 text-white shadow-lg rounded-lg p-6'>
            <div className='flex items-center mb-6'>
                <div className='bg-gray-800 p-2 rounded-full'>
                    <img className='w-8' src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png" alt="twitter-logo" />
                </div>
            </div>
            <div className='space-y-4'>
                <Link to="/" className='flex items-center px-4 py-3 rounded-full hover:bg-gray-800 transition duration-200'>
                    <CiHome size="28px" className='text-blue-400' />
                    <h1 className='font-semibold text-lg ml-3'>Home</h1>
                </Link>
                <Link to="/explore" className='flex items-center px-4 py-3 rounded-full hover:bg-gray-800 transition duration-200'>
                    <CiHashtag size="28px" className='text-blue-400' />
                    <h1 className='font-semibold text-lg ml-3'>Explore</h1>
                </Link>
                <Link to="/notifications" className='flex items-center px-4 py-3 rounded-full hover:bg-gray-800 transition duration-200'>
                    <IoIosNotificationsOutline size="28px" className='text-blue-400' />
                    <h1 className='font-semibold text-lg ml-3'>Notifications</h1>
                </Link>
                <Link to={`/profile/${user?._id}`} className='flex items-center px-4 py-3 rounded-full hover:bg-gray-800 transition duration-200'>
                    <CiUser  size="28px" className='text-blue-400' />
                    <h1 className='font-semibold text-lg ml-3'>Profile</h1>
                </Link>
                <Link to="/bookmarks" className='flex items-center px-4 py-3 rounded-full hover:bg-gray-800 transition duration-200'>
                    <CiBookmark size="28px" className='text-blue-400' />
                    <h1 className='font-semibold text-lg ml-3'>Bookmarks</h1>
                </Link>
                <div onClick={logoutHandler} className='flex items-center px-4 py-3 rounded-full hover:bg-gray-800 transition duration-200 cursor-pointer'>
                    <AiOutlineLogout size="28px" className='text-blue-400' />
                    <h1 className='font-semibold text-lg ml-3'>Logout</h1>
                </div>
                <button className='w-full py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200 shadow-md'>Post</button>
            </div>
        </div>
    )
}

 
export default LeftSidebar;