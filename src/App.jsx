import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Education from "./components/education/Education";
import Certificates from "./components/certifications/Certificates";

function App() {
  // for menu(hamburger button clicked or not)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Education />
        <Works />
        <Certificates />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
