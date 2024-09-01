import React from 'react'
import Avatar from "react-avatar"
import { LuImageMinus } from "react-icons/lu";
const CreatePost=()=>{
    return (
        <div className='w-[100%]'>
            <div>
            <div className='flex items-center justify-evenly border-b border-gray-200'>
               <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                <h1 className='font-bold text-gray-600 text-lg'>For you</h1>
            </div>

            <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                <h1 className='font-bold text-gray-600 text-lg '>Following</h1>
            </div>
            </div>
           <div>
                <div className='flex items-center p-4'>
                    <div>
                    <Avatar src="https://imgs.search.brave.com/NK68W2_DWW98-CDxv-y5sRnL90GasGFoaX-DWw5r3qA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/OTgyNDgzNi9waG90/by9jdXRlLWJyb3du/LWRvZy10aGF0LXNt/aWxlcy1pc29sYXRl/ZC1iYWNrZ3JvdW5k/LndlYnA_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPU0tMzJw/QUVkcm1vM2kzMWNZ/bVFnZHFiWGFHVldP/eUpFVzBxd2E3dWly/dTg9" size="40" round={true} />
                    </div>
                    <input className='w-full outline-none border-none text-lg ml-2' type='text' placeholder='What is happening?!'/>
                </div>
                <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                    <div>
                    <LuImageMinus size="22px"/>
                    </div>
                   <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full'>Post</button> 
                </div>
                
            </div>
            </div>

        </div>
    )
}
export default CreatePost
