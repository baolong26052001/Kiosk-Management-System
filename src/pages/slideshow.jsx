import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import { render } from "@testing-library/react";

import "./slideshow.css";

const Slideshow = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ads Promotion",
      imagevideo: "image1.jpg",
      filetype: "IMAGE",
      startdate: "19-10-2023 14:00:00",
      enddate: "19-10-2023 14:00:00",
    },
    
  ]);

  const columns = [
    { name: "ID", selector: (row) => row.id },
    { name: "Name", selector: (row) => row.name },
    { name: "Image/Video", selector: (row) => row.imagevideo },
    { name: "File Type", selector: (row) => row.filetype },
    { name: "Start date", selector: (row) => row.startdate },
    { name: "End date", selector: (row) => row.enddate },
    
  ];

  const history = useNavigate();

  
  const handleAdd = () => {
    history('/slideshowadd');
  };

  return (
    <div>
      <h1>Video slideshow setup</h1>

      <div class="bigcard">
        {/* <div className="Searchbar"> */}
        <input
          placeholder="  Search..."
          type="text"
          id="kioskid"
          name="kioskid"
          class="search"
        ></input>
        <button type="submit" className="Search-button">
          Search
        </button>

        <DataTable columns={columns} data={data} />

        <div className="button-group">
          <button className="button add-button" onClick={handleAdd}>+ Add</button>
          <button className="button delete-button">Delete</button>
        </div>

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
  );
};

export default Slideshow;