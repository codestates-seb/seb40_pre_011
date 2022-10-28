import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" />
      <Route path="/logout" />
      <Route path="/join" />
      <Route path="/questionBoard" />
      <Route path="/questionBoard/:id" />
    </Routes>
  );
}

export default App;
