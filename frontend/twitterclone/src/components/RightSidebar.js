import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
const RightSidebar=()=>{
    return (
        <div className='w-[20%] '>
            <div className=' flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
                <CiSearch size="22px"/>
                <input type="text" className='bg-transparent outline-none px-2'  placeholder='Search'></input>
            </div>
            <div className='p-4 bg-gray-100 rounded-2xl my-4'>
                <h1 className='font-bold text-lg my-3'>Who to follow</h1>
                <div className='flex items-center justify-between my-3'>
                    <div className='flex'>
                        <div>
                        <Avatar src="https://imgs.search.brave.com/NK68W2_DWW98-CDxv-y5sRnL90GasGFoaX-DWw5r3qA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/OTgyNDgzNi9waG90/by9jdXRlLWJyb3du/LWRvZy10aGF0LXNt/aWxlcy1pc29sYXRl/ZC1iYWNrZ3JvdW5k/LndlYnA_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPU0tMzJw/QUVkcm1vM2kzMWNZ/bVFnZHFiWGFHVldP/eUpFVzBxd2E3dWly/dTg9" size="40" round={true} />
                        </div>
                        
                    <div className='ml-2 '>
                        <h1 className='font-bold'>Rachit</h1>
                        <p className='text-sm'>rachit@3</p>
                    </div>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div>
                 </div>

                 <div className='flex items-center justify-between my-4'>
                    <div className='flex'>
                        <div>
                        <Avatar src="https://imgs.search.brave.com/NK68W2_DWW98-CDxv-y5sRnL90GasGFoaX-DWw5r3qA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/OTgyNDgzNi9waG90/by9jdXRlLWJyb3du/LWRvZy10aGF0LXNt/aWxlcy1pc29sYXRl/ZC1iYWNrZ3JvdW5k/LndlYnA_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPU0tMzJw/QUVkcm1vM2kzMWNZ/bVFnZHFiWGFHVldP/eUpFVzBxd2E3dWly/dTg9" size="40" round={true} />
                        </div>
                        
                    <div className='ml-2 '>
                        <h1 className='font-bold'>Rachit</h1>
                        <p className='text-sm'>rachit@3</p>
                    </div>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div>
                 </div>

                 <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <div>
                        <Avatar src="https://imgs.search.brave.com/NK68W2_DWW98-CDxv-y5sRnL90GasGFoaX-DWw5r3qA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/OTgyNDgzNi9waG90/by9jdXRlLWJyb3du/LWRvZy10aGF0LXNt/aWxlcy1pc29sYXRl/ZC1iYWNrZ3JvdW5k/LndlYnA_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPU0tMzJw/QUVkcm1vM2kzMWNZ/bVFnZHFiWGFHVldP/eUpFVzBxd2E3dWly/dTg9" size="40" round={true} />
                        </div>
                        
                    <div className='ml-2 '>
                        <h1 className='font-bold'>Rachit</h1>
                        <p className='text-sm'>rachit@3</p>
                    </div>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div>
                 </div>
            </div>

            
        </div>
    )
}
export default RightSidebar