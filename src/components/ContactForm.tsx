/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Clock, ExternalLink, ClipboardCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  // ==========================================
  // [여기에 구글폼 링크를 삽입해주세요]
  // 아래 주소값 대신 실제 운용하시는 구글 설문지 링크를 넣어주시면 바로 연동됩니다.
  // ==========================================
  const GOOGLE_FORM_URL: string = "https://forms.gle/KrG2mc7sdVay6BG37";

  const [showAlert, setShowAlert] = useState(false);

  const handleFormClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (GOOGLE_FORM_URL === "" || GOOGLE_FORM_URL.includes("https://forms.gle/KrG2mc7sdVay6BG37")) {
      e.preventDefault();
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-[#0A1F44] relative overflow-hidden text-white">
      {/* Dynamic Runway light vector */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Counseling briefing panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[#00AEEF] text-xs font-bold uppercase tracking-widest font-mono mb-3"
              >
                MISSION BRIEFING & COUNSEL
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: [30, 0] }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
              >
                에어라인 합격의 로드맵, <br />
                지금 설계하십시오.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base"
            >
              간편한 구글 설문 상담 신청을 접수해 주시면 수석 교관팀이 24시간 이내에 직접 로그북 진단과 함께 에어라인 지원 타겟 기종 경력 빌딩 견적을 무상 제공해 드립니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 bg-gradient-to-r from-[#00AEEF]/10 to-transparent border-l-4 border-[#00AEEF] rounded-r-xl"
            >
              <h4 className="text-sm font-bold text-white mb-1.5 font-mono uppercase tracking-wider">A320 OR B737-800 SELECTIVE PROGRAM</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                본 프로그램은 <strong>A320</strong> 또는 <strong>B737-800</strong> 2개의 타입 레이팅(Type Rating) 면허 기종 중 1:1 정밀 심층 상담을 거쳐 최적의 타겟을 선택하여 입과하는 과정입니다.
              </p>
            </motion.div>

            {/* Quick contact tokens */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00AEEF] shrink-0 mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">DIRECT INQUIRY</p>
                  <p className="text-sm font-semibold text-white">82-10-3962-7856</p>
                  <p className="text-xs text-slate-400 font-sans mt-1.5 leading-relaxed">
                    상담 신청을 먼저 이용해주시고, 간편한 문의는 문자메시지 남겨주시면 신속히 응대 드리겠습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00AEEF]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">OFFICIAL MAILBOX</p>
                  <p className="text-sm font-semibold text-white">skykingalamo@naver.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00AEEF]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono">PREMIUM DESK SERVICE</p>
                  <p className="text-sm font-semibold text-white">365일 연중무휴 (09:00 - 23:00 예약제)</p>
                </div>
              </div>
            </div>

            {/* Graphic disclaimer card */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                🔒 **개인 신뢰 안심 보장**: 작성해주신 귀중한 조종 경력 및 인적 데이터는 구글폼을 통해 안전하게 암호화되어 전송되며, 교육 배정 목적 이외에 일절 보관, 누출되지 않는 안심 보안 규약을 충실히 이행합니다.
              </p>
            </div>
          </div>

          {/* Right Side: Google Form Call to Action Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#112D5E] border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl relative"
          >
            {/* Corner glowing strip */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00AEEF]/10 rounded-bl-full -z-10"></div>

            <h3 className="text-xl font-bold uppercase tracking-wider font-mono text-[#00AEEF] mb-6 flex items-center space-x-2">
              <ClipboardCheck className="h-5 w-5 animate-pulse text-[#00AEEF]" />
              <span>TIME BUILDING 1:1 상담 신청</span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-sans mb-8">
              당사 대표 교육위원진과 진행하는 맞춤 면허 상담 및 시간 빌딩 과정 매치업 분석을 위해 아래 버튼을 클릭하여 공식 구글 설문지에 핵심 세부 항목을 작성해 주십시오. 
            </p>

            {/* High-quality Step representation before redirecting */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#0A1F44]/50 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center font-mono text-xs font-bold shrink-0">1</div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">인적 사양 및 면허 세부사항 입력</h4>
                  <p className="text-xs text-gray-400">닉네임, 이메일, 휴대전화 번호, CPL 취득 연도 및 총 비행경력 작성</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#0A1F44]/50 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center font-mono text-xs font-bold shrink-0">2</div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">우선 기종 선호도 선택</h4>
                  <p className="text-xs text-gray-400">A320, B737-800 또는 정밀 상담 후 결정 선택지 표기</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-[#0A1F44]/50 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center font-mono text-xs font-bold shrink-0">3</div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">입과 가능 예정 일정 조율</h4>
                  <p className="text-xs text-gray-400">희망하시는 입과 주기 및 시뮬레이션 매치 시기 선점 리포팅</p>
                </div>
              </div>
            </div>

            {/* Submission Alerts */}
            {showAlert && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs leading-relaxed mb-6 flex items-start space-x-2"
              >
                <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong>[개발자 안내 메세지]</strong> 
                  <p className="mt-1">코드를 편집하여 <code>GOOGLE_FORM_URL</code> 상수를 실제 구글 설문지 주소로 교체해 주십시오.</p>
                  <p className="text-gray-400 mt-1">예시: <code>const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/..."</code></p>
                </div>
              </motion.div>
            )}

            {/* Giant Google Form CTA Button */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFormClick}
              className="w-full py-4.5 rounded-xl font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center bg-[#00AEEF] text-[#0A1F44] hover:bg-white hover:shadow-[0_0_20px_#00AEEF] cursor-pointer text-center text-sm"
              id="google-form-cta-link"
            >
              <ExternalLink className="h-5 w-5 mr-2 animate-pulse" />
              <span>구글 설문 상담 신청서 작성하기</span>
            </a>

            <div className="mt-5 text-center">
              <span className="text-[11px] text-gray-400 flex items-center justify-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 inline" />
                간편하고 엄격한 개인정보 암호화 수송 보안 제공
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
