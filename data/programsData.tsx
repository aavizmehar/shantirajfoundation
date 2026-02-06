import React from 'react';
import { FaGraduationCap, FaFemale, FaLeaf, FaStethoscope } from 'react-icons/fa';

export const programsData = [
  {
    icon: <FaGraduationCap />,
    title: "Education for Children & Youth",
    description: "Supporting rural students with free tuitions, smart learning workshops, digital literacy, and scholarship support.",
    link: "/programs#education",
    focusAreas: ['Teaching support', 'Creative learning', 'Career guidance']
  },
  {
    icon: <FaFemale />,
    title: "Women Empowerment",
    description: "Enabling financial independence through vocational skills, self-employment mentorship, and financial literacy.",
    link: "/programs#women-empowerment",
    focusAreas: ['Leadership & confidence building', 'Awareness sessions', 'Skill development']
  },
  {
    icon: <FaLeaf />,
    title: "Cleanliness & Environment",
    description: "Conducting village/town cleaning drives, tourist site awareness, and waste management camps.",
    link: "/programs#clean-country",
    focusAreas: ['Clean drives', 'Tree plantation', 'Awareness campaigns']
  },
  {
    icon: <FaStethoscope />,
    title: "Health & Awareness Camps",
    description: "Providing free medical checkups, hygiene awareness, and rural outreach for essential healthcare.",
    link: "/programs#health",
    focusAreas: ['Health camps', 'Mental well-being', 'Hygiene awareness']
  }
];
