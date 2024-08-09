import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTim from "./DASHBOARD/createTIM";
import UserProfile from "./finalPage/mainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateTim />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
