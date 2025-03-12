import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import FaqComponent from "./components/FaqComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/syaratketen" element={<SyaratKetenPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
} 

export default App;
