import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import VideoDetail from "./pages/VideoDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchTerm" element={<SearchResults />} />
            <Route path="/video/:videoId" element={<VideoDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
