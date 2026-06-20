import { cn } from '@/lib/utils';
import type React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CustomCard = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'w-max rounded-3xl border border-white/10 shadow-2xl',
        'bg-[#0a0a0a]/60',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
