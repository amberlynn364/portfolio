'use client';

import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { Fragment } from 'react';
import { useTheme } from '@/context/ThemeContextProvider';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map(({
            title, learning, description, date, icon,
          }, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: theme === 'light'
                    ? '#f3f4f6'
                    : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="font-normal !mt-0">{learning}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{description}</p>
              </VerticalTimelineElement>
            </Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  );
}
