import logo from "./logo.svg";
import "./App.css";
import ToolBar from "./components/ToolBar.js";
import User from "./components/User.js";
import Dashboard from "./components/Dashboard.js";
import UserDetail from "./components/UserDetail.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imports aus Video
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToolBar> </ToolBar>
        <div className="router-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="user" element={<User />} />
            <Route path="user/:userId" element={<UserDetail />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
