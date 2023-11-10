import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Sidebar from './components/sidebar/Sidebar';
import Headerbar from './components/header/Header';
import Dashboard from './pages/dashboard';
import EmptyPage from './pages/empty';
import { render } from '@testing-library/react';
//import { Outlet, Link, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div> 
     <Headerbar />
     <Sidebar />
     <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<EmptyPage />} />
          <Route path="/account" element={<EmptyPage />} />
          {/* Add other routes for different sidebar items */}
        </Routes>
      </div>
    </Router>
     
    </div>
  )
}
export default App;