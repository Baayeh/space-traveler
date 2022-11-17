import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
