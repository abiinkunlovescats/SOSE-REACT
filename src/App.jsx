import Home from "./Home.jsx";
import React, { useState } from "react";
import About from "./About";
import { Courses } from "./Courses.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountForm from "./components/AccountForm.jsx";
import { Contact } from "./Contact.jsx";
function App() {
    
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="courses" element={<Courses />} />
          <Route exact path="contacts" element ={<Contact/>} />
        </Routes>

        <Footer />
      </Router>
    </React.Fragment>
  );
  }

export default App;
