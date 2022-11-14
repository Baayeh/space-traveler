import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Missons from './pages/Missions';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <NavBar />
      <Routes className="App">
        <Route className="App" />
        <Route path="missions" element={<Missons />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
