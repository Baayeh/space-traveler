import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../redux/rocket/rockets';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRockets());
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
                <h3 className="card-title">{rocket.rockets_name}</h3>
                <p className="card-desc">{rocket.description}</p>
                <button type="button" className="reserve-btn">
                  Reserve Ticket
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Rocket;
