import * as TooltipRadix from '@radix-ui/react-tooltip';

interface TooltipProps {
  children: React.ReactNode;
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <TooltipRadix.Provider delayDuration={500}>
      <TooltipRadix.Root>
        {children}
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

export const TooltipTrigger = TooltipRadix.Trigger;