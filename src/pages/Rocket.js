import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../redux/rocket/rockets';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRockets());
  }, []);

  console.log(rockets);

  return (
    <div>
      <h1>All Rockets</h1>
    </div>
  );
};

export default Rocket;
