import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Heading from "./Heading";
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Feedback from "./FeedBack";
import Footer from "./Footer";
import Blog from "./Blog";

function App() {
  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
