/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Gauge, GraduationCap } from "lucide-react";
import { VALUE_PROPOSITIONS } from "../data";

const iconMap: { [key: string]: ComponentType<{ className?: string }> } = {
  ShieldCheck: ShieldCheck,
  Gauge: Gauge,
  GraduationCap: GraduationCap,
};

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="py-24 bg-[#0A1F44] relative overflow-hidden">
      {/* Decorative Grid Mesh in background (Aero Minimalist texture) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00AEEF0b_1px,transparent_1px),linear-gradient(to_bottom,#00AEEF0b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Indicator */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-[#00AEEF] uppercase tracking-widest font-mono mb-3"
          >
            OUR PLATFORM VALUES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: [40, 0] }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            왜 터보팬 항공기 Time Building 코스여야 하는가?
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
            className="text-base sm:text-lg text-slate-300 font-sans"
          >
            단순히 로그북에 채워 넣을 형식적인 디지털 시간 채우기 방식은 잊으십시오.<br className="hidden sm:inline" />
            우리는 에어라인 합격을 정조준한 정밀 비행 표준 가이드라인을 제공합니다.
          </motion.p>
        </div>

        {/* 3 Column Grid with hover state and scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const IconComponent = iconMap[prop.iconName] || ShieldCheck;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                id={`value-card-${idx}`}
                className="bg-[#112D5E]/40 backdrop-blur-sm border border-white/10 p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-[#00AEEF]/10 hover:border-[#00AEEF]/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Accent top glowing strip */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-[#00AEEF]/15 flex items-center justify-center text-[#00AEEF] mb-6 group-hover:bg-[#00AEEF] group-hover:text-[#0A1F44] transition-all duration-300">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00AEEF] transition-colors duration-200">
                    {prop.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm lg:text-base font-sans">
                    {prop.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#00AEEF] font-semibold tracking-wider uppercase font-mono group-hover:translate-x-1 transition-transform">
                  <span>AIRLINE STANDARD APPROVED</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
