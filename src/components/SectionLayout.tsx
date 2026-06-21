import { cn } from '@/lib/utils';

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionLayout = ({ id, children, className }: Props) => {
  return (
    <section
      className={cn(
        'relative flex w-full scroll-mt-20 items-center justify-center overflow-hidden py-20 text-white md:py-12 2xl:py-32',
        className
      )}
      id={id}
    >
      <div className="relative z-10 container mx-auto px-4 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-10">
          {children}
        </div>
      </div>
    </section>
  );
};
