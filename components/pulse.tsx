import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const pulseVariants = cva('w-2 h-2 rounded-full', {
  variants: {
    variant: {
      default: 'bg-green-500',
      destructive: 'bg-red-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type PulseProps = VariantProps<typeof pulseVariants> & {
  className?: string;
};

export default function Pulse({ variant, className }: PulseProps) {
  return (
    <div className="relative">
      <div
        className={cn(pulseVariants({ variant }), 'animate-pulse', className)}
        style={{ animationDuration: '2s' }}
      />
      <div
        className={cn(
          pulseVariants({ variant }),
          'absolute inset-0 animate-ping opacity-75',
          className
        )}
        style={{ animationDuration: '2s' }}
      />
    </div>
  );
}
