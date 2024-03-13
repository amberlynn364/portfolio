import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

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
    title: 'Self Studying',
    learning: 'Technical literature',
    description:
      'I studied books like "JavaScript - The Definitive Guide, 7th Edition" by David Flanagan and "Learning React", 2nd Edition by Alex Banks, Eve Porcello',
    icon: React.createElement(LuGraduationCap),
    date: '2022',
  },
  {
    title: 'Road to Front-End Developer',
    learning: 'Programming courses',
    description:
      'I took programming courses for a year and studied HTML, CSS, JavaScript, TypeScript, React',
    icon: React.createElement(LuGraduationCap),
    date: '2023 - 2024',
  },
  {
    title: 'Front-End Developer',
    learning: 'Work on yourself',
    description:
      "I'm now a front-end developer and I'm working on new projects and trying to become better. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Node.js',
  'Nest.js',
  'CSS-modules',
  'Tailwind',
  'Rest API',
  'Git',
  'Prisma',
  'PostgreSQL',
  'Framer Motion',
  'Figma',
] as const;
