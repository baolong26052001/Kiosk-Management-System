import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';

import Accordion from 'react-bootstrap/Accordion';
//import Sidebar from '../components/sidebar/Sidebar';
import { render } from '@testing-library/react';

//import css
import './kiosk-hardware.css';

const KioskHardware = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const [searchTermButton, setSearchTermButton] = useState('');

    const handleSearchButton = () => {
        setSearchTerm(searchTermButton);
    };

    const renderSortIcon = (columnKey) => {
        if (sortConfig && sortConfig.key === columnKey) {
          return sortConfig.direction === 'ascending' ? <span class="arrow">&#9660;</span> : <span class="arrow">&#9650;</span>;
        }
        return sortConfig.direction === 'ascending' ? <span class="arrow">&#9660;</span> : <span class="arrow">&#9650;</span>;;
    };
      

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
            availbleMemory: '120 GB', 
            kioskID: 123, 
            LanIPAddress: '172.18.1.32', 
            OSName: 'Windows 10 Enterprise', 
            OSPlatform: 'Windows', 
            OSVersion: 'Microsoft Windows NT 6.2.9.9200.0'
        },
        
        { 
            availbleMemory: '120 GB', 
            kioskID: 101, 
            LanIPAddress: '172.18.1.35', 
            OSName: 'Windows 10 Enterprise', 
            OSPlatform: 'Windows', 
            OSVersion: 'Microsoft Windows NT 6.2.9.9200.0'
        },

        { 
            availbleMemory: '120 GB', 
            kioskID: 725, 
            LanIPAddress: '172.18.1.36', 
            OSName: 'Windows 10 Enterprise', 
            OSPlatform: 'Windows', 
            OSVersion: 'Microsoft Windows NT 6.2.9.9200.0'
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
        setSortConfig({key, direction});
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

        <div class="admin-dashboard-text-div pt-5"> 
            <h1 class="h1-dashboard">Kiosk Hardware</h1>
        </div>
            <div class="bigcarddashboard">
                <div class="statusandimage">
                    
                </div>
                
                <div class="searchdivuser">

                
                    <input onChange={(event) => setSearchTermButton(event.target.value)} placeholder="  Search..." type="text" id="kioskID myInput" name="kioskID" class="searchbar"></input>
                    
                    <input onClick={handleSearchButton} type="button" value="Search" class="button button-search"></input>
                </div>

                <div class="tablediv">

                
                <table id="myTable">
                    <thead>
                        <tr>
                        <th>
                            <input
                            type="checkbox"
                            name="selectAll"
                            checked={selectAllChecked}
                            onChange={(event) => handleCheckboxChange(event, null)}
                            />
                        </th>
                        <th></th>
                        <th onClick={() => handleSort('kioskID')}>Kiosk ID {renderSortIcon('kioskID')}</th>
                        <th onClick={() => handleSort('availbleMemory')}>Availble Memory {renderSortIcon('availbleMemory')}</th>
                        <th onClick={() => handleSort('LanIPAddress')}>LanIPAddress {renderSortIcon('LanIPAddress')}</th>
                        <th onClick={() => handleSort('OSName')}>OS Name {renderSortIcon('OSName')}</th>
                        <th onClick={() => handleSort('OSPlatform')}>OS Platform {renderSortIcon('OSPlatform')}</th>
                        <th onClick={() => handleSort('OSVersion')}>OS Version {renderSortIcon('OSVersion')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td>
                                <input
                                type="checkbox"
                                checked={selectAllChecked || selectedRows.includes(item.kioskID)}
                                onChange={(event) => handleCheckboxChange(event, item)}
                                />
                            </td>
                            <td>
                            <button class="view-button">View</button>
                            </td>
                            <td>{item.kioskID}</td>
                            <td>{item.availbleMemory}</td>
                            <td>{item.LanIPAddress}</td>
                            <td>{item.OSName}</td>
                            <td>{item.OSPlatform}</td>
                            <td>{item.OSVersion}</td>
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
                <div class="add-and-delete-button">
                  <button class="add-button button">Add</button>
                  <button class="delete-button button">Delete</button>
                </div>
                
                
            
            </div>

        
    </div>
    
  )
}

export default KioskHardware;