/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustStatsStrip } from './components/TrustStatsStrip';
import { CountryGrid } from './components/CountryGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VisaCategories } from './components/VisaCategories';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal, LegalDocType } from './components/LegalModal';

export default function App() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [consultCountryId, setConsultCountryId] = useState<string | undefined>(undefined);
  const [consultPurpose, setConsultPurpose] = useState<string | undefined>(undefined);
  const [legalDocType, setLegalDocType] = useState<LegalDocType>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenConsultModal = (countryId?: string, purpose?: string) => {
    setConsultCountryId(countryId);
    setConsultPurpose(purpose);
    setIsConsultModalOpen(true);
  };

  const handleCloseConsultModal = () => {
    setIsConsultModalOpen(false);
    setConsultCountryId(undefined);
    setConsultPurpose(undefined);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#002552] text-white px-5 py-3 rounded-xl shadow-xl border border-white/20 flex items-center gap-2.5 animate-in slide-in-from-top-4">
          <span className="material-symbols-outlined text-[#16a34a] text-[20px]">check_circle</span>
          <span className="text-[13px] font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header onOpenConsultModal={(countryId) => handleOpenConsultModal(countryId)} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#f8f9ff]">
        {/* Hero Section with Consult Form */}
        <HeroSection
          onSuccessSubmit={(data) => {
            showToast(
              `Đã tiếp nhận thông tin của ${data.name} (${data.phone}). Chuyên viên VISA5S sẽ liên hệ tư vấn.`
            );
          }}
          onOpenPrivacy={() => setLegalDocType('privacy')}
        />

        {/* Independent Advisory Highlights Strip */}
        <TrustStatsStrip />

        {/* Destination Countries with filter tabs & search */}
        <CountryGrid
          onSelectCountryForConsult={(countryId) => handleOpenConsultModal(countryId)}
        />

        {/* Practical Consulting Scope Grid */}
        <WhyChooseUs />

        {/* Categories by Travel Purpose */}
        <VisaCategories
          onSelectPurpose={(purposeId) => handleOpenConsultModal(undefined, purposeId)}
        />

        {/* 4-Step Process & Reference Checklist */}
        <ProcessTimeline onOpenConsult={() => handleOpenConsultModal()} />

        {/* Transparency & Cost Breakdown */}
        <Testimonials />

        {/* Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* Final Consultation & Legal Disclaimer Section */}
        <FinalCtaSection onOpenPrivacy={() => setLegalDocType('privacy')} />
      </main>

      {/* Footer */}
      <Footer onOpenLegalDoc={(doc) => setLegalDocType(doc)} />

      {/* Floating Quick Action Contacts (Email, Zalo, Call) */}
      <FloatingContactWidget />

      {/* Mobile Sticky Bottom Conversion Bar */}
      <MobileBottomBar onOpenConsultModal={() => handleOpenConsultModal()} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={handleCloseConsultModal}
        defaultCountryId={consultCountryId}
        defaultPurpose={consultPurpose}
        onOpenPrivacy={() => setLegalDocType('privacy')}
      />

      {/* Interactive Legal & Privacy Modal */}
      <LegalModal docType={legalDocType} onClose={() => setLegalDocType(null)} />
    </div>
  );
}
