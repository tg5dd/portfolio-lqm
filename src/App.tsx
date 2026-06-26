import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import CRTOverlay from "./components/CRTOverlay";
import MatrixRain from "./components/MatrixRain";
import CursorGlow from "./components/CursorGlow";
import BootSequence from "./components/BootSequence";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./App.css";

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
    const t = window.setTimeout(() => setShow(true), 16);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  return (
    <main className={`page ${show ? "is-show" : "is-hide"}`} key={location.pathname}>
      {children}
    </main>
  );
}

export default function App() {
  const [booted, setBooted] = useState(false);

  // Lock scroll until boot completes
  useEffect(() => {
    document.body.style.overflow = booted ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [booted]);

  return (
    <div className="app">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      <CRTOverlay />
      <MatrixRain />
      <CursorGlow />

      <div className="app__noise" aria-hidden />

      <Nav />

      <PageTransition>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </PageTransition>
    </div>
  );
}
