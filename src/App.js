import './App.css';
import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
      <div className="container">
          <Header />
          <div className="contentContainer">
              <Navbar />
              <Profile />
          </div>
      </div>
  );
}

export default App;
