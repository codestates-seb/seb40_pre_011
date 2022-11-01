import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import LogoutPage from './pages/Logout/LogoutPage';
import Mainpage from './pages/Main/Mainpage';
import QuestionDetail from './pages/QuestionDetail/QuestionDetail';
import Questions from './pages/Questions/Questions';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/join" element={<Signup />} />
      <Route path="/questionBoard" element={<Questions />} />
      <Route path="/questionBoard/Detail" element={<QuestionDetail />} />
    </Routes>
  );
}

export default App;
