import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  fetchMission,
  leaveMission,
  reserveMission,
} from '../redux/missions/missionSlice';

const MySwal = withReactContent(Swal);

const Missions = () => {
  const { loading, missions, error } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  const joinMission = (id) => {
    dispatch(reserveMission(id));
    MySwal.fire({
      toast: true,
      position: 'top-end',
      timerProgressBar: true,
      icon: 'success',
      title: 'You have joined this mission',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const exitMission = (id) => {
    MySwal.fire({
      title: 'Are you sure you want to leave mission?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, leave mission!',
      cancelButtonText: 'No, go back!',
      reverseButtons: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(leaveMission(id));
        MySwal.fire({
          toast: true,
          position: 'top-end',
          timerProgressBar: true,
          icon: 'success',
          title: 'You have left the mission',
          showConfirmButton: false,
          timer: 2000,
        });
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire(
          'Cancelled!',
          'Action reverted!',
          'error',
        );
      }
    });
  };

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMission());
    }
  }, [dispatch, missions.length]);

  return (
    <section id="missions" className="p-[10rem] text-white">
      <div className="mission-wrapper">
        {loading && <div className="loading-msg">Loading...</div>}
        {!loading && error && <div>{error}</div>}
        {!loading && (
          <table className="mission-table mx-auto">
            <thead className="thead-row">
              <tr className="bg-slate-400 text-slate-800">
                <th className="border border-black p-4 w-[20rem] text-2xl uppercase">
                  Mission
                </th>
                <th className="border border-black p-4 w-[45rem] text-2xl uppercase">
                  Description
                </th>
                <th className="border border-black p-4 w-[15rem] text-2xl uppercase">
                  State
                </th>
                <th className="border border-black p-4 w-[15rem] text-2xl uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {missions?.map((mission) => (
                <tr key={mission.mission_id}>
                  <td className="mission-name border p-4 text-xl">
                    {mission.mission_name}
                  </td>
                  <td className="td-desc border p-4">{mission.description}</td>
                  <td className="td-state border p-4 text-center">
                    {!mission.reserved ? (
                      <span className="bg-slate-500 px-4 py-2 rounded-full">
                        Not A Member
                      </span>
                    ) : (
                      <span className="bg-green-600 px-4 py-2 rounded-full">
                        Active Member
                      </span>
                    )}
                  </td>
                  <td className="td-state border p-4 text-center">
                    {!mission.reserved ? (
                      <button
                        type="button"
                        className="border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out"
                        onClick={() => joinMission(mission.mission_id)}
                      >
                        Join Mission
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out"
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
    </section>
  );
};

export default Missions;
