import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Rocket from './pages/Rocket';

function App() {
  return (
    <>
      <NavBar />
      <Routes className="App">
        <Route />
        <Route path="rockets" element={<Rocket />} />
      </Routes>
    </>
  );
}

export default App;
