import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Layout from './components/layout/Layout';

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  )
}