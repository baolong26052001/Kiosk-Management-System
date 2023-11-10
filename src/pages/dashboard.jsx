import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';

import Accordion from 'react-bootstrap/Accordion';
//import Sidebar from '../components/sidebar/Sidebar';
import { render } from '@testing-library/react';
import './dashboard.css';


const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [

        { 
            kioskName: 'Kiosk 132', 
            kioskID: 123, 
            stationCode: 258, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },

        { 
            kioskName: 'Kiosk 132', 
            kioskID: 234, 
            stationCode: 258, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },

        { 
            kioskName: 'Kiosk 132', 
            kioskID: 234, 
            stationCode: 258, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },
        
        { 
            kioskName: 'Kiosk 133', 
            kioskID: 456, 
            stationCode: 3213, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },

        { 
            kioskName: 'Kiosk 133', 
            kioskID: 456, 
            stationCode: 3213, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },

        { 
            kioskName: 'Kiosk 133', 
            kioskID: 456, 
            stationCode: 3213, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },

        
      ];
      
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredData = data.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

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
                <div class="container2">
                    <img class="iconinwhitebox" width="50px" height="50px" src={require('../images/totalkiosk.png')}></img>
                </div>
            </div>
            <div class="card2">
                <div class="container">
                    <p class="kiosktext">Total kiosk online</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytics</p>
                </div>
                <div class="container2">
                    <img class="iconinwhitebox" width="50px" height="50px" src={require('../images/kioskonline.png')}></img>
                </div>
            </div>
            <div class="card3">
                <div class="container">
                    <p class="kiosktext">Total kiosk offline</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytics</p>
                </div>
                <div class="container2">
                    <img class="iconinwhitebox" width="50px" height="50px" src={require('../images/kioskoffline.png')}></img>
                </div>
            </div>
            <div class="card4">
                <div class="container">
                    <p class="kiosktext">Total transaction</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytics</p>
                </div>
                <div class="container2">
                    <img class="iconinwhitebox" width="50px" height="50px" src={require('../images/transaction.png')}></img>
                </div>
            </div>
        </div>
        
        <div class="bigcard">
            <div class="statusandimage">
                <h3 class="kioskstatus">Kiosk Status</h3>
                <img class="icononline" width="10px" height="10px" src={require('../images/online.png')}></img>
                <h5 class="onlinetext">Online</h5>
                <img class="iconoffline" width="10px" height="10px" src={require('../images/offline.png')}></img>
                <h5 class="offlinetext">Offline</h5>
                <img class="iconpaperlow" width="10px" height="10px" src={require('../images/paperlow.png')}></img>
                <h5 class="paperlowtext">Paper Low</h5>
                <img class="iconnopaper" width="10px" height="10px" src={require('../images/nopaper.png')}></img>
                <h5 class="nopapertext">No Paper</h5>
            </div>
            
            <input onChange={handleSearch} placeholder="  Search kiosk ID..." type="text" id="kioskid myInput" name="kioskid" class="searchbar"></input>
            
            <input type="button" value="Search" class="button"></input>

            <table id="myTable">
                <thead>
                    <tr>
                    <th>Kiosk Name</th>
                    <th>Kiosk ID</th>
                    <th>Station Code</th>
                    <th>Kiosk Heartbeat Last Update</th>
                    <th>Camera Last Update</th>
                    <th>Scanner Last Update</th>
                    <th>Cash Deposit Last Update</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.kioskName}</td>
                        <td>{item.kioskID}</td>
                        <td>{item.stationCode}</td>
                        <td>{item.heartbeatUpdate}</td>
                        <td>{item.cameraUpdate}</td>
                        <td>{item.scannerUpdate}</td>
                        <td>{item.cashDepositUpdate}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            
            

            <div class="pageselect">
                <p class="rowperpage">Rows per page</p>
                <select class="listoption">
                    
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            
        
        </div>

    </div>
    
  )
}
export default Dashboard;