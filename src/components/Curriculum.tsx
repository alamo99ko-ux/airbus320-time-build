/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Monitor, Landmark, CheckCircle, Clock } from "lucide-react";
import { CURRICULUM_PHASES } from "../data";

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState("phase1");

  const icons = {
    phase1: BookOpen,
    phase2: Monitor,
    phase3: Landmark,
  };

  const currentPhase = CURRICULUM_PHASES.find((p) => p.id === activeTab) || CURRICULUM_PHASES[0];
  const IconComponent = icons[currentPhase.id as keyof typeof icons] || BookOpen;

  return (
    <section id="curriculum" className="py-24 bg-[#05132B] relative overflow-hidden">
      {/* Dynamic Runway light style accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00AEEF]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title with animated flight path accent */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-[#00AEEF] uppercase tracking-widest font-mono mb-3"
          >
            TRAINING ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: [40, 0] }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            A320 타임빌딩 정밀 교육과정
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-[#00AEEF] mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base text-slate-300 max-w-2xl mx-auto"
          >
            지상 기본 이론부터 고도화된 스탠다드 시뮬레이터 실무, 그리고 기장-부기장 상호 의사소통(LOFT)까지 완벽히 체계화된 3단계 프로페셔널 트레이닝 여정입니다.
          </motion.p>
        </div>

        {/* Dynamic Curriculum Layout */}
        <div id="curriculum-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Navigation Tabs (3 Cols on large, 1 Col on smaller) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
            {CURRICULUM_PHASES.map((phase) => {
              const PhaseIcon = icons[phase.id as keyof typeof icons] || BookOpen;
              const isActive = phase.id === activeTab;

              return (
                <button
                  key={phase.id}
                  onClick={() => setActiveTab(phase.id)}
                  id={`tab-btn-${phase.id}`}
                  className={`flex-1 lg:flex-none flex items-center justify-center lg:justify-start space-x-2 lg:space-x-4 px-6 py-4 rounded-xl border text-left transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#112D5E] text-white border-[#00AEEF]/50 shadow-md shadow-[#0A1F44]/25"
                      : "bg-[#0A1F44]/40 text-gray-400 border-white/10 hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/5"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isActive ? "bg-[#00AEEF] text-[#0A1F44]" : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <PhaseIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider font-mono text-gray-500">
                      Phase {phase.id.replace("phase", "")}
                    </span>
                    <span className={`block text-sm lg:text-base font-bold ${isActive ? "text-white" : "text-gray-300"}`}>{phase.title.split(".")[1].trim()}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Viewer Content Panels (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#112D5E]/20 backdrop-blur-sm border border-white/10 p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden"
              >
                {/* Visual Sky Blue ambient spot in panel corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/5 rounded-bl-full -z-10"></div>

                {/* Top Badge & Duration Meter */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF]">
                      <IconComponent className="h-6 w-6 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{currentPhase.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{currentPhase.subtitle}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-[#00AEEF]/15 border border-[#00AEEF]/30 px-3.5 py-1.5 rounded-full text-[#00AEEF] text-xs sm:text-sm font-bold font-mono">
                    <Clock className="h-4 w-4" />
                    <span>{currentPhase.hours}</span>
                  </div>
                </div>

                {/* Main Goal / Description */}
                <div className="mb-8">
                  <p className="text-white text-base font-semibold leading-relaxed mb-2">훈련 중점 목표</p>
                  <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">{currentPhase.description}</p>
                </div>

                {/* Bullet details with Airline checklists feel */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-[#00AEEF] mb-4">
                    항공 세부 교육 아키텍처
                  </h4>
                  <ul className="space-y-4">
                    {currentPhase.details.map((detail, index) => (
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        key={index}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-200 text-sm sm:text-base font-sans">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
