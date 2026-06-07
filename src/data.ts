/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CurriculumPhase, Instructor, FAQItem, EquipmentSpec } from "./types";

export const IMAGE_PATHS = {
  heroCockpit: "/src/assets/images/a320_cockpit_1780720286893.png",
  simulatorTraining: "/src/assets/images/a320_training_1780720301979.png",
  airbusCruise: "/src/assets/images/a320_landing_1780720315533.png",
};

export const VALUE_PROPOSITIONS = [
  {
    iconName: "ShieldCheck",
    title: "독보적인 안전성과 신뢰성",
    description: "국토교통부 표준 및 에어라인 수준의 고성능 안전 가이드라인을 준수하며, 완벽하게 통제된 첨단 FTD 환경에서 무사고 기록을 유지 중입니다."
  },
  {
    iconName: "Gauge",
    title: "실전 지향적 계기 및 SOP 교육",
    description: "다국적 메이저 에어라인의 Standard Operating Procedure (SOP)를 100% 동일하게 적용하여, 취업 후 기종 전환 훈련 합격률을 극대화합니다."
  },
  {
    iconName: "GraduationCap",
    title: "경쟁력 있는 에어라인 커리어 연계",
    description: "단순 비행 시간 축적을 넘어, 선후배 네트워크 및 채용 연계 정보를 공유하여 국내외 LCC 및 FSC 입사 매칭의 독보적인 디딤돌이 되어 드립니다."
  }
];

export const CURRICULUM_PHASES: CurriculumPhase[] = [
  {
    id: "phase1",
    title: "Phase 1. Ground School",
    subtitle: "에어라인 학술 및 시스템 심화",
    hours: "30 Hours",
    description: "A320 기종의 기본 계통 시스템 및 비정상 절차를 철저히 마스터하여 조종석 구성요소를 정밀하게 정복합니다.",
    details: [
      "Airbus A320 FMGS & Autoflight 시스템 정밀 이해",
      "Hydraulic, Electrical, Pneumatic 등 핵심 주요 계통 시스템 학습",
      "ECAM Handling & Abnormal / Emergency Procedures 시뮬레이션 이론",
      "항공사 실전 구술 평가 대비 및 인터뷰 맞춤형 이론 완성"
    ]
  },
  {
    id: "phase2",
    title: "Phase 2. FTD Simulator Session",
    subtitle: "SOP 확립 및 절차 정밀 마스터",
    hours: "40 Hours",
    description: "최첨단 ICAO Type V, FAA Level D 인증 FTD 기기를 활용하여 기종 전형 및 프로필 비행을 완벽한 흐름으로 체화합니다.",
    details: [
      "Normal SOP Cockpit Setup 및 Pilot Flying / Pilot Monitoring 역할 훈련",
      "기종 전형(Type Rating) 단골 기동 프로필 반복 달성 및 완벽 교정",
      "악기상 조건 하의 복행(Go-Around) 및 Windshear 대처 시나리오",
      "Multi-Crew Cooperation (MCC) 기본 훈련 및 기장-부기장 상호 협동 훈련"
    ]
  },
  {
    id: "phase3",
    title: "Phase 3. Line Oriented Flight Training",
    subtitle: "실전 노선 비행 프로필 구축",
    hours: "100+ Hours",
    description: "가상의 실제 노선 비행 시나리오(LOFT)를 수행하여 항로 비행, 의사 결정력, 현직 수준의 숙련도를 완비합니다.",
    details: [
      "인천(RKSI)-제주(RKPC), 도쿄(RJTT) 등 거점 국제 공항 가상 실제 정기 운항 프로필",
      "ATC 무선 교신 및 현지 공항 비표준 접근 절차(Non-Precision Approach)",
      "비행 시나리오별 극한 상황 대처법 및 선배 기장의 노하우 즉각 피드백",
      "실질적인 에어라인 비행 자신감 축적 및 최종 인증 로그북 발행 가능성"
    ]
  }
];

export const EQUIPMENT_DATA: EquipmentSpec = {
  title: "Airbus A320 FTD Level 5 Simulator",
  description: "ICAO Type V, FAA Level D 인증을 획득한 고정밀 플라이트 시뮬레이션 디바이스입니다. 실제 A320 조종석 하드웨어를 1:1 완벽 복제하였으며, 디테일한 비주얼 시스템을 적용하였습니다.",
  imageUrl: IMAGE_PATHS.simulatorTraining,
  specs: [
    { label: "인증 등급", value: "ICAO Type V, FAA Level D 인증" },
    { label: "비주얼 시스템", value: "HD Collimated FOV 180° x 40° 와이드 스크린" },
    { label: "조종 장치", value: "Airbus 오리지널 사이드스틱 및 Active Force Feedback 시스템" },
    { label: "데이터 베이스", value: "전 세계 10,000개 이상 국제공항 지표면 및 항로 완벽 로딩" },
    { label: "탑재 절차", value: "Abnormal 계통 고장 200여 가지 연출 기술 탑재" }
  ]
};

export const INSTRUCTORS_DATA: Instructor[] = [
  {
    name: "김성우 수석 교관",
    role: "A320 Head Flight Instructor",
    totalHours: "14,500 Hrs Class-A License",
    specialty: "전직 메이저 국적사 A320 기장 / 훈련팀 부장",
    career: []
  },
  {
    name: "이정훈 부수석 교관",
    role: "Senior Flight Instructor",
    totalHours: "11,200 Hrs Ground & Flight Master",
    specialty: "전 LCC 운항본부 기종 교수 / 심사관",
    career: []
  },
  {
    name: "박예원 전임 교관",
    role: "Line Specialist Instructor",
    totalHours: "5,400 Hrs Next-Gen Pilot Pilot",
    specialty: "에어라인 최신 운항 흐름 및 SOP 전문",
    career: []
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "타임빌딩 교육 신청을 위한 필수 기본 자격은 무엇인가요?",
    answer: "본 프로그램은 CPL(사업용 조종사 면허) 및 계기비행증명(IR), 다발 한정(Multi-Engine) 소지자를 주 타깃으로 한 프로페셔널 경력 개발 과정입니다. 단, 항공사 입사를 앞둔 예비 조종사나 자가용 면허(PPL) 소지자 중 A320 사전 적응 과정을 희망하시는 분들도 일부 맞춤형 모듈 수강이 가능합니다."
  },
  {
    id: "faq-2",
    question: "본 시뮬레이터 이용 시간이 항공사 이력서에 경력으로 기입될 수 있나요?",
    answer: "네! 당사 시뮬레이터는 ICAO Type V, FAA Level D 인증 기기로, 정해진 교육 이수 시 정식 수료증이 교부되며 에어라인 채용 지원서상 시뮬레이터 훈련 시간 및 MCC 이수 경력에 안전하게 기재 가능합니다. 국적사 공채 실기 대비에도 완벽하고 직접적인 시너지 효과를 냅니다."
  },
  {
    id: "faq-3",
    question: "비행일정이 급한데 일정을 자유롭게 할수 있나요?",
    answer: "이 프로그램은 A320 면허를 취득하고 실제 운항노선을 실습하면서 노선경험과 비행절차, 비행시간을 확보하는 프로그램입니다. 15개월 정도의 교육훈련기간이 필요한 프로그램입니다."
  },
  {
    id: "faq-4",
    question: "실제 모의 비행 중 발생할 수 있는 훈련 피드백과 모의 면접 연계가 가능한가요?",
    answer: "단지 실기 훈련에 머물지 않습니다. 매 세션 전후 1:1 심층 브리핑과 철저한 수강생 전용 오답 노트(Debriefing Sheet)가 발행되며, 정규 과정을 이수하시면 전직 기장이 직접 운영하는 '항공사 실전 모의 면접 및 CRM 훈련 1회 무상 연계' 혜택을 통해 완벽한 합격 지름길을 터 드립니다."
  },
  {
    id: "faq-5",
    question: "상담을 신청하면 비용이나 첫 방문 진단은 어떻게 진행되나요?",
    answer: "신청서 접수 즉시 담당 교관 혹은 컨설팅 팀장이 직접 연락을 드립니다. 첫 방문 진단(로그북 면접 및 합격 전략 설계)은 완전히 무료이며, 보유하신 경력을 과학적으로 정밀 분석하여 귀하만의 6개월/1년 단위 완성형 로드맵 제안서와 견적을 성실히 분석해 드립니다."
  }
];
