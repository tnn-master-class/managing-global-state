import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DummyProvider } from './contexts/DummyContext';
import { Dummy } from 'pages/Dummy';

const App = () => (
  <Router>
    <Routes>
      <DummyProvider>
        <Route path="/dummy" element={<Dummy/>} />
      </DummyProvider>
    </Routes>
  </Router>
);

export default App;
