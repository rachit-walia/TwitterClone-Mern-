import React from 'react';
import { CiHome, CiHashtag, CiUser, CiBookmark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';

const LeftSidebar = () => {
    const { user } = useSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`);
            localStorage.removeItem("id");
            dispatch(getUser(null));
            dispatch(getOtherUsers(null));
            dispatch(getMyProfile(null));
            navigate('/login');
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-[20%] bg-white text-gray-800 shadow-lg rounded-lg p-6'>
            <div className='flex items-center mb-6'>
                <div className='bg-gray-200 p-2 rounded-full'>
                    <img className='w-8' src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png" alt="twitter-logo" />
                </div>
            </div>
            <div className='space-y-4'>
                <Link to="/" className='flex items-center px-4 py-3 rounded-full hover:bg-gray-200 transition duration-200'>
                    <CiHome size="28px" className='text-blue-500' />
                    <h1 className='font-semibold text-lg ml-3'>Home</h1>
                </Link>
                <Link to="/explore" className='flex items-center px-4 py-3 rounded-full hover:bg-gray-200 transition duration-200'>
                    <CiHashtag size="28px" className='text-blue-500' />
                    <h1 className='font-semibold text-lg ml-3'>Explore</h1>
                </Link>
                <Link to="/notifications" className='flex items-center px-4 py-3 rounded-full hover:bg-gray-200 transition duration-200'>
                    <IoIosNotificationsOutline size="28px" className='text-blue-500' />
                    <h1 className='font-semibold text-lg ml-3'>Notifications</h1>
                </Link>
                <Link to={`/profile/${user?._id}`} className='flex items-center px-4 py-3 rounded-full hover:bg-gray-200 transition duration-200'>
                    <CiUser size="28px" className='text-blue-500' />
                    <h1 className='font-semibold text-lg ml-3'>Profile</h1>
                </Link>
                <Link to="/bookmarks" className='flex items-center px-4 py-3 rounded-full hover:bg-gray-200 transition duration-200'>
                    <CiBookmark size="28px" className='text-blue-500' />
                    <h1 className='font-semibold text-lg ml-3'>Bookmarks</h1>
                </Link>
                <div onClick={logoutHandler} className='flex items-center px-4 py-3 rounded-full hover:bg-gray-200 transition duration-200 cursor-pointer'>
                    <AiOutlineLogout size="28px" className='text-blue-500' />
                    <h1 className='font-semibold text-lg ml-3'>Logout</h1>
                </div>
                <button className='w-full py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-200 shadow-md'>Post</button>
            </div>
        </div>
    )
}

export default LeftSidebar;
