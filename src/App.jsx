import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DummyProvider } from './contexts/DummyContext';
import { Dummy } from './pages/Dummy';

const App = () => (
  <Router>
    <DummyProvider>
      <Routes>
        <Route path="/dummy" element={<Dummy />} />
      </Routes>
    </DummyProvider>
  </Router>
);

export default App;
