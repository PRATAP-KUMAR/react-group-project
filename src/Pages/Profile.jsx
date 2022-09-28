import React from 'react';
import { useSelector } from 'react-redux';
import { getDragons } from '../Redux/Dragons/dragonsSlice';
import SpaceProfile from '../components/Dragons/Profiles';

const Profile = () => {
  const dragons = useSelector(getDragons);
  const rockets = useSelector((state) => state.rocketReducer);
  const missions = useSelector((state) => state.MissionsDataReducer);
  return (
    <div className="profile__container">
      <div className="space__profile__container">
        <h3 className="space__profile__heading">My Rockets</h3>
        <ul className="space__profile__list__wrapper">
          {rockets.filter((item) => item.reserved).map((item) => (
            <SpaceProfile key={item.rocket_id} className={item.length === 0 ? 'space__profile__list__no_border' : 'space__profile__list'} name={item.rocket_name} />
          ))}
        </ul>
      </div>
      <div className="space__profile__container">
        <h3 className="space__profile__heading">My Dragons</h3>
        <ul className="space__profile__list__wrapper">
          {dragons.filter((item) => item.reserved).map((item) => (
            <SpaceProfile key={item.id} className={item.length === 0 ? 'space__profile__list__no_border' : 'space__profile__list'} name={item.name} />
          ))}
        </ul>
      </div>
      <div className="space__profile__container">
        <h3 className="space__profile__heading">My Missions</h3>
        <ul className="space__profile__list__wrapper">
          {missions.filter((item) => item.reserved).map((item) => (
            <SpaceProfile key={item.mission_id} className="space__profile__list" name={item.mission_name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
