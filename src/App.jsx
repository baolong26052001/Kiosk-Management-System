import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Sidebar from './components/sidebar/Sidebar';
import Headerbar from './components/header/Header';
import Dashboard from './pages/dashboard';
import { render } from '@testing-library/react';

const App = () => {
  return (
    <div> 
      <Headerbar />
     <Sidebar />
     <Dashboard />
    </div>
  )
}
export default App;