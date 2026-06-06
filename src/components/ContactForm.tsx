/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, X, ClipboardCheck, Phone, Mail, Clock } from "lucide-react";
import { ContactSubmitData } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactSubmitData>({
    nickname: "",
    phone: "",
    email: "",
    cplYear: "",
    totalFlightHours: "",
    availablePeriods: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedNickname, setSubmittedNickname] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePeriodToggle = (period: string) => {
    setFormData((prev) => {
      const exists = prev.availablePeriods.includes(period);
      if (exists) {
        return {
          ...prev,
          availablePeriods: prev.availablePeriods.filter((p) => p !== period),
        };
      } else {
        return {
          ...prev,
          availablePeriods: [...prev.availablePeriods, period],
        };
      }
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !formData.nickname ||
      !formData.phone ||
      !formData.email ||
      !formData.cplYear ||
      !formData.totalFlightHours ||
      formData.availablePeriods.length === 0
    ) {
      alert("닉네임, 휴대번호, 이메일, CPL 취득연도, 총비행시간, 입과가능한시기는 필수 입력 사항입니다.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("✈️ [A320 TIME BUILDING] NEW CONSULTATION APP RECEIVED ✈️", formData);
      setSubmittedNickname(formData.nickname);
      setIsSubmitting(false);
      setShowSuccessModal(true);

      // Reset Form State
      setFormData({
        nickname: "",
        phone: "",
        email: "",
        cplYear: "",
        totalFlightHours: "",
        availablePeriods: [],
      });
    }, 1500);
  };

  return (
    <section id="contact-form" className="py-24 bg-[#0A1F44] relative overflow-hidden text-white">
      {/* Dynamic Runway runway light vectors */}
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
              닉네임과 연락처, 조종 이력을 접수해 주시면 수석 교관팀이 24시간 이내에 직접 로그북 진단과 함께 에어라인 지원 타겟 기종 경력 빌딩 견적서를 무상 제공해 드립니다.
            </motion.p>

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
                    상담신청서를 우선 이용해주시고, 급한내용은 문자메시지 남기시면 바로 연락드리겠습니다.
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
                🔒 **개인 신뢰 안심 보장**: 작성해주신 귀중한 조종 경력 및 인적 데이터는 항공 승무 교육 배정 목적 이외에 일절 보관, 누출되지 않으며 국토교통부 표준 규약을 충실히 이행합니다.
              </p>
            </div>
          </div>

          {/* Right Side: Professional Glassmorphic Contact Form (7 Cols) */}
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
              <ClipboardCheck className="h-5 w-5 animate-bounce" />
              <span>Time Building 상담신청서</span>
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nickname */}
                <div>
                  <label htmlFor="nickname-input" className="block text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-2">
                    닉네임 <span className="text-[#00AEEF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="nickname-input"
                    name="nickname"
                    required
                    value={formData.nickname}
                    onChange={handleInputChange}
                    placeholder="조종사 닉네임"
                    className="w-full bg-[#0A1F44] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all font-sans"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone-input" className="block text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-2">
                    휴대번호 <span className="text-[#00AEEF]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone-input"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="010-1234-5678"
                    className="w-full bg-[#0A1F44] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email-input" className="block text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-2">
                    이메일 <span className="text-[#00AEEF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@pilot.com"
                    className="w-full bg-[#0A1F44] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all font-mono"
                  />
                </div>

                {/* CPL Year */}
                <div>
                  <label htmlFor="cpl-year-input" className="block text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-2">
                    CPL 취득연도 <span className="text-[#00AEEF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="cpl-year-input"
                    name="cplYear"
                    required
                    value={formData.cplYear}
                    onChange={handleInputChange}
                    placeholder="예: 2024년 (또는 취득 예정)"
                    className="w-full bg-[#0A1F44] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all font-sans"
                  />
                </div>
              </div>

              {/* Total Flight Hours */}
              <div>
                <label htmlFor="total-flight-hours-input" className="block text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-2">
                  총비행시간 <span className="text-[#00AEEF]">*</span>
                </label>
                <input
                  type="text"
                  id="total-flight-hours-input"
                  name="totalFlightHours"
                  required
                  value={formData.totalFlightHours}
                  onChange={handleInputChange}
                  placeholder="예: 250시간"
                  className="w-full bg-[#0A1F44] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all font-sans"
                />
              </div>

              {/* Available Periods */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-3">
                  입과가능한시기 (중복 선택 가능) <span className="text-[#00AEEF]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["2026년 9월", "2026년 12월", "2027년 3월"].map((period) => {
                    const isSelected = formData.availablePeriods.includes(period);
                    return (
                      <button
                        key={period}
                        type="button"
                        onClick={() => handlePeriodToggle(period)}
                        className={`flex items-center justify-between p-3.5 rounded-lg border text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#00AEEF]/20 border-[#00AEEF] text-white shadow-[0_0_10px_rgba(0,174,239,0.15)]"
                            : "bg-[#0A1F44] border-white/10 text-gray-400 hover:border-[#00AEEF]/40 hover:text-white"
                        }`}
                      >
                        <span>{period}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                            isSelected
                              ? "bg-[#00AEEF] border-[#00AEEF] text-[#0A1F44]"
                              : "border-gray-500 bg-transparent"
                          }`}
                        >
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 fill-current stroke-current" viewBox="0 0 24 24" strokeWidth="3">
                              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                id="submit-form-btn"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-[#00AEEF] text-[#0A1F44] hover:bg-white hover:shadow-[0_0_15px_#00AEEF]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0A1F44]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>상담 신청서 전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 transform -rotate-45" />
                    <span>상담신청하기</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal Dialogue (Dialog) with Framer Motion backdrop and entry bounce */}
      <AnimatePresence>
        {showSuccessModal && (
          <div id="success-dialog-overlay" className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-[#0A1F44]/90 backdrop-blur-sm"
            ></motion.div>

            {/* Window Card Frame */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#0A1F44] text-white max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl relative z-10 p-8 border border-[#00AEEF]/20"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex flex-col items-center text-center mt-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mb-6 border-4 border-emerald-500/5">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-widest font-mono text-[#00AEEF] mb-2">
                  CONSULTATION REQUEST SUCCESS
                </span>
                <h4 className="text-2xl font-extrabold mb-4 text-white">상담신청이 되었습니다.</h4>
                <p className="text-lg font-bold text-emerald-400 mb-4">순차적으로 상담드리겠습니다.</p>

                <div className="w-full bg-[#112D5E]/30 border border-white/10 p-5 rounded-xl mb-6 text-left space-y-3">
                  <p className="text-sm font-sans text-slate-200">
                    반갑습니다, <strong>{submittedNickname}</strong> 조종사님!
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    신청하신 Time Building 예비 과정 분석 및 담당 CAPT 배정이 진행됩니다. 
                    입과 기간 매치 분석 완료 후 기재해주신 연락처로 <strong>신속하게</strong> 가이드 연락을 드리겠습니다.
                  </p>
                </div>

                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="px-6 py-3 bg-[#00AEEF] text-[#0A1F44] hover:bg-white hover:text-[#0A1F44] hover:shadow-[0_0_15px_#00AEEF] font-bold text-sm rounded-lg transition-all shadow-md w-full cursor-pointer tracking-wider"
                >
                  기장석 브리핑 룸으로 복귀
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
