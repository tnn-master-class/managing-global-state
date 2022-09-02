import { useState } from 'react';

export const useDummy = () => {
  const [dummy, setDummy] = useState('What is Lorem Ipsum?');

  const handleDummy = data => {
    setDummy(data);
  };

  return { dummy, handleDummy };
};