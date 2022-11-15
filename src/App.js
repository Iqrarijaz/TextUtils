import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [toggleText, setToggleText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("Disable Dark Mode");
    } else {
      setMode("light");
      setToggleText("Enable Dark Mode");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleText={toggleText}
      />
      <div className="container">
        <Router>
          <div>
            <Route path="/" component={TextForm} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
