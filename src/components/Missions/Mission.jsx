import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissionAction, leaveMissionAction } from '../../Redux/Missions/missions';
import './Missions.css';

const Mission = (props) => {
  const {
    missionId, missionName, description, reserved,
  } = props;
  const dispatch = useDispatch();

  const handleButtonClickAction = (e) => {
    e.preventDefault();
    const { id } = e.target;
    if (e.target.textContent === 'Join Mission') dispatch(joinMissionAction(id));
    if (e.target.textContent === 'Leave Mission') dispatch(leaveMissionAction(id));
  };

  return (
    <>
      <div className="missions-data">
        <div className="col-1">
          {missionName}
        </div>
        <div className="col-2">
          {description}
        </div>
        <div className={reserved ? 'col-3 reserved' : 'col-3 unreserved'}>
          <span>
            {reserved ? 'Active Member' : 'Not a Member'}
          </span>
        </div>
        <div className={reserved ? 'col-4 join-mission' : 'col-4 leave-mission'}>
          <button
            type="submit"
            id={missionId}
            onClick={handleButtonClickAction}
          >
            {reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </div>
      </div>
    </>
  );
};

Mission.propTypes = {
  missionId: propTypes.string.isRequired,
}.isRequired;

export default Mission;
