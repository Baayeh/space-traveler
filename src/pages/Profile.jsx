/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { leaveMission } from '../redux/missions/missionSlice';
import { cancelRocket } from '../redux/rocket/rockets';

const MySwal = withReactContent(Swal);

const Profile = () => {
  const { missions } = useSelector((state) => state.mission);
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

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

  const cancelReservation = (id) => {
    MySwal.fire({
      title: 'Are you sure you want to cancel?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, go back!',
      reverseButtons: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cancelRocket(id));
        MySwal.fire({
          toast: true,
          position: 'top-end',
          timerProgressBar: true,
          icon: 'success',
          title: 'Rocket Cancelled!',
          showConfirmButton: false,
          timer: 2000,
        });
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        MySwal.fire('Cancelled!', 'Action reverted!', 'error');
      }
    });
  };

  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <section id="profile" className="p-[10rem] text-white">
      <div className="profile-wrapper">
        <section className="mission-section">
          <h2 className="text-2xl mb-2">Missions</h2>
          <ul className="reserved-mission-list">
            {reservedMissions.length === 0 && <li>No missions reserved</li>}
            {reservedMissions
              && reservedMissions.map((mission) => (
                <li key={mission.mission_id}>
                  <span className="text-2xl">{mission.mission_name}</span>
                  <div className="actions">
                    <button
                      type="button"
                      className="border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out"
                      onClick={() => exitMission(mission.mission_id)}
                    >
                      Leave Mission
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </section>
        <section className="rockets-section">
          <h2 className="text-2xl mb-2">Rockets</h2>
          <ul className="reserved-mission-list">
            {reservedRockets.length === 0 && <li>No rockets reserved</li>}
            {reservedRockets
              && reservedRockets.map((rocket) => (
                <li key={rocket.id}>
                  <span className="text-2xl">{rocket.rockets_name}</span>
                  <div className="actions">
                    <button
                      type="button"
                      className="border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out"
                      onClick={() => cancelReservation(rocket.id)}
                    >
                      Cancel Reservation
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </section>
  );
};
export default Profile;
