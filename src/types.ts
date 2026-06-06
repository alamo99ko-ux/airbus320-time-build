/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CurriculumPhase {
  id: string;
  title: string;
  subtitle: string;
  hours: string;
  description: string;
  details: string[];
}

export interface Instructor {
  name: string;
  role: string;
  totalHours: string;
  career: string[];
  avatarUrl?: string;
  specialty: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EquipmentSpec {
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  imageUrl: string;
}

export interface ContactSubmitData {
  nickname: string;
  phone: string;
  email: string;
  cplYear: string;
  totalFlightHours: string;
  availablePeriods: string[];
  aircraftPreference: string;
}
