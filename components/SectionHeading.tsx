import { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>
  );
}
