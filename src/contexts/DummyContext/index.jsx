import { createContext } from 'react';
import { useDummy } from '../../hooks/use-dummy';

const DummyContext = createContext();

const DummyProvider = ({ children }) => {
  const { dummy, handleDummy } = useDummy();

  return (
    <DummyContext.Provider value={{ dummy, handleDummy }}>
      {children}
    </DummyContext.Provider>
  );
};

export { DummyProvider, DummyContext };