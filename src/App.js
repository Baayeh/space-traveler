import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Missons from './pages/Missions';

function App() {
  return (
    <>
      <NavBar />
      <Routes className="App">
        <Route className="App" />
        <Route path="missions" element={<Missons />} />
      </Routes>
    </>
  );
}

export default App;
