import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; 
import Sidebar from "./Sidebar"; 
import Dashboard from "./Dashboard"; 
import Users from "./Users";
import Check_Ins from "./Check_Ins";
import Settings from "./Settings";
import Welfare from './Welfare'
import Approvals from "./Approvals";
import Employers from "./Employers";
import Login from "./Login"; 

function App() {
  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={
            <>
              <Sidebar />
              <div className="flex-1 p-10">
                <Routes>
                  <Route index element={<div>Welcome to the Dashboard</div>} />
                  <Route path="users" element={<Users />} />
                  <Route path="check-ins" element={<Check_Ins />} />
                  <Route path="settings" element={<Settings />} />
                   <Route path="Welfare" element={<Welfare />} />
                  <Route path="Employers" element={<Employers />} />
                  <Route path="Approvals" element={<Approvals/>} />
                </Routes>
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
