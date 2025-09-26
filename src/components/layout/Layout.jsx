// src/components/Layout.jsx

import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <>
     <Header/>
      
      <main>
        
        <Outlet />
      </main>
      
      <footer style={{ 
          padding: '10px', 
          textAlign: 'center', 
          borderTop: '1px solid #ccc' 
      }}>
          Hak Cipta © 2024
      </footer>
    </>
  );
}