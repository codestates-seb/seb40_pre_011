import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Mainpage from './pages/Main/Mainpage';
import Questions from './pages/Questions/Questions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" />
      <Route path="/join" element={<Questions />} />
      <Route path="/questionBoard" />
      <Route path="/questionBoard/:id" />
    </Routes>
  );
}

export default App;
