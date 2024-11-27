// import './App.css';
// import Body from './components/Body';
// import {Toaster} from "react-hot-toast"
// import Chat from './components/Chat'

// function App() {
//   return (
//     <div className="App">
//       <Body />
//       <Toaster />
//       <Route path="/chat/:userId" element={<Chat />} />
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Body from './components/Body';
// import { Toaster } from "react-hot-toast";
// import Chat from './components/Chat';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Body />
//         <Toaster />
//         <Routes> 
//           {/* Define routes inside Routes */}
//           <Route path="/chat/:userId" element={<Chat />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import "./App.css";
// import Body from "./components/Body";
// import { Toaster } from "react-hot-toast";
// import Chat from "./components/Chat";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Body />
//         <Toaster />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/feed" element={<Feed />} />
//           <Route path="/profile/:id" element={<Profile />} />
//           <Route path="/chat/:userId1/:userId2" element={<Chat />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import "./App.css";
// import Body from "./components/Body";
// import { Toaster } from "react-hot-toast";
// import Chat from "./components/Chat";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Body />
//         <Toaster />
//         <Routes>
//           <Route path="/chat/:userId1/:userId2" element={<Chat />} />
//           {/* You can add other routes here if needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Body />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/chat/:userId/:otherUserId" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import "./App.css";
// import Body from "./components/Body";
// import { Toaster } from "react-hot-toast";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Feed from "./components/Feed";
// import Profile from "./components/Profile";
// import Login from "./components/Login";
// import Chat from "./components/Chat";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Body /> {/* This wraps the layout */}
//         <Toaster />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* The Feed component will be rendered inside the Body layout via Outlet */}
//           <Route path="/feed" element={<Feed />} />
//           <Route path="/profile/:id" element={<Profile />} />
//           <Route path="/chat/:userId/:otherUserId" element={<Chat />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components
// import Body from "./components/Body";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import Feed from "./components/Feed";
// import Profile from "./components/Profile";
// import Chat from "./components/Chat";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Layout wrapped by the Body component */}
//         <Body />
//         <Routes>
//           {/* Define the main routes for the application */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Home />} />{" "}
//           {/* Home contains Left Sidebar, Feed, and Right Sidebar */}
//           <Route path="/feed" element={<Feed />} />
//           <Route path="/profile/:id" element={<Profile />} />
//           <Route path="/chat/:userId/:otherUserId" element={<Chat />} />{" "}
//           {/* Chat routing */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;







