import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';
import Accordion from 'react-bootstrap/Accordion';
//import Sidebar from '../components/sidebar/Sidebar';
import { render } from '@testing-library/react';
import { Col, Divider, Row, Button, Form, Input } from 'antd';

//import material UI
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
//import material UI


//import css
import './Usergroup.css';
//import css


// name of selection
const names = [
  'Administrator',
  'Support',
  'Manager',
];
// name of selection

const activeNames = [
  'Yes',
  'No',
];


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Usergroup = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [searchTermButton, setSearchTermButton] = useState('');
    const [personName, setPersonName] = React.useState([]);
    const [activeName, setActiveName] = React.useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      
    };

    const handleActiveChange = (event) => {
      const {
        target: { value },
      } = event;
      setActiveName(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

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
          setSelectedRows((prevSelectedRows) => [...prevSelectedRows, item.userGroupID]);
        } else {
          // Remove the selected item from the list
          setSelectedRows((prevSelectedRows) =>
            prevSelectedRows.filter(
              (selectedItem) => selectedItem !== item.userGroupID
            )
          );
        }
      }
  };

    const data = [

        { 
            groupName: 'Administrator', 
            userGroupID: 123, 
            
             
            active: 'Yes', 
            dateModified: '24-10-2023', 
            dateCreated: '24-01-2023',
            
        },

        { 
            groupName: 'Administrator', 
            userGroupID: 124, 
            
             
            active: 'Yes', 
            dateModified: '24-10-2023', 
            dateCreated: '24-01-2023',
            
        },

        { 
            groupName: 'Administrator', 
            userGroupID: 125, 
            
             
            active: 'Yes', 
            dateModified: '24-10-2023', 
            dateCreated: '24-01-2023',
            
        },
        
        { 
            groupName: 'Administrator', 
            userGroupID: 126, 
            
             
            active: 'Yes', 
            dateModified: '24-10-2023', 
            dateCreated: '24-01-2023',
            
        },

        { 
            groupName: 'Administrator', 
            userGroupID: 127, 
            
             
            active: 'Yes', 
            dateModified: '24-10-2023', 
            dateCreated: '24-01-2023',
            
        },

        { 
            groupName: 'Administrator', 
            userGroupID: 128, 
            
             
            active: 'Yes', 
            dateModified: '24-10-2023', 
            dateCreated: '24-01-2023',
            
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

        <div class="admin-dashboard-text-div"> 
            <p></p>
            <h1 class="h1-dashboard">User Group</h1>
        </div>
   
        
            <div class="bigcarddashboard">
                <div class="filterpart">
                  
                    
                  
                    
                   
                    
                </div>
                     <Row gutter={16}>
                        <Col className="gutter-row" span={12}>
                          <div>
                            
                            <FormControl sx={{ m: 1, width: 300 }}>
                              <InputLabel id="group-name-label">Group Name</InputLabel>
                              <Select
                                labelId="group-name-label"
                                id="group-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                              >
                                {names.map((name) => (
                                  <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </Col>

                        <Col className="gutter-row" span={12}>
                          <div>
                            
                            <FormControl sx={{ m: 1, width: 300 }}>
                              <InputLabel id="name-label">Active</InputLabel>
                              <Select
                                labelId="name-label"
                                id="name"
                                
                                value={activeName}
                                onChange={handleActiveChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                              >
                                {activeNames.map((name) => (
                                  <MenuItem key={name} value={name}>
                                    <Checkbox checked={activeName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </Col>
                        
                      </Row>

                    

                <div class="searchdiv">

                
                    <input onChange={(event) => setSearchTermButton(event.target.value)} placeholder="  Search package ID..." type="text" id="userGroupID myInput" name="userGroupID" class="searchbar"></input>
                    
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
                        <th></th>
                        <th onClick={() => handleSort('userGroupID')}>UserGroup ID {renderSortIcon('userGroupID')}</th>
                        <th onClick={() => handleSort('groupName')}>Group Name {renderSortIcon('groupName')}</th>
                        
                        <th onClick={() => handleSort('active')}>Active {renderSortIcon('active')}</th>
                        <th onClick={() => handleSort('dateModified')}>Date Modified {renderSortIcon('dateModified')}</th>
                        <th onClick={() => handleSort('dateCreated')}>Date Created {renderSortIcon('dateCreated')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td>
                                <input
                                type="checkbox"
                                checked={selectAllChecked || selectedRows.includes(item.userGroupID)}
                                onChange={(event) => handleCheckboxChange(event, item)}
                                />
                            </td>
                            <td>
                            <button class="edit-button">Edit</button>
                            </td>
                            <td>
                            <button class="permission-button">Permission</button>
                            </td>
                            <td>{item.userGroupID}</td>
                            <td>{item.groupName}</td>
                            
                            <td>{item.active}</td>
                            <td>{item.dateModified}</td>
                            <td>{item.dateCreated}</td>
                            
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

export default Usergroup;