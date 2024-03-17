'use client';

import type { SectionName } from '@/lib/types';
import {
  Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState,
} from 'react';

type ActiveSectionContextProviderProps = {
  children: ReactNode
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }:
ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={useMemo(() => ({
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }), [activeSection, timeOfLastClick])}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
  }

  return context;
}
