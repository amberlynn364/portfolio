'use client';

import { projectsData } from '@/lib/data';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Project from './Project';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SectionHeading>My projects</SectionHeading>
      </motion.div>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}