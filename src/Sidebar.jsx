// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";  // For navigation
// // import logo2 from "./assets/logo2.png";



// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <div className="flex">
// //       {/* Sidebar Toggle Button for mobile view */}

// //       {/* Sidebar */}
// //       <button
// //         className="p-4 bg-blue-500 text-black md:hidden"
// //         onClick={() => setIsOpen(!isOpen)}
// //       >
// //         Menu
// //       </button>
// //       <div
// //         className={`${
// //           isOpen ? "block" : "hidden"
// //         } md:block bg-gray-800 text-white h-screen p-4 w-64 space-y-6`}
// //       >
// //         {/* Logo at the top */}
// //         <div className="text-center mb-6">
// //             <img className='h-28 w-28 flex justify-center ml-10 text-slate-200' src={logo2} alt="logo2" />
// //         </div>

// //         {/* Navigation Links */}
// //         <nav className="space-y-4">
// //           <NavLink
// //             to="/dashboard"
// //             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
// //             activeClassName="bg-gray-700"
// //           >
// //             Dashboard
// //           </NavLink>
// //           <NavLink
// //             to="/check-ins"
// //             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
// //             activeClassName="bg-gray-700"
// //           >
// //             Check-ins
// //           </NavLink>
// //           <NavLink
// //             to="/users"
// //             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
// //             activeClassName="bg-gray-700"
// //           >
// //             Users
// //           </NavLink>
// //           <NavLink
// //             to="/welfare"
// //             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
// //             activeClassName="bg-gray-700"
// //           >
// //             Welfare
// //           </NavLink>
// //           <NavLink
// //             to="/employers"
// //             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
// //             activeClassName="bg-gray-700"
// //           >
// //             Employers
// //           </NavLink>
// //           <NavLink
// //             to="/approvals"
// //             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
// //             activeClassName="bg-gray-700"
// //           >
// //             Approvals
// //           </NavLink>
// //           <NavLink
// //             to="/settings"
// //             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
// //             activeClassName="bg-gray-700"
// //           >
// //             Settings
// //           </NavLink>
// //         </nav>

// //         {/* Logout Button at the bottom */}
// //         <div className="absolute bottom-4 w-full px-4">
// //           <NavLink
// //             to="/logout"
// //             className="block py-2.5 px-4 rounded transition duration-200"
// //           >
// //             Logout
// //           </NavLink>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";  // For navigation
// import logo2 from "./assets/logo2.png";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex">
//       {/* Sidebar Toggle Button for mobile view */}
//       <button
//         className="p-4 bg-white text-black md:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="flex items-center justify-center">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </div>
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } md:block bg-gray-800 text-white h-screen p-4 w-64 space-y-6`}
//       >
//         {/* Logo at the top */}
//         <div className="text-center mb-6">
//           <img className='h-28 w-28 mx-auto' src={logo2} alt="logo2" />
//         </div>

//         {/* Navigation Links */}
//         <nav className="space-y-4">
//           <NavLink
//             to="/dashboard"
//             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
//             activeClassName="bg-gray-700"
//           >
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/check-ins"
//             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
//             activeClassName="bg-gray-700"
//           >
//             Check-ins
//           </NavLink>
//           <NavLink
//             to="/users"
//             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
//             activeClassName="bg-gray-700"
//           >
//             Users
//           </NavLink>
//           <NavLink
//             to="/welfare"
//             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
//             activeClassName="bg-gray-700"
//           >
//             Welfare
//           </NavLink>
//           <NavLink
//             to="/employers"
//             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
//             activeClassName="bg-gray-700"
//           >
//             Employers
//           </NavLink>
//           <NavLink
//             to="/approvals"
//             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
//             activeClassName="bg-gray-700"
//           >
//             Approvals
//           </NavLink>
//           <NavLink
//             to="/settings"
//             className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
//             activeClassName="bg-gray-700"
//           >
//             Settings
//           </NavLink>
//         </nav>

//         {/* Logout Button at the bottom */}
//         <div className="absolute bottom-4 w-full px-4">
//           <NavLink
//             to="/logout"
//             className="block py-2.5 px-4 rounded transition duration-200"
//           >
//             Logout
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




































































































import React, { useState } from "react";
import { NavLink } from "react-router-dom";  
import logo2 from "./assets/logo2.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar Toggle Button for mobile view */}
      {!isOpen && (  // Show button only when sidebar is closed
        <button
          className="p-4 bg-white text-black md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-gray-800 text-white h-screen p-4 w-64 space-y-6`}
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
          <NavLink to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Dashboard
          </NavLink>
          <NavLink to="/check-ins" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Check-ins
          </NavLink>
          <NavLink to="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Users
          </NavLink>
          <NavLink to="/welfare" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Welfare
          </NavLink>
          <NavLink to="/employers" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Employers
          </NavLink>
          <NavLink to="/approvals" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Approvals
          </NavLink>
          <NavLink to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Settings
          </NavLink>
        </nav>

        {/* Logout Button at the bottom */}
        <div className="absolute bottom-4 w-full px-4">
          <NavLink to="/logout" className="block py-2.5 px-4 rounded transition duration-200">
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
