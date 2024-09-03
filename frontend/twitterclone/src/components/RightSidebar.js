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
                        <Avatar src="https://imgs.search.brave.com/Bozh4LBaQo8R-1Vrdj5L5rfqw1NeuZd0T1FkLOHnp8k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZmFtb3VzcGVv/cGxlLmNvbS9wcm9m/aWxlcy90aHVtYnMv/bWljaGVsZS1tb3Jy/b25lLTQuanBn" size="40" round={true} />
                        </div>
                        
                    <div className='ml-2 '>
                        <h1 className='font-bold'>Michele Morrone</h1>
                        <p className='text-sm'>Michele@offical</p>
                    </div>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div>
                 </div>

                 <div className='flex items-center justify-between my-4'>
                    <div className='flex'>
                        <div>
                        <Avatar src="https://imgs.search.brave.com/pLFj9x_1QeyMFsWZPl1KkML8MK-iFZIis_RDAFUR9B4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oYW1h/cml3ZWIuY29tL3By/b2ZpbGVzL2ltYWdl/cy9wcm9maWxlL1Rh/YXBzZWUtUGFubnUu/anBn" size="40" round={true} />
                        </div>
                        
                    <div className='ml-2 '>
                        <h1 className='font-bold'>Tapsee pannu</h1>
                        <p className='text-sm'>tapseee</p>
                    </div>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                    </div>
                 </div>

                 <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <div>
                        <Avatar src="https://imgs.search.brave.com/ABwsGzBqduwf-b0AwgdIPQ3OgMOZQJfKlcQnpeiT2RA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWV3aXJlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMC90aGUtZGFy/ay1rbmlnaHQtY2hy/aXN0aWFuLWJhbGUu/anBnP3c9MTAwMCZo/PTU2MyZjcm9wPTE" size="40" round={true} />
                        </div>
                        
                    <div className='ml-2 '>
                        <h1 className='font-bold'>Christian Bale</h1>
                        <p className='text-sm'>christ@bale</p>
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