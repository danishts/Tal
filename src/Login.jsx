// import React, { useState } from 'react';
// import logo from "./assets/logo.png";
// import logo2 from "./assets/logo2.png";
// import logo1 from "./assets/logo1.png";

// export default function Login() {
  
//   const [showPassword, setShowPassword] = useState(false);


//   const togglePasswordVisibility = () => {
//     setShowPassword(prevState => !prevState);
//   };

//   return (
//     <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      
//       <div className="absolute top-0 left-0 hidden md:block">
//         <img className="w-1/2 md:w-96 h-auto" src={logo} alt="logo" />
//       </div>

      
//       <div className="relative flex flex-col items-center justify-center z-10 w-full max-w-md px-4">
//         <img className="w-24 md:w-36 h-auto" src={logo2} alt="logo2" />
//         <h1 className="text-2xl md:text-4xl mt-4 md:mt-6 font-bold text-center">Sign in</h1>

//         <div className="flex flex-col w-full mt-4">
          
//           {/* <label htmlFor="email" className="text-sm top-[0.5rem] font-bold text-gray-600 mb-2">
//             Email address:
//           </label>
//           <input
//             id="email"
//             type="text"
//             placeholder="johndoe@email.com"
//             name="email"
//             className="text-sm w-full p-3 border-2 border-gray-300 rounded-lg bg-white focus:outline-none"
//           /> */}


         
//              <label htmlFor="email" className="text-sm font-bold text-[#84818A] relative w-28 top-[0.5rem] px-2 bg-white inline-block">
//                Email address:
//              </label>
//              <input
//                id="email"
//                type="text"
//                placeholder="johndoe@email.com"
//                name="email"
//                className="text-sm w-full p-[11px_10px] border-2 border-[#DCDBDD] rounded-lg bg-white focus:outline-none"
//             div/>

          

//           <div className="relative mt-4">
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full bg-white p-3 pr-12 text-sm leading-5 border border-gray-300 rounded-lg shadow-sm outline-none"
//             />
//             <span
//               onClick={togglePasswordVisibility}
//               className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#84818A] cursor-pointer"
//             >
//               <svg
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4 h-4"
//               >
//                 <path
//                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                   strokeWidth="2"
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                   strokeWidth="2"
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </span>
//           </div>
//           <button
//                style={{
//                       background: 'linear-gradient(91.32deg, #007744 0.26%, #00AC62 99.74%)',
//                       color: 'white',
//                     }}
//             className='w-full h-12 mt-6 rounded-lg font-bold text-white '>Log in</button>
//         </div>
//       </div>

      
//       <div className="absolute bottom-0 right-0 hidden md:block">
//         <img className="w-1/2 md:w-96 h-auto" src={logo1} alt="logo1" />

//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import logo1 from "./assets/logo1.png";

export default function Login() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleLogin = () => {
    // Add your login logic here (e.g., validation)
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 hidden md:block">
        <img className="w-1/2 md:w-96 h-auto" src={logo} alt="logo" />
      </div>

      <div className="relative flex flex-col items-center justify-center z-10 w-full max-w-md px-4">
        <img className="w-24 md:w-36 h-auto" src={logo2} alt="logo2" />
        <h1 className="text-2xl md:text-4xl mt-4 md:mt-6 font-bold text-center">Sign in</h1>

        <div className="flex flex-col w-full mt-4">
          <label htmlFor="email" className="text-sm font-bold text-[#84818A] relative w-28 top-[0.5rem] px-2 bg-white inline-block">
            Email address:
          </label>
          <input
            id="email"
            type="text"
            placeholder="johndoe@email.com"
            name="email"
            className="text-sm w-full p-[11px_10px] border-2 border-[#DCDBDD] rounded-lg bg-white focus:outline-none"
          />

          <div className="relative mt-4">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-white p-3 pr-12 text-sm leading-5 border border-gray-300 rounded-lg shadow-sm outline-none"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#84818A] cursor-pointer"
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <button
            style={{
              background: 'linear-gradient(91.32deg, #007744 0.26%, #00AC62 99.74%)',
              color: 'white',
            }} 
            className='w-full h-12 mt-6 rounded-lg font-bold text-white'
            onClick={handleLogin} // Add onClick handler
          >
            Log in
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden md:block">
        <img className="w-1/2 md:w-96 h-auto" src={logo1} alt="logo1" />
      </div>
    </div>
  );
}
