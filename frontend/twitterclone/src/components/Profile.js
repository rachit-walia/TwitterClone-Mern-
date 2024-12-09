import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import useGetProfile from "../hooks/useGetProfile";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { followingUpdate } from "../redux/userSlice";
import { getRefresh } from "../redux/tweetSlice";
import './Profile.css';

const Profile = () => {
  const { user, profile } = useSelector((store) => store.user);
  const { id } = useParams();
  useGetProfile(id);
  const dispatch = useDispatch();

  const followAndUnfollowHandler = async () => {
    if (user.following.includes(id)) {
      // Unfollow
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, {
          id: user?._id,
        });
        dispatch(followingUpdate(id));
        dispatch(getRefresh());
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      // Follow
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, {
          id: user?._id,
        });
        dispatch(followingUpdate(id));
        dispatch(getRefresh());
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <Link to="/" className="back-button">
          <IoMdArrowBack size="24px" />
        </Link>
        <div className="profile-name">
          <h1>{profile?.name}</h1>
          <p>{profile?.posts?.length} posts</p>
        </div>
      </div>
      <div className="banner">
        <img
          src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"
          alt="banner"
        />
      </div>
      <div className="profile-pic-container">
        <Avatar
          src={profile?.profilePic}
          size="120"
          round={true}
          className="profile-pic"
        />
      </div>
      <div className="profile-info">
        <h1>{profile?.name}</h1>
        <p>@{profile?.username}</p>
        <div className="followers-following">
          <span>{profile?.followers?.length} Followers</span>
          <span>{profile?.following?.length} Following</span>
        </div>
      </div>
      <div className="bio">
        <p>{profile?.bio}</p>
      </div>
      <div className="follow-button-container">
        <button
          onClick={followAndUnfollowHandler}
          className={`follow-button ${user.following.includes(id) ? "following" : ""}`}
        >
          {user.following.includes(id) ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
