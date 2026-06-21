import type { Skill } from '@/constants/skills';
import { Badge } from './ui/badge';
import { useHoverScaleAnimation } from '@/hooks/useHoverScaleAnimation';
import { cn } from '@/lib/utils';

interface Props {
  skill: Skill;
}

export const CustomBadge = ({ skill }: Props) => {
  const { isScaled, handleMouseEnter, handleMouseLeave } =
    useHoverScaleAnimation();
  const hexColor = skill.iconColor.match(/\[(#[A-Fa-f0-9]{6})\]/)?.[1];

  return (
    <Badge
      className={cn(
        'cursor-default gap-2 transition-transform duration-150 select-none',
        isScaled && 'scale-105'
      )}
      style={{
        backgroundColor: hexColor ? `${hexColor}1A` : undefined,
        borderColor: hexColor,
      }}
      variant="outline"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`h-[1em] w-[1em] ${skill.iconColor}`}
        style={{
          maskImage: `url(${skill.src})`,
          WebkitMaskImage: `url(${skill.src})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
      {skill.title}
    </Badge>
  );
};
