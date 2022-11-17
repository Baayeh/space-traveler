import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelRocket, fetchAllRockets, reserveRocket } from '../redux/rocket/rockets';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const bookRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReservation = (id) => {
    dispatch(cancelRocket(id));
  };

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchAllRockets());
    }
  }, []);

  return (
    <ul className="rocket-list">
      {rockets
        && rockets?.map((rocket) => (
          <li className="list-item" key={rocket.id}>
            <div className="card">
              <div
                className="card-img"
                style={{
                  backgroundImage: `url(${rocket.flickr_images})`,
                }}
              />
              <div className="card-body md:w-[70%]">
                <h3 className="card-title">
                  <span>{rocket.rockets_name}</span>
                  {rocket && rocket.reserved === true && (
                    <small>Reserved</small>
                  )}
                </h3>
                <p className="card-desc">{rocket.description}</p>
                {!rocket.reserved ? (
                  <button
                    type="button"
                    className="reserve-btn"
                    onClick={() => bookRocket(rocket.id)}
                  >
                    Join Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="leave-btn"
                    onClick={() => cancelReservation(rocket.id)}
                  >
                    Leave Mission
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Rocket;
