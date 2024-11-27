// import React from 'react';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from './Login';
// import Home from './Home';
// import Feed from './Feed';
// import Profile from './Profile';

// const Body = () => {
//     const appRouter = createBrowserRouter([
//         {
//             path: "/",
//             element: <Home/>,
//             children:[
//                 {
//                     path:"/",
//                     element:<Feed/>
//                 },
//                 {
//                     path:"/profile/:id",
//                     element:<Profile/>
//                 }
//             ]
//         },
//         {
//             path: "/login",
//             element: <Login />
//         }
//     ])
//     return (
//         <div>
//             <RouterProvider router={appRouter} />
//         </div>
//     )
// }

// export default Body

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from "./Login";
// import Home from "./Home";
// import Feed from "./Feed";
// import Profile from "./Profile";
// import Chat from "./Chat"; // Import the Chat component

// const Body = () => {
//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//       children: [
//         {
//           path: "/",
//           element: <Feed />,
//         },
//         {
//           path: "/profile/:id",
//           element: <Profile />,
//         },
//         {
//           path: "/chat/:userId/:otherUserId", // Updated path for Chat route
//           element: <Chat />, // Chat component
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   );
// };

// export default Body;


import React from "react";
import { Link } from "react-router-dom"; // You can add links if needed
import Login from "./Login";
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import Chat from "./Chat"; // Import the Chat component

const Body = () => {
  return (
    <div>
    </div>
  );
};

export default Body;

// import React from "react";
// import Login from "./Login";
// import Home from "./Home";
// import Feed from "./Feed";
// import Profile from "./Profile";
// import Chat from "./Chat"; // Import the Chat component

// const Body = () => {
//   return (
//     <div>
//       <header>
//       </header>
//       <main>
//         {/* Body will render the content of the routes defined in App.js */}
//       </main>
//       <footer>
//         <p>© 2024 Chat App</p>
//       </footer>
//     </div>
//   );
// };

// export default Body;

// import React from "react";
// import LeftSidebar from "./LeftSidebar";
// import RightSidebar from "./RightSidebar";
// import { Outlet } from "react-router-dom"; // This is where the nested route content will appear

// const Body = () => {
//   return (
//     <div>
//       <header>{/* Optional Header */}</header>
//       <main className="flex justify-between w-[80%] mx-auto">
//         <LeftSidebar />
//         <Outlet />
//         <RightSidebar />
//       </main>
//     </div>
//   );
// };

// export default Body;

// import React from "react";
// import LeftSidebar from "./LeftSidebar";
// import RightSidebar from "./RightSidebar";
// import { Outlet } from "react-router-dom"; // The content of nested routes (Feed, Profile, Chat) will appear here

// const Body = () => {
//   return (
//     <div>
//       <header>{/* Optional Header */}</header>
//       <main className="flex justify-between w-full mx-auto">
//         {/* Left Sidebar */}
//         <div className="w-[20%]">
//           <LeftSidebar />
//         </div>

//         {/* Main content area where routes like Feed/Profile/Chat will be rendered */}
//         <div className="flex-1">
//           <Outlet />{" "}
//           {/* This will render Feed, Profile, or Chat depending on the route */}
//         </div>

//         {/* Right Sidebar */}
//         <div className="w-[25%]">
//           <RightSidebar />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Body;



