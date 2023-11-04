import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Dashboard', '99', <AppstoreOutlined />),
  getItem('Admin', 'sub1', <MailOutlined />, [
    getItem('Users', '1'),
    getItem('User Group', '2'),
    getItem('Kiosk Setup', '3'),
    getItem('Kiosk Hardware', '4'),
    //getItem('Access Rule', '5'),
    getItem('Station', '6'),
    getItem('Video Slideshow Setup', '7'),
  ]),
  getItem('Transaction', 'sub2', <AppstoreOutlined />, [
    getItem('Account', '8'),
    getItem('Loan Transaction', '9'),
    getItem('Saving Transaction', '10'),
    getItem('Loan Statement', '11'),
    getItem('Saving Statement', '12'),
  ]),
  getItem('Logs', 'sub3', <SettingOutlined />, [
    getItem('Transaction Logs', '13'),
    getItem('Activity Logs', '14'),
    getItem('Notification Logs', '15'),
    getItem('Audit', '16'),
  ]),
  getItem('Report', 'sub4', <SettingOutlined />, [
    getItem('Kiosk Health', '17'),
  ]),
];

const data = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 99,
    email: 'jane.smith@example.com',
  },
  
];

const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
];

const Navbar = () => (
  <div className="navbar">
    {/* Add your navbar content here */}
    <h1>Navbar</h1>
  </div>
);

const App = () => {
  const [current, setCurrent] = useState('1');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Menu
        theme="dark"
        onClick={onClick}
        style={{
          width: 256,
          height: 1000,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />

      <div style={{ flex: 1, padding: '16px' }}>
        <DataTable
          title="User Data"
          columns={columns}
          data={data}
          pagination
        />
      </div>
    </div>
  );
};

export default App;