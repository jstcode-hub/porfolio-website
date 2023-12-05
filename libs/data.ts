import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { GrAchievement } from 'react-icons/gr';
import Axifiveth from '@/public/Axifiveth.png';
import Aximart from '@/public/Aximart.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: '2nd place in web design programming competition',
    location: 'Universitas Muhammadiyah Sidoarjo',
    description: '',
    icon: React.createElement(GrAchievement),
    date: '2023',
  },
  {
    title: 'Graduated from SMK Krian 1',
    location: 'Sidoarjo, Jawa Timur',
    description: 'I graduated from the software enginnering department with many achievements, such as second place in web design programming at the national level',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Studying at UPN "Veteran" Jawa Timur',
    location: 'Surabaya, Jawa Timur',
    description: 'Now i am studying in the informatics study program',
    icon: React.createElement(LuGraduationCap),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Axifiveth',
    description: 'Axifiveth is an interactive website like Twitter. Developed with nextjs technology and also firebase.',
    tags: ['React', 'Next.js', 'Tailwind', 'Redux', 'Firebase'],
    imageUrl: Axifiveth,
    link: 'https://axifiveth.vercel.app/',
  },
  {
    title: 'Aximart',
    description: 'Aximart is a buying and selling website developed to fulfill school assignments.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: Aximart,
    link: 'https://aximart.vercel.app/',
  },
] as const;

export const skillsData = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Git', 'Tailwind', 'Prisma', 'MongoDB', 'Redux', 'Express', 'Java', 'Firebase', 'Python'] as const;
