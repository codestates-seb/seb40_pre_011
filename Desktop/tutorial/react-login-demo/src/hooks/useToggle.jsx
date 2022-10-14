import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(true);

  const togglehandler = ()=>{
    setToggle(!toggle);
  }
  
  return [toggle, togglehandler];
}

export default useToggle;