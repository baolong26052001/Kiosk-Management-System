import React, { useState, useEffect } from 'react';
import {EyeOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

//import Sidebar from '../components/sidebar/Sidebar';
import { render } from '@testing-library/react';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

//import css
import './User.css';

const columns = [
  { field: 'id', headerName: 'User ID', flex: 1 },
  { field: 'userName', headerName: 'User Name', flex: 2 },
  { field: 'email', headerName: 'Email', flex: 2 },
  {
    field: 'userGroup',
    headerName: 'User Group',
    sortable: false,
  //   type: 'number',
      flex: 2,
  },
  {
    field: 'active',
    headerName: 'Active',
    sortable: false,
    flex: 1,
  },
  {
      field: 'lastLogin',
      headerName: 'Last Login',
      sortable: false,
      flex: 2,
  },
  {
      field: 'daysDormant',
      headerName: 'Total Days Dormant',
      sortable: false,
      flex: 2,
   },
];

const rows = [
  { id: 1, userName: 'Richard Nixon', email: 'richnix@gmail.com', userGroup: 'Administration', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 2, userName: 'Riadxon', email: 'ricx@gmail.com', userGroup: 'Support', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 3, userName: 'Nixn', email: 'nix@gmail.com', userGroup: 'Monitor', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 4, userName: 'Tayos', email: 'tayos@gmail.com', userGroup: 'Support', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 5, userName: 'Chad', email: 'Chadman@gmail.com', userGroup: 'Manager', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 6, userName: 'Stein', email: 'stein@gmail.com', userGroup: 'Support', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 7, userName: 'Lloyd', email: 'lloyd@gmail.com', userGroup: 'Administration', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 8, userName: 'Tessta', email: 'tessta@gmail.com', userGroup: 'Administration', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 9, userName: 'Carena', email: 'carena@gmail.com', userGroup: 'Administration', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },
  { id: 10, userName: 'Wals', email: 'wals@gmail.com', userGroup: 'Administration', active: 'Yes', lastLogin: '24-12-2023 14:32:43', daysDormant: '10' },


];

const KioskHardware = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const [searchTermButton, setSearchTermButton] = useState('');

    const handleSearchButton = () => {
        setSearchTerm(searchTermButton);
    };





  return (
    
    <div className="content"> 

        <div className="admin-dashboard-text-div pt-5"> 
            <h1 className="h1-dashboard">User</h1>
        </div>
            <div className="bigcarddashboard">
                <div className="statusandimage">
                    
                </div>
                
                <div className="searchdivuser">

                
                    <input onChange={(event) => setSearchTermButton(event.target.value)} placeholder="  Search..." type="text" id="kioskID myInput" name="kioskID" class="searchbar"></input>
                    
                    <input onClick={handleSearchButton} type="button" value="Search" className="button button-search"></input>
                </div>

                
                <div className='Table' style={{ height: 400, width: '100%'}}>
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
            </div>

        
    </div>
    
  )
}

export default KioskHardware;