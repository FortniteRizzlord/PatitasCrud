import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
