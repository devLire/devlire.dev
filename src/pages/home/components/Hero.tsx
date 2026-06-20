import { CustomCard } from '@/components/CustomCard';
import { handleContactClick } from '@/handlers/handleContactClick';

interface Props {
  id?: string;
  openToWork: boolean;
}

export const Hero = ({ id, openToWork }: Props) => {
  return (
    <section
      className="relative flex w-full scroll-mt-20 items-center justify-center overflow-hidden py-20 text-white md:py-12 2xl:py-32"
      id={id}
    >
      <div className="relative z-10 container mx-auto px-4 lg:px-12">
        <div className="flex justify-center">
          <CustomCard className="flex max-w-xl flex-col px-6 py-8 text-center md:max-w-2xl md:px-12 md:py-10">
            <div className="grid gap-4 font-medium text-white lg:p-8">
              <div>
                <h1 className="mb-2 text-sm font-semibold tracking-wider text-emerald-400 uppercase">
                  DESARROLLADOR WEB & MOBILE
                </h1>
                <h2 className="font-red-hat-display text-4xl font-bold tracking-tight text-white lg:text-6xl">
                  Hola, soy Baruc
                </h2>
              </div>
              <p className="font-red-hat-display mx-auto max-w-lg text-base leading-relaxed text-gray-300 md:text-2xl">
                Desarrollador{' '}
                <span className="font-medium text-emerald-500">Frontend</span>{' '}
                enfocado en construir aplicaciones web y móviles{' '}
                <span className="font-medium text-emerald-500">
                  eficientes,{' '}
                </span>
                <span className="font-medium text-emerald-500">escalables</span>{' '}
                y con excelente{' '}
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
        </div>
      </div>
    </section>
  );
};
