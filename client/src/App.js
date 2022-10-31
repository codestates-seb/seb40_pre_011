import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import LogoutPage from './pages/Logout/LogoutPage';
import Mainpage from './pages/Main/Mainpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/join" />
      <Route path="/questionBoard" />
      <Route path="/questionBoard/:id" />
    </Routes>
  );
}

export default App;
