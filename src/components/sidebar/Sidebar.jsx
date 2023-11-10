// import './slidebar.css';
import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined, ProfileOutlined, WifiOutlined, CreditCardOutlined, CopyOutlined, BellOutlined, AlignLeftOutlined, UnorderedListOutlined, AccountBookOutlined, MoneyCollectOutlined, FileTextOutlined, LockOutlined, MailOutlined, SettingOutlined, UserOutlined, UsergroupAddOutlined, AppstoreAddOutlined, LaptopOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './sidebar.css';
import { Outlet, Link } from "react-router-dom";

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
  getItem('Dashboard', '17', <HomeOutlined />),
  getItem('Admin', 'sub1', <SettingOutlined />, [
    getItem('Users', '1', <UserOutlined />),
    getItem('Users Group', '2', <UsergroupAddOutlined />),
    getItem('Kiosk Setup', '3', <AppstoreAddOutlined />),
    getItem('Kiosk Hardware', '4', <AppstoreAddOutlined />),
    getItem('Station', '5', <LaptopOutlined />),
    getItem('Video slideshow setup', '6', <MenuUnfoldOutlined />),
  ]),
  getItem('Transaction', 'sub2', <AppstoreOutlined />, [
    getItem('Account', '7', <LockOutlined />),
    getItem('Loan Transaction', '8', <FileTextOutlined />),
    getItem('Saving Transaction', '9', <MoneyCollectOutlined />),
    getItem('Loan Statement', '10', <AccountBookOutlined />),
    getItem('Saving Statement', '11', <AccountBookOutlined />),
  ]),
  getItem('Logs', 'sub3', <ProfileOutlined />, [
    getItem('Transaction Logs', '12', <UnorderedListOutlined />),
    getItem('Activity Logs', '13', <CopyOutlined />),
    getItem('Notification Logs', '14', <BellOutlined />),
    getItem('Audit', '15', <CreditCardOutlined />),
  ]),
  getItem('Report', 'sub4', <FileTextOutlined />, [
    getItem('Kiosk Health', '16', <WifiOutlined />),
    
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState(['17']);
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
        
        top: "0px",
        position: "fixed",
        height: "100%",
        overflow: "hidden"
      }}
      defaultSelectedKeys={['17']}
      items={items}
    />
  );
};

export default Sidebar
