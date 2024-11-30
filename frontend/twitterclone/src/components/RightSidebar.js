// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import Avatar from "react-avatar";
// import { Link } from 'react-router-dom';

// const RightSidebar = ({ otherUsers }) => {

//   return (
//     <div className='w-[25%]'>
//       <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
//         <CiSearch size="20px" />
//         <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
//       </div>
//       <div className='p-4 bg-gray-100 rounded-2xl my-4'>
//         <h1 className='font-bold text-lg'>Who to follow</h1>
//         {
//           otherUsers?.map((user) => {
//             return (
//               <div key={user?._id} className='flex items-center justify-between my-3'>
//                 <div className='flex'>
//                   <div>
//                     <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
//                   </div>
//                   <div className='ml-2'>
//                     <h1 className='font-bold'>{user?.name}</h1>
//                     <p className='text-sm'>{`@${user?.username}`}</p>
//                   </div>
//                 </div>
//                 <div>
//                   <Link to={`/profile/${user?._id}`}>
//                     <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
//                   </Link>
//                 </div>
//               </div>
//             )
//           })
//         }



//       </div>
//     </div>
//   )
// }

// export default RightSidebar

// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import Avatar from "react-avatar";
// import { Link, useNavigate } from 'react-router-dom';

// const RightSidebar = ({ otherUsers }) => {
//   const navigate = useNavigate();

//   const handleChat = (userId) => {
//     // Navigate to the chat page for the selected user
//     navigate(`/chat/${userId}/`);
//   };

//   return (
//     <div className='w-[25%]'>
//       <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
//         <CiSearch size="20px" />
//         <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
//       </div>
//       <div className='p-4 bg-gray-100 rounded-2xl my-4'>
//         <h1 className='font-bold text-lg'>Who to follow</h1>
//         {
//           otherUsers?.map((user) => {
//             return (
//               <div key={user?._id} className='flex items-center justify-between my-3'>
//                 <div className='flex'>
//                   <div>
//                     <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
//                   </div>
//                   <div className='ml-2'>
//                     <h1 className='font-bold'>{user?.name}</h1>
//                     <p className='text-sm'>{`@${user?.username}`}</p>
//                   </div>
//                 </div>
//                 <div className='flex space-x-2'>
//                   <Link to={`/profile/${user?._id}`}>
//                     <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
//                   </Link>
//                   <button 
//                     onClick={() => handleChat(user?._id)}
//                     className='px-4 py-1 bg-blue-500 text-white rounded-full'>
//                     Chat
//                   </button>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default RightSidebar;

import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link, useNavigate } from "react-router-dom";

const RightSidebar = ({ otherUsers, currentUserId }) => {
  const navigate = useNavigate();

  const handleChat = (otherUserId) => {
    const id1=localStorage.getItem("id");
    // Navigate to the chat page with both userId and otherUserId
    navigate(`/chat/${id1}/${otherUserId}`);
  };

  return (
    <div className="w-[25%]">
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none w-full">
        <CiSearch size="20px" />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg">Who to follow</h1>
        {otherUsers?.map((user) => {
          return (
            <div
              key={user?._id}
              className="flex items-center justify-between my-3"
            >
              <div className="flex">
                <div>
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                    size="40"
                    round={true}
                  />
                </div>
                <div className="ml-2">
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-sm">{`@${user?.username}`}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link to={`/profile/${user?._id}`}>
                  <button className="px-4 py-1 bg-black text-white rounded-full">
                    Profile
                  </button>
                </Link>
                <button
                  onClick={() => handleChat(user?._id)}
                  className="px-4 py-1 bg-blue-500 text-white rounded-full"
                >
                  Chat
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;


// import React, { useState, useEffect } from "react";
// import { CiSearch } from "react-icons/ci";
// import Avatar from "react-avatar";
// import { Link } from "react-router-dom";

// const RightSidebar = ({ otherUsers }) => {
//   const [userId, setUserId] = useState(null);

//   // Fetch user data (including userId) from the backend
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/getUser", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Send token if needed
//           },
//         });

//         if (response.ok) {
//           const userData = await response.json();
//           setUserId(userData.id); // Assuming user data has an 'id' field
//         } else {
//           console.log("Failed to fetch user data");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []); // Empty dependency array means this runs only once when the component mounts

//   const handleChat = (receiverId) => {
//     if (userId) {
//       // Navigate to the chat route with both userId and receiverId
//       window.location.href = `/chat/${userId}/${receiverId}`;
//     }
//   };

//   return (
//     <div className="w-[25%]">
//       <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none w-full">
//         <CiSearch size="20px" />
//         <input
//           type="text"
//           className="bg-transparent outline-none px-2"
//           placeholder="Search"
//         />
//       </div>
//       <div className="p-4 bg-gray-100 rounded-2xl my-4">
//         <h1 className="font-bold text-lg">Who to follow</h1>
//         {otherUsers?.map((user) => (
//           <div
//             key={user?._id}
//             className="flex items-center justify-between my-3"
//           >
//             <div className="flex">
//               <div>
//                 <Avatar
//                   src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
//                   size="40"
//                   round={true}
//                 />
//               </div>
//               <div className="ml-2">
//                 <h1 className="font-bold">{user?.name}</h1>
//                 <p className="text-sm">{`@${user?.username}`}</p>
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <Link to={`/profile/${user?._id}`}>
//                 <button className="px-4 py-1 bg-black text-white rounded-full">
//                   Profile
//                 </button>
//               </Link>
//               <button
//                 onClick={() => handleChat(user?._id)}
//                 className="px-4 py-1 bg-blue-500 text-white rounded-full"
//               >
//                 Chat
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RightSidebar;
