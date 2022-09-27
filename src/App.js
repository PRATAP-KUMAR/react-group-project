import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';
import RocketsPage from './Pages/RocketsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
