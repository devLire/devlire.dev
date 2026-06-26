import {
  ReactFlow,
  Controls,
  Handle,
  Position,
  useReactFlow,
} from '@xyflow/react';
import { useEffect } from 'react';
import type { NodeProps } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { SectionLayout } from '@/components/SectionLayout';
import { SectionTitle } from '@/components/SectionTitle';
import { CustomCard } from '@/components/CustomCard';
import { cn } from '@/lib/utils';
import type { BaseSectionProps } from '@/types';
import { GitBranch } from 'lucide-react';

import { useWorkflowTechLogistics } from '../hooks/useWorkflowTechLogistics';

const FlowCardNode = ({ data }: NodeProps) => {
  const variant = (data.variant as 'happy' | 'error' | 'default') || 'default';
  const isInput = Boolean(data.isInput);
  const isOutput = Boolean(data.isOutput);

  const variantClasses = {
    default: 'border-white/10 text-zinc-300',
    happy: 'border-amber-500 text-zinc-200 font-medium',
    error: 'border-red-500/60 text-zinc-300',
  }[variant];

  return (
    <CustomCard
      className={cn(
        'relative w-[145px] px-2.5 py-2 text-center select-none',
        variantClasses
      )}
    >
      {!isInput && (
        <Handle
          className={cn(
            '!h-2 !w-2 !border-0',
            variant === 'happy' ? '!bg-amber-500' : '!bg-white/30'
          )}
          position={Position.Top}
          type="target"
        />
      )}
      <span className="block text-xs leading-tight tracking-tight">
        {String(data.label)}
      </span>
      {!isOutput && (
        <Handle
          className={cn(
            '!h-2 !w-2 !border-0',
            variant === 'happy' ? '!bg-amber-500' : '!bg-white/30'
          )}
          position={Position.Bottom}
          type="source"
        />
      )}
    </CustomCard>
  );
};

const NODE_TYPES = { flowCard: FlowCardNode };

const AutoFitListener = () => {
  const { fitView } = useReactFlow();
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const r = () => {
      clearTimeout(t);
      t = setTimeout(() => fitView({ padding: 0.01, maxZoom: 1.15 }), 50);
    };
    window.addEventListener('resize', r);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', r);
    };
  }, [fitView]);
  return null;
};

export const WorkflowTechLogistics = ({ id }: BaseSectionProps) => {
  const { nodes, edges, onNodesChange, onEdgesChange, canvasOptions } =
    useWorkflowTechLogistics();

  return (
    <SectionLayout id={id}>
      <SectionTitle icon={GitBranch} text="Flujo de la app" />

      <div className="relative mt-6 h-[620px] w-full max-w-full overflow-hidden sm:h-[780px] md:h-[1050px]">
        <div className="absolute inset-0 z-50 h-full w-full" />
        <ReactFlow
          edges={edges}
          nodeTypes={NODE_TYPES}
          nodes={nodes}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
          {...canvasOptions}
        >
          <AutoFitListener />
          <Controls
            showFitView={false}
            showInteractive={false}
            showZoom={false}
          />
        </ReactFlow>
      </div>
    </SectionLayout>
  );
};
