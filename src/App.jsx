
// import React from 'react'

// import Include from './Sm';
// import Sidebar from './Sidebar';

// function App() {
//   return (
//     <div>
//       {/* <Include /> */}
//       <Sidebar/>
     
//     </div>
//   )
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import Dashboard from "./Dashboard"; 
import Users from "./Users";
import Check_Ins from "./Check_Ins";
import Settings from "./Settings";
import Approvals from "./Approvals";
import Login from "./Login"; 

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Render the Sidebar */}
        <div className="flex-1 p-10">
          <Routes>
            {/* Nested Routes for Dashboard */}
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route index element={<div>Welcome to the Dashboard!</div>} />
              <Route path="users" element={<Users />} />
              <Route path="check_Ins" element={<Check_Ins />} />
              <Route path="settings" element={<Settings />} />
              <Route path="approvals" element={<Approvals />} />
            </Route>
            <Route path="/login" element={<Login />} /> {/* Optional */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
