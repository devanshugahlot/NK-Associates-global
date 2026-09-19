import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import ScrollToTop from './components/layout/ScrollToTop';
import ConsultationModal from './components/common/ConsultationModal';
import SecurityModal from './components/common/SecurityModal';
import { ModalProvider } from './context/ModalContext';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import SecurityPage from './pages/SecurityPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-md space-y-5">
        <div className="w-16 h-16 bg-sky-50 text-brand-blue rounded-3xl flex items-center justify-center mx-auto text-2xl font-black font-mono">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-navy-900">Page Not Found</h1>
        <p className="text-sm text-slate-600">
          The page you are looking for might have been moved or does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-hover text-white px-6 py-3 rounded-full text-xs font-bold transition-colors"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col bg-white text-navy-900 selection:bg-sky-100 selection:text-brand-blue">
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />

        {/* Global Functional Modals */}
        <ConsultationModal />
        <SecurityModal />
      </div>
    </ModalProvider>
  );
}
