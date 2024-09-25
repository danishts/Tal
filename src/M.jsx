
// import React from 'react';
// import img from './assets/img.png';

// const MenuBar = () => {
//   return (
//     <div className="bg-white   flex justify-around w-full shadow-md h-20">
//           <div className='w-full h-20 flex flex-col '>
//               <h1 className='px-5 text-4xl font-bold'> Admin  Panel</h1>
//               <h1 className='px-5 text-2xl'>Hey Ryan! Good Morning ☀️</h1>
//           </div>
          
//           <div  className='flex   w-72 items-center' >
//                < img src={img} alt="Description" className=" w-16  h-16   " />
//         <div className='flex flex-col'>
//         <h1 className='ml-5  text-2xl mr-3  xl fron-bold'>John Doe K</h1>
//         <h1 className='flex text-3xl ml-5 items-center'> Admin</h1>
//         </div>
//           </div>
//     </div>
//   );
// };

// export default MenuBar;

import React from 'react';
import img from './assets/img.png';

const MenuBar = () => {
  return (
    <div className="bg-white flex flex-col sm:flex-row justify-between items-center w-full shadow-md p-4">
      {/* Title Section */}
      <div className="flex flex-col w-full sm:w-auto text-center sm:text-left">
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">Admin Panel</h1>
        <h1 className="text-sm sm:text-lg lg:text-xl">Hey Ryan! Good Morning ☀️</h1>
      </div>

      {/* User Info Section */}
      <div className="flex items-center mt-4 sm:mt-0 w-full sm:w-auto justify-center sm:justify-end">
        <img src={img} alt="User" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14" />
        <div className="flex flex-col ml-2 sm:ml-3">
          <h1 className="text-base sm:text-lg font-bold">John Doe K</h1>
          <h1 className="text-sm sm:text-base">Admin</h1>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
