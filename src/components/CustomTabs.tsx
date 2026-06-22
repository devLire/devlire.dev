import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CustomCard } from '@/components/CustomCard';
import { CustomBadge } from '@/components/CustomBadge';
import type { Project } from '@/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { ImageZoomModal } from './ImageZoomModal';
import { OverviewTabContent } from './OverviewTabContent';

interface Props {
  project: Project;
}

export const CustomTabs = ({ project }: Props) => {
  const { overview } = project;
  const activeTabDefault = overview?.id;

  const [activeTab, setActiveTab] = useState<string>(activeTabDefault ?? '');

  if (!overview) return <></>;

  return (
    <Tabs className="w-full" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="flex h-auto w-full scrollbar-none justify-start gap-2 overflow-x-auto rounded-none border-b border-zinc-900 bg-transparent p-0 pb-px">
        <TabsTrigger
          key={overview.id}
          className="font-red-hat-display cursor-pointer rounded-none border-b-2 border-transparent bg-transparent px-6 py-3 text-base font-medium text-zinc-500 shadow-none transition-all hover:text-zinc-300 data-[state=active]:border-[#00F5D4] data-[state=active]:bg-zinc-900/10 data-[state=active]:text-[#00F5D4] data-[state=active]:shadow-none md:text-xl"
          value={overview.id}
        >
          {overview.tabTitle}
        </TabsTrigger>
        {project.sections?.map((section) => (
          <TabsTrigger
            key={section.id}
            className="font-red-hat-display cursor-pointer rounded-none border-b-2 border-transparent bg-transparent px-6 py-3 text-base font-medium text-zinc-500 shadow-none transition-all hover:text-zinc-300 data-[state=active]:border-[#00F5D4] data-[state=active]:bg-zinc-900/10 data-[state=active]:text-[#00F5D4] data-[state=active]:shadow-none md:text-xl"
            value={section.id}
          >
            {section.tabTitle}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Contenedor */}
      <TabsContent
        key={overview.id}
        className="mt-12 outline-none"
        value={overview.id}
      >
        <OverviewTabContent project={project} />
      </TabsContent>

      {project.sections?.map((content) => (
        <TabsContent
          key={content.id}
          className="mt-7 outline-none"
          value={content.id}
        >
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            {/* Columna Izquierda */}
            <CustomCard className="flex w-full min-w-0 flex-col justify-between p-6 text-left lg:col-span-5">
              {/* Header */}
              <div className="shrink-0">
                <h3 className="font-red-hat-display text-2xl font-bold break-words text-white">
                  {content.title}
                </h3>
                <div className="my-2 h-px bg-zinc-900" />
              </div>

              {/* Carrusel */}
              <div className="relative my-4 min-h-[320px] w-full flex-1 overflow-hidden rounded-lg border border-white/5 bg-zinc-950/80">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <Carousel className="flex h-full w-full items-center justify-center">
                    <CarouselContent className="m-0 h-full w-full">
                      {content.images.map((imgUrl, idx) => (
                        <CarouselItem
                          key={idx}
                          className="flex h-full items-center justify-center p-0"
                        >
                          <ImageZoomModal
                            alt={`${content.title} - Vista ${idx + 1}`}
                            isMobileView={content.isMobileView}
                            src={imgUrl}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <div className="pointer-events-none absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
                      <CarouselPrevious className="pointer-events-auto relative left-0 h-8 w-8 translate-y-0 border-zinc-700 bg-zinc-900/80 text-white hover:bg-zinc-800" />
                      <CarouselNext className="pointer-events-auto relative right-0 h-8 w-8 translate-y-0 border-zinc-700 bg-zinc-900/80 text-white hover:bg-zinc-800" />
                    </div>
                  </Carousel>
                </div>
              </div>

              {/* Badges */}
              <div className="mt-auto grid shrink-0 grid-cols-3 gap-2 pt-2">
                {content.badges.map((badge) => (
                  <CustomBadge
                    key={badge.title}
                    className="w-full min-w-0 items-center gap-1"
                    skill={badge}
                  />
                ))}
              </div>
            </CustomCard>

            {/* Columna Derecha */}
            <CustomCard className="flex w-full min-w-0 flex-col gap-4 p-5 lg:col-span-7">
              <h4 className="mb-2 inline-flex items-center gap-2 text-left font-mono text-xs tracking-wider text-zinc-500 uppercase">
                <ShieldCheck className="text-emerald-500" size={16} />
                Soluciones de Arquitectura
              </h4>

              <p className="text-sm leading-relaxed text-zinc-400">
                {content.description}
              </p>

              <div className="flex flex-col gap-4">
                {content.highlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className="group flex flex-col gap-2 rounded-xl border border-zinc-900 bg-zinc-900/10 p-6 text-left transition-all hover:border-zinc-800/50"
                  >
                    <h5 className="font-red-hat-display inline-flex items-center gap-2 text-lg font-bold text-zinc-200 transition-colors group-hover:text-[#00F5D4]">
                      <span className="font-mono text-xs text-emerald-500">
                        0{index + 1}.
                      </span>
                      {highlight.title}
                    </h5>
                    <p className="pl-6 text-sm leading-relaxed text-zinc-400 md:text-base">
                      {highlight.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CustomCard>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
