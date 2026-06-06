/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import Curriculum from "./components/Curriculum";
import Equipment from "./components/Equipment";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A1F44] selection:bg-[#00AEEF] selection:text-[#0A1F44]">
      {/* Decorative Navigation top coordinates bar */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 h-[30px] bg-[#05132B]/60 backdrop-blur-md border-b border-white/5 z-50 items-center justify-between px-8 text-[9px] font-mono text-gray-500 select-none">
        <div className="flex items-center space-x-4">
          <span>COCKPIT_SYS: LEVEL_5_FTD [NOMINAL]</span>
          <span>AIRBUS_SOP: v4.12 [ACTIVE]</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>LAT: 37.5583° N</span>
          <span>LNG: 126.7906° E (RKSS)</span>
          <span>HEADING: 140° (ILS_RUNWAY)</span>
        </div>
      </div>

      {/* Adjust Main Layout spacing to accommodate top telemetry coordinates bar if screens are high resolution */}
      <div className="lg:pt-[30px]">
        {/* Navigation Sticky Bar */}
        <Header />

        {/* Core Sections Flow */}
        <main>
          <Hero />
          <ValueProposition />
          <Curriculum />
          <Equipment />
          <FAQ />
          <ContactForm />
        </main>

        {/* Footer info panel */}
        <Footer />
      </div>
    </div>
  );
}
