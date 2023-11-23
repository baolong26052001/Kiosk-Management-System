import React, { useState, useEffect } from 'react';

//import Sidebar from '../components/sidebar/Sidebar';
import { render } from '@testing-library/react';


//import css
import './slideshow.css';
import EnhancedTable from './sildeshowTable';

// import components from MUI
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';


const Slideshow = () => {
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
            <h1 className="h1-dashboard">User Group</h1>
        </div>
            <div className="bigcarddashboard">
                <div className="searchdivuser">
                    <input onChange={(event) => setSearchTermButton(event.target.value)} placeholder="  Search..." type="text" id="kioskID myInput" name="kioskID" class="searchbar"></input>
                    <input onClick={handleSearchButton} type="button" value="Search" className="button button-search"></input>
                </div>

                <div className='Table'>
                    <EnhancedTable />
                </div>
            </div>

        
    </div>
    
  )
}

export default Slideshow;