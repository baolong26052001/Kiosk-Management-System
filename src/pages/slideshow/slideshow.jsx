import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';
import Accordion from 'react-bootstrap/Accordion';
//import Sidebar from '../components/sidebar/Sidebar';
import { render } from '@testing-library/react';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


import { Col, Divider, Row, Button, Form, Input } from 'antd';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid';


//import css
import './slideshow.css';


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


const User = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [searchTermButton, setSearchTermButton] = useState('');
    const [valueStartDate, setValueStartDate] = React.useState(dayjs('2023-04-30'));
    const [valueEndDate, setValueEndDate] = React.useState(dayjs('2023-04-30'));
    const [packageName, setPackageName] = React.useState([]);
    

    const names = [
      'Ads Promotion 1',
      'Ads Promotion 2',
      'Ads Promotion 3',
    ];

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPackageName(
        // On autofill we get a stringified value.
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
          setSelectedRows((prevSelectedRows) => [...prevSelectedRows, item.packageID]);
        } else {
          // Remove the selected item from the list
          setSelectedRows((prevSelectedRows) =>
            prevSelectedRows.filter(
              (selectedItem) => selectedItem !== item.packageID
            )
          );
        }
      }
  };
  
    const columns = [
        { field: 'id', headerName: 'Package ID', width: 130, flex: 1 },
        { field: 'packageName', headerName: 'Package Name', width: 130, flex: 1 },
        { field: 'imageVideo', headerName: 'Image/Video', width: 130, flex: 1 },
        { field: 'fileType', headerName: 'File Type', width: 130, flex: 1 },
        { field: 'startDate', headerName: 'Start Date', width: 130, flex: 1 },
        { field: 'endDate', headerName: 'End Date', width: 130, flex: 1 },
       
        
      ];

    const rows = [
        { id: 123, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
        { id: 234, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
        { id: 345, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
        { id: 456, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
        { id: 567, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
        { id: 678, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
        { id: 789, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
        { id: 888, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
        { id: 901, imageVideo: 'image1.jpg', packageName: 'Ads Promotion', fileType: 'IMAGE', startDate: '22-10-2023', endDate: '25-10-2023' },
      ];
      
    const data = [

        { 
            packageName: 'Ads Promotion', 
            packageID: 123, 
            imagevideo: 'image1.jpg', 
             
            fileType: 'IMAGE', 
            startDate: '24-10-2023', 
            endDate: '24-01-2023',
            
        },

        { 
            packageName: 'Ads Promotion', 
            packageID: 124, 
            imagevideo: 'image1.jpg', 
             
            fileType: 'IMAGE', 
            startDate: '24-10-2023', 
            endDate: '24-01-2023',
            
        },

        { 
            packageName: 'Ads Promotion', 
            packageID: 125, 
            imagevideo: 'image1.jpg', 
             
            fileType: 'IMAGE', 
            startDate: '24-10-2023', 
            endDate: '24-01-2023',
            
        },
        
        { 
            packageName: 'Ads Promotion', 
            packageID: 126, 
            imagevideo: 'image1.jpg', 
             
            fileType: 'IMAGE', 
            startDate: '24-10-2023', 
            endDate: '24-01-2023',
            
        },

        { 
            packageName: 'Ads Promotion', 
            packageID: 127, 
            imagevideo: 'image1.jpg', 
             
            fileType: 'IMAGE', 
            startDate: '24-10-2023', 
            endDate: '24-01-2023',
            
        },

        { 
            packageName: 'Ads Promotion', 
            packageID: 128, 
            imagevideo: 'image1.jpg', 
             
            fileType: 'IMAGE', 
            startDate: '24-10-2023', 
            endDate: '24-01-2023',
            
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
            
            <h1 class="h1-dashboard">Video Slideshow Setup</h1>
        </div>
        
            
        
            <div class="bigcard">
                
                


                <Row gutter={16}>
                        
                        <Col className="gutter-row" span={8}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                              label="Start Date"
                              value={valueStartDate}
                              onChange={(newValue) => setValueStartDate(newValue)}
                            />
                            
                          </DemoContainer>
                          
                        </LocalizationProvider>
                        </Col>
                        <Col className="gutter-row" span={8}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                              label="End Date"
                              value={valueEndDate}
                              onChange={(newValue) => setValueEndDate(newValue)}
                            />
                            
                          </DemoContainer>
                          
                        </LocalizationProvider>
                        </Col>
                        <Col className="gutter-row" span={8}>
                          <div>
                            
                            <FormControl sx={{ m: 1, width: 300 }}>
                              <InputLabel id="package-name-label">Package Name</InputLabel>
                              <Select
                                labelId="package-name-label"
                                id="package-name"
                                multiple
                                value={packageName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Package Name" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                              >
                                {names.map((name) => (
                                  <MenuItem key={name} value={name}>
                                    <Checkbox checked={packageName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </Col>
                </Row>
                
    

                <div class="statusandimage">
                    
                </div>
                
                <div class="searchdiv">

                
                    <input onChange={(event) => setSearchTermButton(event.target.value)} placeholder="  Search package ID..." type="text" id="packageID myInput" name="packageID" class="searchbar"></input>
                    
                    <input onClick={handleSearchButton} type="button" value="Search" class="button button-search"></input>
                </div>

                <div class="tablediv">
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />                
                
                
                
                </div>
                

                
                <div class="add-and-delete-button">
                  <button class="add-button button">Add</button>
                  <button class="delete-button button">Delete</button>
                </div>
                
                
            
            </div>

        
    </div>
    
  )
}

export default User;