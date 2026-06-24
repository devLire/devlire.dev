import { useState, useEffect, useRef } from 'react';
import { Cpu } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { CustomBadge } from '@/components/CustomBadge';
import { SectionLayout } from '@/components/SectionLayout';
import { SectionTitle } from '@/components/SectionTitle';
import { techLogisticsProject } from '@/constants/projects/techlogistics';
import type { BaseSectionProps } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { FreshGif } from '@/components/FreshGifs';
import { ProjectActions } from '@/components/ProjectActions';

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-80%' : '80%',
    opacity: 0,
    transition: {
      x: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
      opacity: { duration: 0.35, ease: 'easeOut' },
    },
  }),
};

const SLIDES_DATA = [
  {
    id: 'app',
    src: '/projects/techlogistics/techlogistics-app-demo.gif',
    alt: 'TechLogistics App Móvil',
    duration: 8730,
  },
  {
    id: 'web',
    src: '/projects/techlogistics/techlogistics-web-demo.gif',
    alt: 'TechLogistics Web',
    duration: 10470,
  },
];

export const HeroTechLogistics = ({ id }: BaseSectionProps) => {
  const [api, setApi] = useState<CarouselApi>();

  const [{ page, direction, tick }, setCarouselState] = useState({
    page: 0,
    direction: 1,
    tick: 0,
  });

  const dragStartX = useRef<number | null>(null);
  const swipeDirection = useRef(1);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sincroniza el estado local de React con el índice activo y la dirección de Embla Carousel.
  useEffect(() => {
    if (!api) return;

    const syncState = () => {
      const snap = api.selectedScrollSnap();
      setCarouselState((prev) => ({
        page: snap,
        direction: swipeDirection.current,
        tick: prev.page !== snap ? prev.tick + 1 : prev.tick,
      }));
    };

    syncState();
    api.on('select', syncState);

    return () => {
      api.off('select', syncState);
    };
  }, [api]);

  // Ejecuta un temporizador para avanzar automáticamente al siguiente slide usando un poco menos de la duración del GIF actual.
  useEffect(() => {
    if (!api) return;

    const currentSlide = SLIDES_DATA[page];
    if (!currentSlide) return;

    const timer = setTimeout(() => {
      api.scrollNext();
    }, currentSlide.duration);

    return () => clearTimeout(timer);
  }, [api, page]);

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
        <div className="relative z-20 order-2 flex flex-col gap-6 text-left lg:order-1 lg:col-span-6">
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
                Backend | Web | Mobile
              </span>
              <h2 className="font-red-hat-display text-2xl leading-tight font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Sistema Full-Stack de Inventario y Control de Accesos
              </h2>
            </div>

            <div className="my-2 flex flex-row flex-wrap gap-2">
              {techLogisticsProject.skills.map((skill, index) => (
                <CustomBadge key={index} skill={skill} />
              ))}
            </div>

            <p className="text-sm leading-relaxed text-zinc-400 md:text-base lg:text-lg">
              Sistema full-stack de gestión logística que integra inventario,
              control de accesos y autenticación biométrica móvil mediante una
              plataforma unificada de backend, web y mobile.
            </p>

            <ProjectActions isProjectPage project={techLogisticsProject} />
          </div>
        </div>

        <div className="relative z-10 order-1 flex w-full items-center justify-center lg:order-2 lg:col-span-6">
          <div
            className="relative w-full max-w-[550px] lg:max-w-full"
            onPointerDownCapture={(e) => {
              dragStartX.current = e.clientX;
              if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
            }}
            onPointerMoveCapture={(e) => {
              if (dragStartX.current === null) return;

              const diff = e.clientX - dragStartX.current;
              if (diff > 5) swipeDirection.current = -1;
              else if (diff < -5) swipeDirection.current = 1;
            }}
            onPointerUpCapture={() => {
              dragStartX.current = null;

              resetTimerRef.current = setTimeout(() => {
                swipeDirection.current = 1;
              }, 400);
            }}
          >
            <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
              <CarouselContent className="h-[380px] sm:h-[460px] lg:h-[540px] xl:h-[580px]">
                <CarouselItem className="h-full w-full" />
                <CarouselItem className="h-full w-full" />
              </CarouselContent>
            </Carousel>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
              <AnimatePresence mode="popLayout">
                {SLIDES_DATA.map((slide, index) => {
                  if (page !== index) return null;

                  return (
                    <motion.div
                      key={`${slide.id}-${tick}`}
                      animate="center"
                      className="absolute inset-0 flex items-center justify-center p-2"
                      custom={direction}
                      exit="exit"
                      initial="enter"
                      variants={slideVariants}
                    >
                      {slide.id === 'app' ? (
                        <FreshGif
                          alt={slide.alt}
                          className="h-full w-auto rounded-[2.5rem] object-cover shadow-2xl"
                          src={slide.src}
                          tick={tick}
                        />
                      ) : (
                        <div className="aspect-[1366/651] w-full max-w-[460px] overflow-hidden rounded-xl shadow-2xl sm:max-w-[500px] lg:max-w-[520px] xl:max-w-[660px]">
                          <FreshGif
                            alt={slide.alt}
                            className="h-full w-full object-cover"
                            src={slide.src}
                            tick={tick}
                          />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
