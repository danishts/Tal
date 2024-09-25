// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; 
// import Sidebar from "./Sidebar"; 
// import Dashboard from "./Dashboard"; 
// import Users from "./Users";
// import M from './M';
// import Check_Ins from "./Check_Ins";
// import Settings from "./Settings";
// import Welfare from './Welfare'
// import Approvals from "./Approvals";
// import Employers from "./Employers";
// import Login from "./Login"; 

// function App() {
//   return (
//     <Router>
     
      
//         <Sidebar />
      
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard/*" element={
//             <>
//               <Sidebar />
//               <div className="flex-1 p-10">
//                 <Routes>
//                   <Route index element={<div>Welcome to the Dashboard</div>} />
//                   <Route path="users" element={<Users />} />
//                   <Route path="check-ins" element={<Check_Ins />} />
//                   <Route path="settings" element={<Settings />} />
//                    <Route path="Welfare" element={<Welfare />} />
//                   <Route path="Employers" element={<Employers />} />
//                   <Route path="Approvals" element={<Approvals/>} />
//                 </Routes>
//               </div>
//             </>
//           } />
//         </Routes>
     
//     </Router>
//   );
// }

// export default App;








// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Sidebar from "./Sidebar"; 
// import M from "./M"; // Import MenuBar
// import Dashboard from "./Dashboard"; 
// import Users from "./Users";
// import Welfare from './Welfare'
// import Employers from "./Employers";
// import Check_Ins from "./Check_Ins";
// import Settings from "./Settings";
// import Approvals from "./Approvals";
// import Login from "./Login"; 

// function App() {
//   return (
//     <Router>
      
//             <Routes>
//               <Route path="/" element={<Navigate to="/login" />} />
//               <Route path="/login" element={<Login />} />
//         <Route path="/dashboard/*" element={
//           <>
//             <div className="flex">
//         <Sidebar />
//         <div className="flex-1">
//           <M/>
//           <div className="p-10">
//                   <Routes>
//                     <Route index element={<div>Welcome to the Dashboard</div>} />
//                     <Route path="users" element={<Users />} />
//                     <Route path="check-ins" element={<Check_Ins />} />
//                     <Route path="settings" element={<Settings />} />
//                     <Route path="Employers" element={<Employers />} />
//                     <Route path="Welfare" element={<Welfare />} />
//                     <Route path="approvals" element={<Approvals />} />
//                   </Routes>
                
//           </div>
//               </div>
//               </div>
//           </>
                
//               } />
//             </Routes>
//     </Router>
//   );
// }

// export default App;































import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar"; 
import M from "./M"; // Import MenuBar
import Dashboard from "./Dashboard"; 
import Users from "./Users";
import Welfare from './Welfare';
import Employers from "./Employers";
import Check_Ins from "./Check_Ins";
import Settings from "./Settings";
import Approvals from "./Approvals";
import Login from "./Login"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={
          <>
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <M />
                <div className="p-10">
                  <Routes>
                    <Route index element={<div>Welcome to the Dashboard</div>} />
                    <Route path="users" element={<Users />} />
                    <Route path="check-ins" element={<Check_Ins />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="employers" element={<Employers />} />
                    <Route path="welfare" element={<Welfare />} />
                    <Route path="approvals" element={<Approvals />} />
                  </Routes>
                </div>
              </div>
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
