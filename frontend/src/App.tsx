import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
