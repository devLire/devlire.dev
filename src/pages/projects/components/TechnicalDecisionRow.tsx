import { CustomCard } from '@/components/CustomCard';
import type { Skill } from '@/constants/skills';
import { useHoverScaleAnimation } from '@/hooks/useHoverScaleAnimation';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';

export interface TechnicalDecision {
  decision: string;
  reason: string;
  skill?: Skill;
}

interface Props {
  technicalDecision: TechnicalDecision;
}

export const TechnicalDecisionRow = ({ technicalDecision }: Props) => {
  const { isScaled, handleMouseEnter, handleMouseLeave } =
    useHoverScaleAnimation();

  const hexColor =
    technicalDecision.skill?.iconColor.match(/\[(#[A-Fa-f0-9]{6})\]/)?.[1] ??
    '';

  return (
    <CustomCard
      className={cn(
        'grid w-full grid-cols-1 items-stretch transition-transform duration-300 lg:grid-cols-[1fr_2fr]',
        isScaled && 'scale-[1.01]'
      )}
      style={{ borderColor: hexColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Columna Izquierda */}
      <div
        className="relative flex w-full flex-row items-center gap-4 rounded-t-3xl p-3 text-lg font-bold text-white lg:rounded-t-none lg:rounded-l-3xl"
        style={{
          backgroundColor: hexColor ? `${hexColor}1A` : undefined,
        }}
      >
        <CircleCheck className="w-[1.5em] shrink-0 text-white" />
        <p>{technicalDecision.decision}</p>
        {technicalDecision.skill && (
          <div
            className={cn(
              `absolute top-1/2 right-3 h-[2.7em] w-[2.7em] shrink-0 -translate-y-1/2 opacity-20 duration-700 lg:h-[3em] lg:w-[3em] ${technicalDecision.skill.iconColor}`,
              isScaled && 'opacity-100'
            )}
            style={{
              maskImage: `url(${technicalDecision.skill.src})`,
              WebkitMaskImage: `url(${technicalDecision.skill.src})`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>

      {/* Columna Derecha */}
      <div className="flex items-center border-t border-white/20 p-1 px-4 text-sm text-white/70 lg:border-t-0 lg:border-l">
        <p>{technicalDecision.reason}</p>
      </div>
    </CustomCard>
  );
};
