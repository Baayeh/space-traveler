import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

const fetchAllMissions = async () => {
  const res = await axios.get(URL);
  return res.data;
};

export default fetchAllMissions;
