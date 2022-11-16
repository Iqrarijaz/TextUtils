import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./components/ContactUs";
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
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleText={toggleText}
      />
      <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
