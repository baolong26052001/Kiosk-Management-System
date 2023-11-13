import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './header.css';

const { Header } = Layout;
const Headerbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header
        style={{
          width: '100%',
          position: 'fixed',
          display: 'flex',
          
          alignItems: 'center',
          background: 'white',
        }}
      >
        <div className="demo-logo">
            <img src={require(`../../images/logoheader.png`)} />
        </div>

        <div className="textinheader">
            <h4 className="textloan">Loan Kiosk Management System</h4>
        </div>
    
        <Menu
          theme="white"
          mode="horizontal"
          style={{
            backgroundColor: 'transparent',  
          }}
          selectedKeys={[]}
          onClick={() => null}  
        >
          {[1, 2].map((key) => (
            <Menu.Item
              key={key}
              style={{
                color: 'inherit',  
                background: 'transparent',  
              }}
            >
              <img
                className="iconheader"
                width="20px"
                height="20px"
                src={require(`../../images/${key === 1 ? 'bell.png' : 'Avatar.png'}`)}
                alt={`Icon ${key}`}
              />
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Headerbar;