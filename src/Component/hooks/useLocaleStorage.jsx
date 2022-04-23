import { useState, useEffect } from 'react';

const useLocaleStorage = (key, defaultContacts) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultContacts;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default useLocaleStorage; 