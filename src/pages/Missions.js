import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMission,
  leaveMission,
  reserveMission,
} from '../redux/missions/missionSlice';

const Missons = () => {
  const { loading, missions, error } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  const joinMission = (id) => {
    dispatch(reserveMission(id));
  };

  const exitMission = (id) => {
    dispatch(leaveMission(id));
  };

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMission());
    }
  }, []);

  return (
    <div className="mission-wrapper">
      {loading && <div className="loading-msg">Loading...</div>}
      {!loading && error && <div>{error}</div>}
      {!loading && (
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
            {missions?.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="mission-name">{mission.mission_name}</td>
                <td className="td-desc">{mission.description}</td>
                <td className="td-state">
                  {!mission.reserved ? (
                    <span className="inactive-badge">Not A Member</span>
                  ) : (
                    <span className="active-badge">Active Member</span>
                  )}
                </td>
                <td className="td-state">
                  {!mission.reserved ? (
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
                      onClick={() => exitMission(mission.mission_id)}
                    >
                      Leave Mission
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Missons;
