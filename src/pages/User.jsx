import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';

import Accordion from 'react-bootstrap/Accordion';
//import Sidebar from '../components/sidebar/Sidebar';
import { render } from '@testing-library/react';
import './User.css';

const User = () => {
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
          setSelectedRows((prevSelectedRows) => [...prevSelectedRows, item.userID]);
        } else {
          // Remove the selected item from the list
          setSelectedRows((prevSelectedRows) =>
            prevSelectedRows.filter(
              (selectedItem) => selectedItem !== item.userID
            )
          );
        }
      }
  };

    const data = [

        { 
            userName: 'Richard Nixon', 
            userID: 123, 
            email: 'nguyenvana@gmail.com', 
            heartbeatUpdate: '24-01-2023', 
            userGroup: 'Administrator', 
            active: 'Yes', 
            lastLogin: '24-01-2023',
            totalDaysDormant: 75
        },

        { 
            userName: 'Richard Nixon', 
            userID: 124, 
            email: 'nguyenvana@gmail.com', 
            heartbeatUpdate: '24-01-2023', 
            userGroup: 'Administrator', 
            active: 'Yes', 
            lastLogin: '24-01-2023',
            totalDaysDormant: 75
        },

        { 
            userName: 'Richard Nixon', 
            userID: 125, 
            email: 'nguyenvana@gmail.com', 
            heartbeatUpdate: '24-01-2023', 
            userGroup: 'Administrator', 
            active: 'Yes', 
            lastLogin: '24-01-2023',
            totalDaysDormant: 75
        },
        
        { 
            userName: 'Richard Nixon', 
            userID: 126, 
            email: 'nguyenvana@gmail.com', 
            heartbeatUpdate: '24-01-2023', 
            userGroup: 'Administrator', 
            active: 'Yes', 
            lastLogin: '24-01-2023',
            totalDaysDormant: 75
        },

        { 
            userName: 'Richard Nixon', 
            userID: 127, 
            email: 'nguyenvana@gmail.com', 
            heartbeatUpdate: '24-01-2023', 
            userGroup: 'Administrator', 
            active: 'Yes', 
            lastLogin: '24-01-2023',
            totalDaysDormant: 75
        },

        { 
            userName: 'Richard Nixon', 
            userID: 128, 
            email: 'nguyenvana@gmail.com', 
            heartbeatUpdate: '24-01-2023', 
            userGroup: 'Administrator', 
            active: 'Yes', 
            lastLogin: '24-01-2023',
            totalDaysDormant: 75
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
            <p></p>
            <h1 class="h1-dashboard">Users</h1>
        </div>
        
        
        
            <div class="bigcarddashboard">
                <div class="statusandimage">
                    
                </div>
                
                <div class="searchdivuser">

                
                    <input onChange={(event) => setSearchTermButton(event.target.value)} placeholder="  Search User ID..." type="text" id="userID myInput" name="userID" class="searchbar"></input>
                    
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
                        <th onClick={() => handleSort('userID')}>User ID {renderSortIcon('userID')}</th>
                        <th onClick={() => handleSort('userName')}>User Name {renderSortIcon('userName')}</th>
                        <th onClick={() => handleSort('email')}>Email {renderSortIcon('email')}</th>
                        <th onClick={() => handleSort('userGroup')}>User Group {renderSortIcon('userGroup')}</th>
                        <th onClick={() => handleSort('active')}>Active {renderSortIcon('active')}</th>
                        <th onClick={() => handleSort('lastLogin')}>Last Login {renderSortIcon('lastLogin')}</th>
                        <th onClick={() => handleSort('totalDaysDormant')}>Total days dormant {renderSortIcon('totalDaysDormant')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td>
                                <input
                                type="checkbox"
                                checked={selectAllChecked || selectedRows.includes(item.userID)}
                                onChange={(event) => handleCheckboxChange(event, item)}
                                />
                            </td>
                            <td>{item.userID}</td>
                            <td>{item.userName}</td>
                            <td>{item.email}</td>
                            <td>{item.userGroup}</td>
                            <td>{item.active}</td>
                            <td>{item.lastLogin}</td>
                            <td>{item.totalDaysDormant}</td>
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

export default User;