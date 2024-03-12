'use client';

import { projectsData } from '@/lib/data';
import { Fragment } from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';
import Project from './Project';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
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
