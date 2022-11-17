import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

const fetchAllMissions = async () => {
  const res = await axios.get(URL);
  return res.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
};

export default fetchAllMissions;
