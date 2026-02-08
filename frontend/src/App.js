import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import HireTalentPage from "@/pages/HireTalentPage";
import FindWorkPage from "@/pages/FindWorkPage";
import ConsultantsPage from "@/pages/ConsultantsPage";
import WhyUsPage from "@/pages/WhyUsPage";
import ReferEarnPage from "@/pages/ReferEarnPage";
import ContactPage from "@/pages/ContactPage";
import FindTalentFormPage from "@/pages/FindTalentFormPage";
import FindWorkFormPage from "@/pages/FindWorkFormPage";
import ThankYouPage from "@/pages/ThankYouPage";
import LegalPage from "@/pages/LegalPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import ScrollToTop from "@/components/layout/ScrollToTop";

function App() {
  return (
    <div className="App font-montserrat">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hire-talent" element={<HireTalentPage />} />
            <Route path="/find-work" element={<FindWorkPage />} />
            <Route path="/consultants" element={<ConsultantsPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/refer-earn" element={<ReferEarnPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/find-talent-form" element={<FindTalentFormPage />} />
            <Route path="/find-work-form" element={<FindWorkFormPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/service/:slug" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
