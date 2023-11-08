// import './slidebar.css';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './sidebar.css';

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
  getItem('Admin', 'sub1', <MailOutlined />, [
    getItem('Users', '1'),
    getItem('Users Group', '2'),
    getItem('Kiosk Setup', '3'),
    getItem('Kiosk Hardware', '4'),
    getItem('Station', '5'),
    getItem('Video slideshow setup', '6'),
  ]),
  getItem('Transaction', 'sub2', <AppstoreOutlined />, [
    getItem('Account', '7'),
    getItem('Loan Transaction', '8'),
    getItem('Saving Transaction', '9'),
    getItem('Loan Statement', '10'),
    getItem('Saving Statement', '11'),
  ]),
  getItem('Logs', 'sub3', <SettingOutlined />, [
    getItem('Transaction Logs', '12'),
    getItem('Activity Logs', '13'),
    getItem('Notification Logs', '14'),
    getItem('Audit', '15'),
  ]),
  getItem('Report', 'sub4', <SettingOutlined />, [
    getItem('Kiosk Health', '16'),
    
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
        height: 900,
      }}
      items={items}
    />
  );
};

export default Sidebar
