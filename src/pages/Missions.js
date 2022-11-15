import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/missions/missionSlice';

const Missons = () => {
  const missionData = useSelector((state) => state.mission.missions);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const joinMission = (id) => {
    missionData?.forEach((mission) => {
      if (mission.mission_id === id) {
        setActive(true);
      }
    });
  };

  const leaveMission = () => {
    setActive(false);
  };

  useEffect(() => {
    dispatch(fetchMission());
  }, []);

  return (
    <div className="mission-wrapper">
      <table className="mission-table">
        <thead className="thead-row">
          <tr>
            <th className="t-head">Mission</th>
            <th className="t-head">Description</th>
            <th className="t-head">State</th>
            <th className="t-head"> </th>
          </tr>
        </thead>
        <tbody>
          {missionData?.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td className="td-desc">{mission.description}</td>
              <td className="td-state">
                <span className="member-badge">Not A Member</span>
              </td>
              <td>
                {!active ? (
                  <button
                    type="button"
                    className="join-btn"
                    onClick={() => joinMission(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="leave-btn"
                    onClick={leaveMission}
                  >
                    Leave Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missons;
