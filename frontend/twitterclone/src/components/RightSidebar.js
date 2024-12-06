import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link, useNavigate } from "react-router-dom";

const RightSidebar = ({ otherUsers }) => {
  const navigate = useNavigate();

  const handleChat = (otherUserId) => {
    const id1 = localStorage.getItem("id");
    // Navigate to the chat page with both userId and otherUserId
    navigate(`/chat/${id1}/${otherUserId}`);
  };

  return (
    <div className="w-[25%] bg-gray-900 text-white shadow-lg rounded-lg p-4">
      <div className="flex items-center p-2 bg-gray-800 rounded-full outline-none w-full">
        <CiSearch size="20px" className="text-gray-400" />
        <input
          type="text"
          className="bg-transparent outline-none px-2 text-white placeholder-gray-400"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-gray-800 rounded-2xl my-4">
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
                  <p className="text-sm text-gray-400">{`@${user?.username}`}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link to={`/profile/${user?._id}`}>
                  <button className="px-4 py-1 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-200">
                    Profile
                  </button>
                </Link>
                <button
                  onClick={() => handleChat(user?._id)}
                  className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-200"
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
