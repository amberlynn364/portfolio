'use client';

import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { Fragment } from 'react';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  return (
    <section ref={ref} id="experience">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map(({
            title, learning, description, date, icon,
          }, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: '#f3f4f6',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: '0.4rem solid #9ca3af',
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: 'white',
                  fontSize: '1.5rem',
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="font-normal !mt-0">{learning}</p>
                <p className="!mt-1 !font-normal text-gray-700">{description}</p>
              </VerticalTimelineElement>
            </Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  );
}
