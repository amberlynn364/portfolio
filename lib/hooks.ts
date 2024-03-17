import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

// eslint-disable-next-line import/prefer-default-export
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection(sectionName);
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);

  return {
    ref,
  };
}
