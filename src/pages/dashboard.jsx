import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';

import Accordion from 'react-bootstrap/Accordion';
//import Sidebar from '../components/sidebar/Sidebar';
import { render } from '@testing-library/react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div> 
     <p>Admin/Dashboard</p>
     <h1>Dashboard</h1>
     
        <div class="allcard">
            <div class="card1">
                <div class="container">
                    
                </div>
            </div>
            <div class="card2">
                <div class="container">
                    
                </div>
            </div>
            <div class="card3">
                <div class="container">
                    
                </div>
            </div>
            <div class="card4">
                <div class="container">
                    
                </div>
            </div>
        </div>
        

    </div>
    
  )
}
export default Dashboard;