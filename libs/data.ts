import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import Axifiveth from '@/public/Axifiveth.png';

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
    title: 'Graduated Krian 1 Vocational High School',
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
    description: 'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'Next.js', 'Tailwind', 'Redux', 'Firebase'],
    imageUrl: Axifiveth,
  },
  {
    title: 'Aximart',
    description: 'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: Axifiveth,
  },
] as const;

export const skillsData = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Git', 'Tailwind', 'Prisma', 'MongoDB', 'Redux', 'Express', 'Java', 'Firebase'] as const;
