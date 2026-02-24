import React from 'react';
import { FaUsers, FaFemale, FaLeaf, FaStethoscope, FaUserFriends, FaExchangeAlt } from 'react-icons/fa';

export const programsData = [
  {
    icon: <FaUsers />,
    title: "Education for Children & Youth",
    description: "Supporting rural and village students with learning activities, free classes and confidence-building programs.",
    link: "/programs#education",
    image: "/raw images/rawimg1.jpg",
    focusAreas: ['Teaching support', 'Creative learning', 'Career guidance']
  },
  {
    icon: <FaFemale />,
    title: "Women Empowerment",
    description: "Enabling financial independence through vocational skills, self-employment mentorship, and financial literacy.",
    link: "/programs#women-empowerment",
    image: "/raw images/rawimg11.jpg",
    focusAreas: ['Leadership & confidence building', 'Awareness sessions', 'Skill development']
  },
  {
    icon: <FaUserFriends />,
    title: "Youth & Leadership Development",
    description: "Mentoring young individuals to become future leaders through workshops on communication, teamwork, and problem-solving.",
    link: "/programs#youth-leadership",
    image: "/raw images/rawimg6.jpg",
    focusAreas: ['Leadership training', 'Soft skills development', 'Community projects']
  },
  {
    icon: <FaLeaf />,
    title: "Cleanliness & Environment",
    description: "Conducting village/town cleaning drives, tourist site awareness, and waste management camps.",
    link: "/programs#clean-country",
    image: "/raw images/rawimg7.jpg",
    focusAreas: ['Clean drives', 'Tree plantation', 'Awareness campaigns']
  },
  {
    icon: <FaStethoscope />,
    title: "Health & Awareness Camps",
    description: "Providing free medical checkups, hygiene awareness, and rural outreach for essential healthcare.",
    link: "/programs#health",
    image: "/raw images/rawimg3.jpg",
    focusAreas: ['Health camps', 'Mental well-being', 'Hygiene awareness']
  },
  {
    icon: <FaExchangeAlt />,
    title: "Volunteer Exchange Program",
    description: "A unique opportunity for individuals to stay, serve the community, and earn a certificate of social impact.",
    link: "/free-stay",
    image: "/raw images/rawimg9.jpg",
    focusAreas: ['Cultural exchange', 'Community service', 'Personal growth']
  }
];
