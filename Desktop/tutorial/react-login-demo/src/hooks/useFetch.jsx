import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
      fetch(url)
      .then(res => {return res.json();})
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])
  
  return [data];
}

export default useFetch;