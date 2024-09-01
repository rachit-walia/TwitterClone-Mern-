import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const Profile = () => {
    return (
        <div className='w-[60%] border border-l border-r border-gray-200'>
            <div>
                <div className='flex items-center py-2'>
                    <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                        <IoIosArrowRoundBack size="24px" />
                    </Link>
                    <div className='ml-2'>
                        <h1 className='font-bold text-lg'>Rachit</h1>
                        <p className='text-gray-500 text-sm'>19 Post</p>
                    </div>
                </div>
                {/* Set a fixed height and make the image cover the full width of the div */}
                <img 
                    src="https://imgs.search.brave.com/X-LVsNyIbrLPPEltjQFBs9ngBcpIUZSTYMFn7d1pFhc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3NvLXNhZC1p/bWFnZS1vZi1tYW4t/MTFweDllaHdhd3p4/eDdzei53ZWJw" 
                    alt='heyhello'
                    className="w-full h-64 object-cover"
                />
                <div className='absolute top-52 ml-4 border-4 border-gray rounded-full'>
                    <Avatar src="https://imgs.search.brave.com/NK68W2_DWW98-CDxv-y5sRnL90GasGFoaX-DWw5r3qA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/OTgyNDgzNi9waG90/by9jdXRlLWJyb3du/LWRvZy10aGF0LXNt/aWxlcy1pc29sYXRl/ZC1iYWNrZ3JvdW5k/LndlYnA_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPU0tMzJw/QUVkcm1vM2kzMWNZ/bVFnZHFiWGFHVldP/eUpFVzBxd2E3dWly/dTg9" size="90" round={true} />
                </div>
                <div className='text-right m-2'>
                    <button className='px-4 py-1 hover:bg-gray-300 rounded-full border border-gray-400'>Edit Profile</button>
                </div>
                <div className='m-4'>
                    <h1 className='font-bold text-2xl'>Rachit Walia</h1>
                    <p>Rachitwalia3</p>
                </div>
                <div className='m-4 text-sm'>
                    <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
