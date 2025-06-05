import { Routes, Route } from 'react-router-dom';
import Homepage from './routes/homepage/homepage';
import LuckPage from './routes/luckpage/luckpage';
import SportPage from './routes/sportpage/sportpage';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/luckpage" element={<LuckPage />} />
      <Route path="/sportpage" element={<SportPage />} />
    </Routes>
  );
}
