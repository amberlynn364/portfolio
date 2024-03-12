'use client';

import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having received my education in
        {' '}
        <span className="font-medium">environmental engineering</span>
        , decided to continue my education in the field of programming.
        I started learning programming from technical books, then took coding classes and learned
        {' '}
        <span className="font-medium">front-end development</span>
        .
        {' '}
        <span className="italic">My favorite part of programming</span>
        {' '}
        is enjoying the results and writing concise code. I
        {' '}
        <span className="underline">love</span>
        {' '}
        the
        feeling of having found a solution to a problem. My core stack
        is
        {' '}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a
        {' '}
        <span className="font-medium">full-time position</span>
        {' '}
        as a front-end
        developer.
      </p>
    </motion.section>
  );
}
