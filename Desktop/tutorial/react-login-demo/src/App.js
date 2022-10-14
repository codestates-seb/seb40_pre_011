import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import SignUp from './component/SignUp';
import useFetch from './hooks/useFetch';
import useToggle from "./hooks/useToggle";
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  const [toggle, togglehandler] = useToggle();
  const [data] = useFetch("http://localhost:3000/data");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home toggle={toggle} togglehandler={togglehandler} data={data} login={login} setLogin={setLogin}/>}></Route>
        <Route path='/signup' element={<SignUp toggle={toggle} togglehandler={togglehandler}  data={data}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
