import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const baseUrl = 'https://api.spacexdata.com/v3';

const useFetch = (url, setAction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseUrl}/${url}`);
      setData(response.data.data);
      dispatch(setAction(response.data));
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(
        'Something went wrong. Please refresh the page or try again later.',
      );
      setLoading(false);
      setData(null);
    }
  };

  const resetState = () => {
    setData(null);
    setLoading(false);
    setError(null);
  };

  return {
    data,
    loading,
    error,
    fetchData,
    resetState,
  };
};

export default useFetch;
