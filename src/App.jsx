import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import DataTable from 'react-data-table-component';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Sidebar from './components/sidebar/Sidebar';
import Headerbar from './components/header/Header';
import EmptyPage from './pages/empty';
//import Dashboard from './pages/dashboard/dashboard';
//import User from './pages/user/User';
//import Slideshow from './pages/slideshow/slideshow';
import { render } from '@testing-library/react';
//import { Outlet, Link, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div> 
     <Headerbar />
     <Sidebar />
     <Router>
      
        <Sidebar />
        <Routes>

          <Route 
            path="/" 
            element={<RouteDashboard />} 
            />

          <Route 
            path="/users" 
            element={<RouteUser />} 
            />

          <Route 
            path="/usersgroup" 
            element={<RouteUsergroup />} 
            />


          <Route path="/kiosksetup" element={<EmptyPage />} />
          <Route path="/kioskhardware" element={<EmptyPage />} />
          <Route path="/station" element={<EmptyPage />} />

          <Route
              path="/slideshow"
              element={<RouteSlideshow />}
            />

          <Route path="/account" element={<EmptyPage />} />
          <Route path="/loantransaction" element={<EmptyPage />} />
          <Route path="/savingtransaction" element={<EmptyPage />} />
          <Route path="/loanstatement" element={<EmptyPage />} />
          <Route path="/savingstatement" element={<EmptyPage />} />
          <Route path="/transactionlogs" element={<EmptyPage />} />
          <Route path="/activitylogs" element={<EmptyPage />} />
          <Route path="/notificationlogs" element={<EmptyPage />} />
          <Route path="/audit" element={<EmptyPage />} />
          <Route path="/kioskhealth" element={<EmptyPage />} />
          
        </Routes>
      
    </Router>
     
    </div>
  )
}


const RouteDashboard = () => {
  const [Dashboard, setDashboard] = React.useState(null);
  React.useEffect(() => {
    import('./pages/dashboard/dashboard').then((module) => {
      setDashboard(() => module.default);
    });
  }, []);
  if (!Dashboard) {
    return null;
  }
  return <Dashboard />;
};



const RouteUser = () => {
  const [User, setUser] = React.useState(null);
  React.useEffect(() => {
    import('./pages/user/User').then((module) => {
      setUser(() => module.default);
    });
  }, []);
  if (!User) {
    return null;
  }
  return <User />;
};

const RouteUsergroup = () => {
  const [Usergroup, setUsergroup] = React.useState(null);
  React.useEffect(() => {
    import('./pages/usergroup/Usergroup').then((module) => {
      setUsergroup(() => module.default);
    });
  }, []);
  if (!Usergroup) {
    return null;
  }
  return <Usergroup />;
};


const RouteSlideshow = () => {
  const [Slideshow, setSlideshow] = React.useState(null);
  React.useEffect(() => {
    import('./pages/slideshow/slideshow').then((module) => {
      setSlideshow(() => module.default);
    });
  }, []);
  if (!Slideshow) {
    return null;
  }
  return <Slideshow />;
};



export default App;