import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { leaveMission } from '../redux/missions/missionSlice';

const Profile = () => {
  const { missions } = useSelector((state) => state.mission);
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const exitMission = (id) => {
    dispatch(leaveMission(id));
  };

  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-wrapper">
      <section className="mission-section">
        <h2>Missions</h2>
        <ul className="reserved-mission-list">
          {reservedMissions.length === 0 && <li>No missions reserved</li>}
          {reservedMissions
            && reservedMissions.map((mission) => (
              <li key={mission.mission_id}>
                <span>{mission.mission_name}</span>
                <div className="actions">
                  <button type="button" className="leave-btn" onClick={() => exitMission(mission.mission_id)}>
                    Leave Mission
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>
      <section className="rockets-section">
        <h2>Rockets</h2>
        <ul className="reserved-mission-list">
          {reservedRockets.length === 0 && <li>No rockets reserved</li>}
          {reservedRockets
            && reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <span>{rocket.rocket_name}</span>
                <div className="actions">
                  <button type="button" className="leave-btn">
                    Leave Mission
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
