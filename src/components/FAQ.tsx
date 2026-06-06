/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function FAQ() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#0A1F44] relative overflow-hidden">
      {/* Dynamic Grid Background Overlay Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00AEEF07_1px,transparent_1px),linear-gradient(to_bottom,#00AEEF07_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-[#00AEEF] uppercase tracking-widest font-mono mb-3"
          >
            FAQ & TROUBLESHOOTING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: [40, 0] }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            자주 묻는 질문
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
            className="text-base text-slate-300 font-sans"
          >
            A320 타임빌딩 경력 이수 과정과 실질적인 활용 방식에 대해 예비 항공사 조종사 분들이 가장 많이 궁금해 하시는 리스트를 시원하게 정리해 드립니다.
          </motion.p>
        </div>

        {/* Accordion List Container */}
        <div id="faq-accordion-group" className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-[#112D5E] border-[#00AEEF]/50 shadow-lg shadow-[#00AEEF]/5"
                    : "bg-[#112D5E]/20 hover:bg-[#112D5E]/30 border-white/10"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  id={`faq-btn-${faq.id}`}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start space-x-3 pr-4">
                    <HelpCircle
                      className={`h-5 w-5 shrink-0 mt-0.5 ${isOpen ? "text-[#00AEEF]" : "text-slate-400"}`}
                    />
                    <span
                      className="text-sm sm:text-base font-bold tracking-tight text-white"
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-slate-400">
                    <ChevronDown className={`h-5 w-5 ${isOpen ? "text-[#00AEEF]" : "text-slate-400"}`} />
                  </motion.div>
                </button>

                {/* Accordion Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-white/5 font-sans">
                        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
