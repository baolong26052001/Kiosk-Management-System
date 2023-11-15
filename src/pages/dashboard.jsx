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
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const handleCheckboxChange = (event, item) => {
        const { checked } = event.target;
    
        if (event.target.name === 'selectAll') {
          // Handle "Select All" checkbox
          setSelectAllChecked(checked);
          setSelectedRows(checked ? data : []);
        } else {
          // Handle individual checkboxes
          if (checked) {
            // Add the selected item to the list
            setSelectedRows((prevSelectedRows) => [...prevSelectedRows, item.kioskID]);
          } else {
            // Remove the selected item from the list
            setSelectedRows((prevSelectedRows) =>
              prevSelectedRows.filter(
                (selectedItem) => selectedItem !== item.kioskID
              )
            );
          }
        }
    };

    const data = [

        { 
            kioskName: 'Kiosk 123', 
            kioskID: 123, 
            stationCode: 258, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023'
        },

        { 
            kioskName: 'Kiosk 124', 
            kioskID: 124, 
            stationCode: 258, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },

        { 
            kioskName: 'Kiosk 125', 
            kioskID: 125, 
            stationCode: 258, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },
        
        { 
            kioskName: 'Kiosk 126', 
            kioskID: 126, 
            stationCode: 3213, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },

        { 
            kioskName: 'Kiosk 127', 
            kioskID: 127, 
            stationCode: 3213, 
            heartbeatUpdate: '24-01-2023', 
            cameraUpdate: '24-01-2023', 
            scannerUpdate: '24-01-2023', 
            cashDepositUpdate: '24-01-2023' 
        },

        { 
            kioskName: 'Kiosk 128', 
            kioskID: 128, 
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
      
      const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
      };
    
      const sortData = (data) => {
        if (sortConfig.key) {
          const sortedData = [...data];
          sortedData.sort((a, b) => {
            const keyA = a[sortConfig.key];
            const keyB = b[sortConfig.key];
            if (keyA < keyB) return sortConfig.direction === 'ascending' ? -1 : 1;
            if (keyA > keyB) return sortConfig.direction === 'ascending' ? 1 : -1;
            return 0;
          });
          return sortedData;
        }
        return data;
      };

      const filteredData = sortData(
        data.filter((item) =>
          Object.values(item).some(
            (value) =>
              value &&
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );

  return (
    
    <div class="content"> 

        <div class="admin-dashboard-text-div"> 
            <p>Admin/Dashboard</p>
            <h1 class="h1-dashboard">Dashboard</h1>
        </div>
        <div class="allcard">
            <div class="card1">
                <div class="area">
                    <p class="kiosktext">Total kiosk</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytic</p>
                </div>
                <div class="area2">
                    <img class="iconinwhitebox" width="50px" height="50px" src={require('../images/totalkiosk.png')}></img>
                </div>
            </div>
            <div class="card2">
                <div class="area">
                    <p class="kiosktext">Total kiosk online</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytic</p>
                </div>
                <div class="area2">
                    <img class="iconinwhitebox" width="50px" height="50px" src={require('../images/kioskonline.png')}></img>
                </div>
            </div>
            <div class="card3">
                <div class="area">
                    <p class="kiosktext">Total kiosk offline</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytic</p>
                </div>
                <div class="area2">
                    <img class="iconinwhitebox" width="50px" height="50px" src={require('../images/kioskoffline.png')}></img>
                </div>
            </div>
            <div class="card4">
                <div class="area">
                    <p class="kiosktext">Total transaction</p>
                    <h2 class="kiosktext numberkiosk">100</h2>
                    <p class="kiosktext">Last week analytic</p>
                </div>
                <div class="area2">
                    <img class="iconinwhitebox" width="50px" height="50px" src={require('../images/transaction.png')}></img>
                </div>
            </div>
        </div>
        
        
            <div class="bigcarddashboard">
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
                
                <div class="searchdiv">

                
                    <input onChange={handleSearch} placeholder="  Search kiosk ID..." type="text" id="kioskid myInput" name="kioskid" class="searchbar"></input>
                    
                    <input type="button" value="Search" class="button button-search"></input>
                </div>

                <div class="tablediv">

                
                <table id="myTable">
                    <thead>
                        <tr>
                        
                        <th onClick={() => handleSort('kioskName')}>Kiosk Name</th>
                        <th onClick={() => handleSort('kioskID')}>Kiosk ID</th>
                        <th onClick={() => handleSort('stationCode')}>Station Code</th>
                        <th onClick={() => handleSort('heartbeatUpdate')}>Kiosk Heartbeat Last Update</th>
                        <th onClick={() => handleSort('cameraUpdate')}>Camera Last Update</th>
                        <th onClick={() => handleSort('scannerUpdate')}>Scanner Last Update</th>
                        <th onClick={() => handleSort('cashDepositUpdate')}>Cash Deposit Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                        <tr key={index}>
                            
                            <td>{item.kioskName}</td>
                            <td>{item.kioskID}</td>
                            <td>{item.stationCode}</td>
                            <td>
                                <img class="icononlinetable" width="10px" height="10px" src={require('../images/online.png')}></img>
                                {item.heartbeatUpdate}
                            </td>
                            <td>
                                <img class="icononlinetable" width="10px" height="10px" src={require('../images/online.png')}></img>
                                {item.cameraUpdate}
                            </td>
                            <td>
                                <img class="icononlinetable" width="10px" height="10px" src={require('../images/online.png')}></img>
                                {item.scannerUpdate}
                            </td>
                            <td>
                                <img class="icononlinetable" width="10px" height="10px" src={require('../images/online.png')}></img>
                                {item.cashDepositUpdate}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                
                </div>
                

                <div class="pageselectdashboard">
                    <p class="rowperpagedash">Rows per page</p>
                    <select class="listoptiondash">
                        
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