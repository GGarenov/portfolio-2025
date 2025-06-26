import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Home />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="/about"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <About />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="/projects"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Projects />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="/skills"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Skills />
                  </motion.div>
                </AnimatePresence>
              }
            />
            <Route
              path="/contact"
              element={
                <AnimatePresence mode="wait">
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Contact />
                  </motion.div>
                </AnimatePresence>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
