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
                    <p class="kiosktext">Total kiosk</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytics</p>
                </div>
            </div>
            <div class="card2">
                <div class="container">
                    <p class="kiosktext">Total kiosk online</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytics</p>
                </div>
            </div>
            <div class="card3">
                <div class="container">
                    <p class="kiosktext">Total kiosk offline</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytics</p>
                </div>
            </div>
            <div class="card4">
                <div class="container">
                    <p class="kiosktext">Total transaction</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytics</p>
                </div>
            </div>
        </div>
        
        <div class="bigcard">
            <h3 class="kioskstatus">Kiosk Status</h3>
            <input placeholder="  Search..." type="text" id="kioskid" name="kioskid" class="searchbar"></input>
            <input type="button" value="Search" class="button"></input>

            <table>
                <tr>
                    <th>Kiosk Name</th>
                    <th>Kiosk ID</th>
                    <th>Station Code</th>
                    <th>Kiosk Heartbeat Last Update</th>
                    <th>Camera Last Update</th>
                    <th>Scanner Last Update</th>
                    <th>Cash Deposit Last Update</th>
                </tr>
                <tr>
                    <td>Kiosk 132</td>
                    <td>132</td>
                    <td>258</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                </tr>
                <tr>
                    <td>Kiosk 132</td>
                    <td>132</td>
                    <td>258</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                </tr>
                <tr>
                    <td>Kiosk 132</td>
                    <td>132</td>
                    <td>258</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                    <td>24-01-2023</td>
                </tr>
            </table>

        </div>

    </div>
    
  )
}
export default Dashboard;