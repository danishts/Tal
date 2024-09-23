


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './Users';
import Check_Ins from './Check_Ins';

import Welfare from './Welfare'
import Settings from './Settings';
import Employers from "./Employers";
import Approvals from './Approvals';

function Dashboard() {
  return (
    <div>
      <h1> malik is back</h1>
      <Routes>
        <Route path="check-ins" element={<Check_Ins />} />
        <Route path="users" element={<Users />} />
        <Route path="welfare" element={<Welfare />} />
        <Route path="approvals" element={<Approvals />} />
        <Route path="Employers" element={<Employers />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
