import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { leaveMission } from '../redux/missions/missionSlice';
import { cancelRocket } from '../redux/rocket/rockets';

const Profile = () => {
  const { missions } = useSelector((state) => state.mission);
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const exitMission = (id) => {
    dispatch(leaveMission(id));
  };

  const cancelReservation = (id) => {
    dispatch(cancelRocket(id));
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
                <span>{rocket.rockets_name}</span>
                <div className="actions">
                  <button type="button" className="leave-btn" onClick={() => cancelReservation(rocket.id)}>
                    Cancel Reservation
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
