/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plane, Shield, Navigation, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05132B] border-t border-white/5 text-gray-400 py-16 sm:py-20 relative overflow-hidden">
      {/* Visual background atmospheric elements info */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00AEEF]/5 rounded-tl-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          {/* Logo, title and description (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={handleScrollToTop}>
              <div className="p-2 bg-[#00AEEF]/10 rounded-lg group-hover:bg-[#00AEEF]/20 transition-all duration-300">
                <Plane className="h-5 w-5 text-[#00AEEF] transform -rotate-45" />
              </div>
              <span className="text-base sm:text-lg font-bold text-white tracking-widest uppercase">
                타임빌딩 <span className="text-[#00AEEF]">아카데미</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm font-sans">
              에어라인 입사와 실기 평정의 격을 높이는 Airbus A320 및 Boeing B737-800 FTD 모의비행 경력 구축 전문 기관. 현직 최고의 기장진의 SOP 정교 훈련을 제공받으십시오.
            </p>
          </div>

          {/* Quick legal links & accreditation (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">AUTHORIZED ACCREDITATION</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-2 text-gray-400">
                <Shield className="h-4 w-4 text-[#00AEEF]" />
                <span>ICAO Level D 및 FAA 5등급 이상 인증 교육</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Navigation className="h-4 w-4 text-[#00AEEF]" />
                <span>SOP Airbus 100% 동기화 교정</span>
              </li>
            </ul>
          </div>

          {/* Core Contacts directly displayed as requested (4 Cols) */}
          <div className="md:col-span-4 space-y-4 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">OFFICE DESK CONNECTIONS</h4>
            <div className="space-y-3">
              <a
                href="tel:82-10-3962-7856"
                className="flex items-center space-x-2.5 text-gray-300 hover:text-[#00AEEF] transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#00AEEF]" />
                <span>Phone: +82-10-3962-7856</span>
              </a>
              <a
                href="mailto:skykingalamo@naver.com"
                className="flex items-center space-x-2.5 text-gray-300 hover:text-[#00AEEF] transition-colors break-all"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#00AEEF]" />
                <span>Email: skykingalamo@naver.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Corporate bottom declarations */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] gap-4 font-sans text-gray-500">
          <div className="space-y-1.5 text-center sm:text-left leading-relaxed">
            <p className="font-bold">타임빌딩 아카데미 (상호: TIME BUILDING ACADEMY)</p>
            <p>
              사업자등록번호: 546-81-00499 | 통신판매업신고: 제 2017-경기부천-1197호
            </p>
            <p>주소: 인천 부평구 수변로 115, 305호</p>
          </div>
          <div className="text-center sm:text-right font-mono space-y-2 shrink-0">
            <p>© {currentYear} TIME BUILDING ACADEMY. ALL RIGHTS RESERVED.</p>
            <p className="text-[9px] text-[#00AEEF]/60 flex items-center justify-center sm:justify-end gap-1 font-sans">
              <span>Crafted for Aviators standard protocol</span>
              <ExternalLink className="h-3 w-3" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
