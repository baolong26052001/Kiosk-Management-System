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
          <Route path="/usersgroup" element={<EmptyPage />} />
          <Route path="/kiosksetup" element={<EmptyPage />} />
          <Route path="/kioskhardware" element={<EmptyPage />} />
          <Route path="/station" element={<EmptyPage />} />
          <Route path="/slideshow" element={<EmptyPage />} />
          <Route path="/account" element={<EmptyPage />} />
          <Route path="/loantransaction" element={<EmptyPage />} />
          <Route path="/savingtransaction" element={<EmptyPage />} />
          <Route path="/loanstatement" element={<EmptyPage />} />
          <Route path="/savingstatement" element={<EmptyPage />} />
          <Route path="/transactionlogs" element={<EmptyPage />} />
          <Route path="/activitylogs" element={<EmptyPage />} />
          <Route path="/notificationlogs" element={<EmptyPage />} />
          <Route path="/audit" element={<EmptyPage />} />
          <Route path="/kioskhealth" element={<EmptyPage />} />
          
        </Routes>
      </div>
    </Router>
     
    </div>
  )
}
export default App;