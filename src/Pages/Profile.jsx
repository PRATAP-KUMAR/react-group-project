import React from 'react';
import { useSelector } from 'react-redux';
import { getDragons } from '../Redux/Dragons/dragonsSlice';
import SpaceProfile from '../components/Dragons/Profiles';

const Profile = () => {
  const dragons = useSelector(getDragons);
  console.log(dragons);
  return (
    <div className="profile__container">
      <SpaceProfile items={dragons} header={'My Dragons'} />
      <SpaceProfile items={dragons} header={'My Rockets'} />
    </div>
  );
};

export default Profile;
