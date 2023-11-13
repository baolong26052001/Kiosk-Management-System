import React, { useState } from "react";
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

//import "./User.css";

const User = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      usergroup: "Administrator",
      active: "yes",
      lastlogin: "30-04-2023 14:00:00",
      totaldaysdormant: "75",
    },
    {
      id: 2,
      name: "John Doe",
      email: "johndoe@example.com",
      usergroup: "Administrator",

      active: "yes",
      lastlogin: "30-04-2023 14:00:00",
      totaldaysdormant: "75",
    },
    {
      id: 3,
      name: "John Doe",
      email: "johndoe@example.com",
      usergroup: "Administrator",
      active: "yes",
      lastlogin: "30-04-2023 14:00:00",
      totaldaysdormant: "75",
    },
    {
      id: 4,
      name: "John Doe",
      email: "johndoe@example.com",
      usergroup: "Administrator",

      active: "yes",
      lastlogin: "30-04-2023 14:00:00",
      totaldaysdormant: "75",
    },
    {
      id: 5,
      name: "John Doe",
      email: "johndoe@example.com",
      usergroup: "Administrator",

      active: "yes",
      lastlogin: "30-04-2023 14:00:00",
      totaldaysdormant: "75",
    },
    {
      id: 6,
      name: "John Doe",
      email: "johndoe@example.com",
      usergroup: "Administrator",
      active: "yes",
      lastlogin: "30-04-2023 14:00:00",
      totaldaysdormant: "75",
    },
    {
      id: 7,
      name: "John Doe",
      email: "johndoe@example.com",
      usergroup: "Administrator",
      active: "yes",
      lastlogin: "30-04-2023 14:00:00",
      totaldaysdormant: "75",
    },
  ]);

  const columns = [
    { name: "ID", selector: (row) => row.id },
    { name: "Name", selector: (row) => row.name },
    { name: "Email", selector: (row) => row.email },
    { name: "UserGroup", selector: (row) => row.usergroup },
    { name: "Active", selector: (row) => row.active },
    { name: "Last Login", selector: (row) => row.lastlogin },
    { name: "Total days dormant", selector: (row) => row.totaldaysdormant },
  ];

  return (
    <div class="content">
      <h1>User</h1>

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
          <button className="button add-button">+ Add</button>
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
export default User;