
// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import logo2 from "./assets/logo2.png";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogout = () => {
//     // Perform any logout logic here (if needed)
//     navigate('/login'); // Redirect to login
//   };

//   return (
//     <div className="flex">
//       <button
//         className="p-4 bg-white text-black md:hidden"
//         onClick={() => setIsOpen(prev => !prev)}
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//         </svg>
//       </button>

//       <div className={`${
//           isOpen ? "block" : "hidden"
//         } md:block fixed md:static bg-gray-800 text-white h-screen p-4 w-64 space-y-6 transition duration-300`}
//       >
//         <button className="text-white md:hidden mb-4" onClick={() => setIsOpen(false)}>Close</button>

//         <div className="text-center mb-6">
//           <img className='h-28 w-28 mx-auto' src={logo2} alt="logo2" />
//         </div>

//         <nav className="space-y-4">
//           <NavLink to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
//             Dashboard
//           </NavLink>
//           <NavLink to="/dashboard/check-ins" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
//             Check-ins
//           </NavLink>
//           <NavLink to="/dashboard/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
//             Users
//           </NavLink>
//           <NavLink to="/dashboard/welfare" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
//             Welfare
//           </NavLink>
//           <NavLink to="/dashboard/employers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
//             Employers
//           </NavLink>
//           <NavLink to="/dashboard/approvals" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
//             Approvals
//           </NavLink>
//           <NavLink to="/dashboard/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>
//             Settings
//           </NavLink>
//         </nav>

//         {/* <div className="absolute bottom-4 w-full px-4">
//           <NavLink to="/logout" className="block py-2.5 px-4 rounded transition duration-200">
//             Logout
//           </NavLink>
//         </div> */}

     
//           <div className="absolute bottom-4 w-full px-4">
//           <button onClick={handleLogout} className="block py-2.5 px-4 rounded transition duration-200">
//             Logout
//           </button>
//         </div>





//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;












import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";  
import logo2 from "./assets/logo2.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // This function handles routing and closes the sidebar on mobile after click
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the sidebar on route change in mobile view
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button for mobile view */}
      <button
        className="p-4 bg-white text-black md:hidden"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block fixed md:static bg-gray-800 text-white h-screen p-4 w-64 space-y-6 transition duration-300`}
      >
        {/* Close button to hide sidebar */}
        <button
          className="text-white md:hidden mb-4"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>

        {/* Logo at the top */}
        <div className="text-center mb-6">
          <img className='h-28 w-28 mx-auto' src={logo2} alt="logo2" />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <NavLink to="/dashboard" onClick={() => handleNavigation("/dashboard")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Dashboard
          </NavLink>
          <NavLink to="/check-ins" onClick={() => handleNavigation("/check-ins")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Check-ins
          </NavLink>
          <NavLink to="/users" onClick={() => handleNavigation("/users")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Users
          </NavLink>
          <NavLink to="/welfare" onClick={() => handleNavigation("/welfare")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Welfare
          </NavLink>
          <NavLink to="/employers" onClick={() => handleNavigation("/employers")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Employers
          </NavLink>
          <NavLink to="/approvals" onClick={() => handleNavigation("/approvals")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Approvals
          </NavLink>
          <NavLink to="/settings" onClick={() => handleNavigation("/settings")} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Settings
          </NavLink>
        </nav>

        {/* Logout Button at the bottom */}
        <div className="absolute bottom-4 w-full px-4">
          <button onClick={() => handleNavigation("/login")} className="block py-2.5 px-4 rounded transition duration-200">
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
};

export default Sidebar;
