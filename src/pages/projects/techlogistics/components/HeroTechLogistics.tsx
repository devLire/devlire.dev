import { useMemo } from 'react';
import { Cpu } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { CustomBadge } from '@/components/CustomBadge';
import { SectionLayout } from '@/components/SectionLayout';
import { SectionTitle } from '@/components/SectionTitle';
import { techLogisticsProject } from '@/constants/projects';
import type { BaseSectionProps } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export const HeroTechLogistics = ({ id }: BaseSectionProps) => {
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: 10000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <SectionLayout id={id}>
      <div className="mb-8 flex justify-center lg:hidden">
        <SectionTitle
          className="w-fit [text-shadow:0_0_12px_rgba(16,185,129,0.08)]"
          icon={Cpu}
          text="TechLogistics"
        />
      </div>

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* COLUMNA IZQUIERDA */}
        <div className="order-2 flex flex-col gap-6 text-left lg:order-1 lg:col-span-6">
          <div className="hidden lg:block">
            <SectionTitle
              className="w-fit [text-shadow:0_0_12px_rgba(16,185,129,0.08)]"
              icon={Cpu}
              text="TechLogistics"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs font-bold tracking-widest text-emerald-400 uppercase">
                Ecosistema Completo
              </span>
              <h2 className="font-red-hat-display text-2xl leading-tight font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Arquitectura Monorepo para Control Logístico
              </h2>
            </div>

            <div className="my-2 flex flex-row flex-wrap gap-2">
              {techLogisticsProject.skills.map((skill, index) => (
                <CustomBadge key={index} skill={skill} />
              ))}
            </div>

            <p className="text-sm leading-relaxed text-zinc-400 md:text-base lg:text-lg">
              Plataforma empresarial de alto rendimiento diseñada para la
              automatización, gestión transaccional de inventarios y auditoría
              biométrica de accesos de operarios.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:col-span-6">
          <Carousel
            className="w-full max-w-[550px] lg:max-w-full"
            opts={{ loop: true }}
            plugins={[autoplayPlugin]}
          >
            <CarouselContent className="h-[380px] sm:h-[460px] lg:h-[540px] xl:h-[580px]">
              {/* Slide 1: App Móvil */}
              <CarouselItem className="flex h-full items-center justify-center">
                <div className="flex h-full items-center justify-center py-2">
                  <img
                    alt="TechLogistics App Móvil"
                    className="h-full w-auto rounded-[2.5rem] object-cover"
                    src="/projects/techlogistics/techlogistics-app-demo.gif"
                  />
                </div>
              </CarouselItem>

              {/* SLIDE 2: Web */}
              <CarouselItem className="flex h-full items-center justify-center px-2">
                <div className="aspect-[1366/651] w-full max-w-[460px] overflow-hidden rounded-xl sm:max-w-[500px] lg:max-w-[520px] xl:max-w-[660px]">
                  <img
                    alt="TechLogistics Web"
                    className="h-full w-full object-cover"
                    src="/projects/techlogistics/techlogistics-web-demo.gif"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </SectionLayout>
  );
};
