import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Welcome from "./components/Welcome";

import {
  Footer,
  Contact,
  Projects,
  OurTeam,
  Navbar,
  Services,
  StarsCanvas,
  AboutSection,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
    </div>
    <Welcome />
    <AboutSection />
    <Projects />
    <Services />
    <OurTeam />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
</BrowserRouter>
    </>
  );
};

export default App;
