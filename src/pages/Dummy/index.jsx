import { useContext } from 'react';
import { DummyContext } from '../../contexts/DummyContext';

export const Dummy = () => {
  const { dummy, handleDummy } = useContext(DummyContext);
  return (
    <>
      <p>{dummy}</p>
      <hr/>

      <button
        onClick={() => handleDummy('Lorem Ipsum is simply dummy text')}
      >
        set new data
      </button>
    </>
  );
};