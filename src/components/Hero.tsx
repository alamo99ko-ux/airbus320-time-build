/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Plane, ChevronDown, Award, Compass, Timer } from "lucide-react";
import { IMAGE_PATHS } from "../data";

export default function Hero() {
  const handleScrollToForm = () => {
    const element = document.getElementById("contact-form");
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
    <div id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A1F44]">
      {/* Cinematic Cockpit Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGE_PATHS.heroCockpit}
          alt="Airbus A320 Cockpit Instrument Panel"
          className="w-full h-full object-cover object-center transform scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Deep navy radial and linear gradient overlay for high UI contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/95 via-[#0A1F44]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-[#0A1F44]/50"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 px-3.5 py-1.5 rounded-full mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#00AEEF] animate-ping"></span>
            <span className="text-[#00AEEF] text-xs font-semibold tracking-wider uppercase font-mono">
              Pro CPL Pilot Career Booster
            </span>
          </motion.div>

          {/* Main Hero Header */}
          <motion.h1
            initial={{ opacity: 0, y: [50, 0] }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-8 animate-fade-in"
          >
            <div className="mb-4 tracking-wide font-sans">
              <span className="block text-[#00AEEF] font-semibold text-3xl sm:text-4xl lg:text-5xl">빌딩 올리고 싶으세요?</span>
              <span className="block text-white font-semibold text-lg sm:text-xl lg:text-2xl mt-2">터보팬 항공기와 운항노선 경험으로 완성하십시오.</span>
            </div>
            <span className="text-[#00AEEF] relative inline-block">A320과 B737 로 도전하십시오.<span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#00AEEF]/40"></span></span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-gray-300 mb-8 leading-relaxed font-sans max-w-2xl"
          >
            메이저 에어라인 핵심 기종인 <strong>Airbus A320</strong> 또는 <strong>Boeing B737-800</strong> 면허 과정을 상담을 통해 개인별 맞춤 기종을 선택하여 입과하십시오. 
            현직 최고의 기장단이 전수하는 표준 SOP와 실제 운항 노선경험을 통해 메이저 에어라인 합격선으로 조종 능력을 극대화합니다.
          </motion.p>

          {/* CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <a
              href="https://forms.gle/KrG2mc7sdVay6BG37"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#00AEEF] text-[#0A1F44] font-bold rounded-lg shadow-lg shadow-[#00AEEF]/20 hover:bg-white text-base transition-all duration-300 hover:shadow-[0_0_20px_#00AEEF] tracking-wide flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Plane className="h-5 w-5 transform -rotate-45" />
              <span>무료 커리어 컨설팅 신청하기</span>
            </a>
            <button
              onClick={() => {
                const term = document.getElementById("curriculum");
                if (term) term.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-transparent border border-gray-500 hover:border-[#00AEEF] text-white hover:text-[#00AEEF] font-semibold rounded-lg text-base transition-all duration-300 bg-white/5 cursor-pointer text-center"
            >
              교육과정 자세히 보기
            </button>
          </motion.div>

          {/* Floating Feature Widgets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00AEEF]">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-sans leading-none">8,000 시간 이상</p>
                <p className="text-xs text-gray-400 mt-1">수석 기장 비행 이력</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00AEEF]">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono leading-none">1:1 SOP</p>
                <p className="text-xs text-gray-400 mt-1">글로벌 에어라인 표준</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00AEEF]">
                <Timer className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono leading-none">100%</p>
                <p className="text-xs text-gray-400 mt-1">ICAO Type V, FAA Level D</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Scroll Down Badge */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-xs text-gray-400 tracking-widest font-mono uppercase mb-2">SCROLL DOWN TO INGEST</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="p-1 bg-[#00AEEF]/15 border border-[#00AEEF]/40 rounded-full cursor-pointer text-[#00AEEF]"
          onClick={() => {
            const nextSec = document.getElementById("value-proposition");
            if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </div>
  );
}
