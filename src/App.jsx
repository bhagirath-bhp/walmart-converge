import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapView from './pages/MapView';
import ContainerManagement from './pages/ContainerManagement';
import { Sidebar } from './components/SideBar';
import './App.css';
// import AdminDashboard from './
// import Home from './pages/Home';pages/AdminDashboard';
import DriverManagement from './pages/DriverManagement';
import ProductManagement from './pages/ProductManagement';
import TruckManagement from './pages/TruckManagement';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            */}
          <Route path="/drivers" element={<DriverManagement />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/trucks" element={<TruckManagement />} />
          <Route path="/containers" element={<ContainerManagement />} />
          <Route path="/map" element={<MapView />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
