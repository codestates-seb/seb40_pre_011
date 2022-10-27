import { Route, Routes } from "react-router-dom";

function App() {
  return <Routes>
    <Route path="/" />
    <Route path="/login" />
    <Route path="/logout" />
    <Route path="/join" />
    <Route path="/questionBoard" />
    <Route path="/questionBoard/:id" />
  </Routes>
}

export default App;
