import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  cancelRocket,
  fetchAllRockets,
  reserveRocket,
} from '../redux/rocket/rockets';

const MySwal = withReactContent(Swal);

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const bookRocket = (id) => {
    dispatch(reserveRocket(id));
    MySwal.fire({
      toast: true,
      position: 'top-end',
      timerProgressBar: true,
      icon: 'success',
      title: 'Rocket Booked!',
      showConfirmButton: false,
      timer: 2000,
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
        MySwal.fire(
          'Cancelled!',
          'Action reverted!',
          'error',
        );
      }
    });
  };

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchAllRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <section id="rockets" className="p-[10rem]">
      <div className="rocket-list text-white flex flex-wrap justify-center gap-7">
        {rockets
          && rockets?.map((rocket) => (
            <div
              key={rocket.id}
              className="rocket-card border rounded relative overflow-hidden"
            >
              {rocket && rocket.reserved === true && (
                <small className="bg-green-600 p-3 rounded-full absolute uppercase font-bold shadow-lg top-3 right-4">
                  Reserved
                </small>
              )}
              <div className="rocket-img rounded overflow-hidden w-[40rem] h-[30rem]">
                <img
                  src={rocket.flickr_images}
                  alt={rocket.rockets_name}
                  className="w-[40rem] h-[30rem]"
                />
              </div>
              <div className="rocket-overlay bg-orange-500">
                <div className="rocket-desc p-10 text-lg flex flex-col justify-center items-center h-full">
                  <h3 className="uppercase text-2xl font-bold underline">
                    {rocket.rockets_name}
                  </h3>
                  <p className="mt-1 mb-3 text-center font">
                    {rocket.description}
                  </p>
                  {rocket.reserved === true && (
                    <button
                      type="button"
                      className="border px-5 py-2 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 ease-in-out"
                      onClick={() => cancelReservation(rocket.id)}
                    >
                      Cancel Reservation
                    </button>
                  )}
                  {rocket.reserved !== true && (
                    <button
                      type="button"
                      className="border px-5 py-2 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 ease-in-out"
                      onClick={() => bookRocket(rocket.id)}
                    >
                      Reserve Rocket
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Rocket;
