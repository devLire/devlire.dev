import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  text: string;
  icon?: LucideIcon;
  className?: string;
}

export const SectionTitle = ({ text, icon: Icon, className }: Props) => {
  return (
    <h2
      className={cn(
        'font-red-hat-display w-full text-center text-4xl font-bold tracking-tight text-balance text-white lg:text-6xl',
        className
      )}
    >
      {Icon && (
        <Icon className="mr-3 inline-block size-[1em] translate-y-[-0.05em]" />
      )}
      {text}
    </h2>
  );
};
