import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';
import DragonsPage from './Pages/Dragons/DragonsPage';
import NotFound from './Pages/ErrorPage/NotFound';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/dragons" element={<DragonsPage />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
