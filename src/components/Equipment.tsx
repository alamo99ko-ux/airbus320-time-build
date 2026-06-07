/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Cpu, Check, Award, Eye, ShieldCheck, Gauge } from "lucide-react";
import { EQUIPMENT_DATA } from "../data";

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-[#0A1F44] relative overflow-hidden">
      {/* Absolute design grid block */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#112D5E]/10 -z-10 [mask-image:linear-gradient(to_left,rgba(0,174,239,0.1),transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Cinematic Facility Picture Frame (5 Cols on Large) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Soft sky-blue layout backdrop shadow glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00AEEF] to-[#0A1F44] opacity-10 rounded-3xl blur-2xl -z-10"></div>

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative group">
              <img
                src={EQUIPMENT_DATA.imageUrl}
                alt="Airbus A320 High-tech Simulator Interior"
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A1F44]/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest font-mono">FTD DEVICE STATUS</p>
                  <p className="text-[#00AEEF] text-xs font-semibold font-mono">● LIVE RUNNING / CALIBRATED</p>
                </div>
                <div className="p-2 bg-[#00AEEF]/20 text-[#00AEEF] rounded-lg">
                  <Cpu className="h-4 w-4 animate-spin" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Specifications Deck (7 Cols on Large) */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold text-[#00AEEF] uppercase tracking-widest font-mono mb-3"
            >
              PREMIUM TRAINING FACILITIES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6"
            >
              ICAO Type V, FAA Level D 인증 <br />
              <span className="text-[#00AEEF]">{EQUIPMENT_DATA.title}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base mb-8"
            >
              {EQUIPMENT_DATA.description}
            </motion.p>

            {/* Structured specs block table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="border border-white/10 rounded-xl overflow-hidden divide-y divide-white/5 shadow-md"
            >
              {EQUIPMENT_DATA.specs.map((spec, specIdx) => (
                <div key={specIdx} className="grid grid-cols-3 p-4 bg-[#112D5E]/20 hover:bg-[#112D5E]/35 transition-colors items-center">
                  <div className="col-span-1 text-sm font-bold text-white pr-4">{spec.label}</div>
                  <div className="col-span-2 text-sm text-slate-300 font-sans flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00AEEF] shrink-0" />
                    <span>{spec.value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl border border-[#00AEEF]/20 bg-[#112D5E]/40 flex items-center space-x-3">
                <Award className="h-6 w-6 text-[#00AEEF] shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-mono tracking-wider">CERTIFICATE</p>
                  <p className="text-sm font-bold text-white leading-tight">ICAO Type V, FAA Level D</p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-[#112D5E]/40 flex items-center space-x-3">
                <Eye className="h-6 w-6 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-mono tracking-wider">VISUAL DEGREE</p>
                  <p className="text-sm font-bold text-white leading-tight">180° 와이드 뷰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
