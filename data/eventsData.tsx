import React from 'react';
import { FaCalendarAlt, FaLaptop, FaRecycle, FaCampground } from 'react-icons/fa';

export const eventsData = [
  {
    id: 1,
    title: "Vipasana Model Retreat",
    date: "Oct 15, 2024",
    location: "Kasol HQ, Himachal Pradesh",
    description: "A 3-day guided silent meditation session focused on mental clarity and inner peace, inspired by Vipassana.",
    icon: <FaCalendarAlt />
  },
  {
    id: 2,
    title: "Skill Development Workshop",
    date: "Oct 22, 2024",
    location: "New Delhi Branch",
    description: "Empowering youth with digital literacy, computer skills, and internet safety tools.",
    icon: <FaLaptop />
  },
  {
    id: 3,
    title: "Clean Himalayas Drive",
    date: "Nov 02, 2024",
    location: "Parvati Valley",
    description: "Join our massive plastic collection and disposal drive to keep the mountains pristine.",
    icon: <FaRecycle />
  },
  {
    id: 4,
    title: "Youth Leadership Camp",
    date: "Dec 10-15, 2024",
    location: "Kasol Center",
    description: "A 5-day residential camp for students focusing on leadership, adventure, and community service.",
    icon: <FaCampground />
  }
];
