import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import webDevelopmentImg from '@/public/web-development.png';
import homeLibraryImg from '@/public/home-library.png';
import gymWebsiteImg from '@/public/gym-website.png';

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
      'I took programming courses for a year and studied HTML, CSS, JavaScript, TypeScript, React, Node.js',
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
    title: 'In Developing',
    description:
      'Will be added soon. The strongest project is expected. You can currently view my projects on GitHub.',
    tags: ['React', 'Next.js'],
    imageUrl: webDevelopmentImg,
    link: 'https://github.com/amberlynn364',
  },
  {
    title: 'Home Library Service',
    description:
      'REST API where Users can create, read, update, delete data about Artists, Tracks and Albums, add them to Favorites in their own Home Library!',
    tags: ['Nest.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Swagger'],
    imageUrl: homeLibraryImg,
    link: 'https://github.com/amberlynn364/nodejs2024Q1-service',
  },
  {
    title: 'Gym Website',
    description:
      'Immerse yourself in fitness excellence with React-hooks powered Gym Website.',
    tags: ['React', 'Framer motion', 'Responsive Design', 'Counting Numbers', 'Auto Scroll'],
    imageUrl: gymWebsiteImg,
    link: 'https://gym-website-amberlynn364.netlify.app/',
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
  'Docker',
  'PostgreSQL',
  'Prisma',
  'CSS-modules',
  'Tailwind CSS',
  'BEM',
  'Rest API',
  'Git',
] as const;
