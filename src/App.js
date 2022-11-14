import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes className="App">
        <Route className="App" />
      </Routes>
    </>
  );
}

export default App;
