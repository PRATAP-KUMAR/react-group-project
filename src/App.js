import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
