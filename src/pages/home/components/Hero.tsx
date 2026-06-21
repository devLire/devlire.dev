import { CustomCard } from '@/components/CustomCard';
import { SectionLayout } from '@/components/SectionLayout';
import { SectionTitle } from '@/components/SectionTitle';
import { handleContactClick } from '@/handlers/handleContactClick';
import { useHoverScaleAnimation } from '@/hooks/useHoverScaleAnimation';
import { cn } from '@/lib/utils';
import type { BaseSectionProps } from '@/types';

interface Props extends BaseSectionProps {
  openToWork: boolean;
}

export const Hero = ({ id, openToWork }: Props) => {
  const { isScaled, handleMouseEnter, handleMouseLeave } =
    useHoverScaleAnimation();

  return (
    <SectionLayout id={id}>
      <CustomCard
        className={cn(
          'flex w-full max-w-xl flex-col px-6 py-8 text-center transition-transform duration-500 hover:scale-105 md:max-w-2xl md:px-12 md:py-10',
          isScaled && 'scale-105'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid gap-4 font-medium text-white lg:p-8">
          <div>
            <h1 className="mb-2 text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              DESARROLLADOR WEB & MOBILE
            </h1>
            <SectionTitle text="Hola, soy Baruc" />
          </div>
          <p className="font-red-hat-display mx-auto max-w-lg text-base leading-relaxed text-gray-300 md:text-2xl">
            Desarrollador{' '}
            <span className="font-medium text-emerald-500">Frontend</span>{' '}
            enfocado en construir aplicaciones web y móviles{' '}
            <span className="font-medium text-emerald-500">eficientes, </span>
            <span className="font-medium text-emerald-500">escalables</span> y
            con excelente{' '}
            <span className="font-medium text-emerald-500">
              experiencia de usuario
            </span>
            .
          </p>
          {openToWork && (
            <CustomCard
              className="status-badge mx-auto cursor-pointer border border-transparent bg-black shadow-[0_0_15px_rgba(16,185,129,0.1)]"
              onClick={handleContactClick}
            >
              <p className="rounded-md px-3 py-2 font-medium text-white">
                Disponible para trabajar
              </p>
            </CustomCard>
          )}
        </div>
      </CustomCard>
    </SectionLayout>
  );
};
