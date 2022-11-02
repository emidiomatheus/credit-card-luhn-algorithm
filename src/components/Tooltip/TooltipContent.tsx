import * as TooltipRadix from '@radix-ui/react-tooltip';
import { TooltipContentProps } from '@radix-ui/react-tooltip';
import { TooltipArrow } from './TooltipArrow';

interface TooltipContent extends TooltipContentProps {
  children: React.ReactNode;
}

export function TooltipContent({ children, ...props }: TooltipContent) {
  return (
    <TooltipRadix.Portal>
      <TooltipRadix.Content {...props} className="bg-zinc-800 text-zinc-100 p-4 rounded border border-zinc-700 text-sm leading-tighter max-w-xs">
        {children}
        <TooltipArrow />
      </TooltipRadix.Content>
    </TooltipRadix.Portal>
  )
}
