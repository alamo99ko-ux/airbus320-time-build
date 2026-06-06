/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plane, Mail, Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "교육 가치", targetId: "value-proposition" },
    { label: "커리큘럼", targetId: "curriculum" },
    { label: "시뮬레이터", targetId: "equipment" },
    { label: "자주 묻는 질문", targetId: "faq" },
  ];

  const handleScrollTo = (targetId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled
          ? "bg-[#0A1F44]/95 backdrop-blur-md border-[#00AEEF]/20 py-4 shadow-lg shadow-[#0A1F44]/20"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="p-2 bg-[#00AEEF]/10 rounded-lg group-hover:bg-[#00AEEF]/20 transition-all duration-300">
              <Plane className="h-6 w-6 text-[#00AEEF] transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-lg md:text-xl font-bold text-white tracking-widest font-sans uppercase">
                A320 <span className="text-[#00AEEF]">Time Building</span>
              </span>
              <p className="text-[9px] text-gray-400 font-mono tracking-wider">PROFESSIONAL COCKPIT ACADEMY</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.targetId}
                  onClick={() => handleScrollTo(item.targetId)}
                  className="text-sm font-medium text-gray-300 hover:text-[#00AEEF] transition-colors duration-300 relative py-1 group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00AEEF] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => handleScrollTo("contact-form")}
              className="px-5 py-2.5 bg-[#00AEEF] text-[#0A1F44] text-sm font-bold rounded-lg hover:bg-white transition-all duration-300 hover:shadow-[0_0_15px_#00AEEF] tracking-wide uppercase cursor-pointer"
            >
              무료 상담 신청
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-[#00AEEF] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A1F44] border-t border-[#00AEEF]/10 px-4 pt-2 pb-6 space-y-3"
          >
            {menuItems.map((item) => (
              <button
                key={item.targetId}
                onClick={() => handleScrollTo(item.targetId)}
                className="block w-full text-left px-3 py-3 text-base font-semibold text-gray-200 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-3">
              <button
                onClick={() => handleScrollTo("contact-form")}
                className="w-full py-3.5 bg-[#00AEEF] text-[#0A1F44] text-center font-bold rounded-lg shadow-md hover:bg-white text-sm tracking-widest transition-all"
              >
                무료 상담 신청
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
