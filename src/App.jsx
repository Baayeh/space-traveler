import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <section>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default App;
