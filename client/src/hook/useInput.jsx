import { useState } from 'react';

const useInput = initialState => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState(false);
  const [ment, setMent] = useState('');
  const changeValue = e => {
    setValue(e.target.value);
  };
  const remove = () => {
    setValue(initialState);
  };

  const changeError = bool => {
    setError(bool);
  };

  return [value, changeValue, remove, error, changeError, ment, setMent];
};

export default useInput;
