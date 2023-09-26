import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import ToasterProvider from './libs/ToasterProvider';

function App() {
  return (
    <section>
      <NavBar />
      <main>
        <Outlet />
        <ToasterProvider />
      </main>
    </section>
  );
}

export default App;
