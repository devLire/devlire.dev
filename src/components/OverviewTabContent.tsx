import { Layers, Target, Calendar, Briefcase, UserCheck } from 'lucide-react';
import { CustomCard } from '@/components/CustomCard';
import { CustomBadge } from '@/components/CustomBadge';
import type { Project } from '@/types';

interface Props {
  project: Project;
}

export const OverviewTabContent = ({ project }: Props) => {
  const { overview, skills } = project;
  if (!overview) return null;

  return (
    <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
      {/* Columna Izquierda  */}
      <div className="flex w-full min-w-0 flex-col gap-6 lg:col-span-5">
        {/* Bento 1 */}
        <CustomCard className="flex w-full min-w-0 flex-col gap-4 p-6 text-left">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[#00F5D4]">
              <Layers size={18} />
              <span className="font-mono text-xs font-bold tracking-wider uppercase">
                Visión General
              </span>
            </div>
            <h3 className="font-red-hat-display text-2xl font-bold text-white">
              Resumen del Proyecto
            </h3>
            <p className="mt-2 text-sm leading-relaxed font-medium text-zinc-300">
              {overview.summary}
            </p>
          </div>

          <div className="my-1 h-px bg-zinc-900/80" />

          <div>
            <div className="mb-1 flex items-center gap-2 text-emerald-400">
              <Target size={16} />
              <span className="font-mono text-xs font-bold tracking-wider uppercase">
                Objetivo del Sistema
              </span>
            </div>
            <p className="text-sm leading-relaxed font-medium text-zinc-400">
              {overview.objective}
            </p>
          </div>
        </CustomCard>

        {/* Bento 2 */}
        <CustomCard className="flex w-full min-w-0 flex-col gap-5 bg-gradient-to-b from-zinc-950 to-zinc-900/10 p-6 text-left">
          <div className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2 text-emerald-400">
                <Calendar size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                  Desarrollo
                </span>
                <span className="font-mono text-xs font-semibold text-zinc-200">
                  {overview.duration.period}
                </span>
              </div>
            </div>
            <span className="font-red-hat-display text-lg font-bold text-[#00F5D4]">
              {overview.duration.total}
            </span>
          </div>

          <div>
            <span className="mb-2.5 block font-mono text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
              Tecnologías del Stack
            </span>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
              {skills.map((badge) => (
                <CustomBadge
                  key={badge.title}
                  className="w-full min-w-0 items-center gap-1"
                  skill={badge}
                />
              ))}
            </div>
          </div>
        </CustomCard>
      </div>

      {/* Columna Derecha */}
      <CustomCard className="flex w-full min-w-0 flex-col gap-4 p-5 lg:col-span-7">
        <h4 className="mb-1 inline-flex items-center gap-2 text-left font-mono text-xs tracking-wider text-zinc-500 uppercase">
          <Briefcase className="text-emerald-500" size={16} />
          Áreas de Responsabilidad & Rol
        </h4>

        <p className="text-left text-sm leading-relaxed font-medium text-zinc-400">
          Desglose de la arquitectura y las implementaciones clave realizadas en
          los tres directorios del monorepo:
        </p>

        <div className="mt-1 flex flex-col gap-4">
          {overview.roles.map((role, index) => (
            <div
              key={role.area}
              className="group flex flex-col gap-2 rounded-xl border border-zinc-900 bg-zinc-900/10 p-6 text-left transition-all hover:border-zinc-800/50"
            >
              <div className="flex items-center justify-between">
                <h5 className="font-red-hat-display inline-flex items-center gap-2 text-lg font-bold text-zinc-200 transition-colors group-hover:text-[#00F5D4]">
                  <span className="font-mono text-xs text-emerald-500">
                    0{index + 1}.
                  </span>
                  {role.area}
                </h5>
                <UserCheck
                  className="text-emerald-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  size={16}
                />
              </div>
              <p className="pl-6 text-sm leading-relaxed text-zinc-400 md:text-base">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </CustomCard>
    </div>
  );
};
