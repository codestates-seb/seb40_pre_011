import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Main/Mainpage';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" />
      <Route path="/logout" />
      <Route path="/join" element={<Signup />} />
      <Route path="/questionBoard" />
      <Route path="/questionBoard/:id" />
    </Routes>
  );
}

export default App;
