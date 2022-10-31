import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Mainpage from './pages/Main/Mainpage';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" />
      <Route path="/join" element={<Signup />} />
      <Route path="/questionBoard" />
      <Route path="/questionBoard/:id" />
    </Routes>
  );
}

export default App;
