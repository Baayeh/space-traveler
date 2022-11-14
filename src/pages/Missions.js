import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
import { fetchMission } from '../redux/missions/missionSlice';

const Missons = () => {
  const mission = useSelector((state) => state.mission.missions);
  const [missions, setMissions] = useState(null);

  const handleMissions = () => {
    if (mission.length) {
      setMissions(mission);
    }
  };
  console.log(mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
    handleMissions();
  }, []);

  console.log(missions);

  return (
    // <DataTable value={missions}>
    //   <Column field="code" header="Code" />
    //   <Column field="name" header="Name" />
    //   <Column field="category" header="Category" />
    //   <Column field="quantity" header="Quantity" />
    // </DataTable>
    <div>Mission</div>
  );
};

export default Missons;
