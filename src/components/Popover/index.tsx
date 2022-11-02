import * as PopoverRadix from '@radix-ui/react-popover';
import { PopoverContent } from './PopoverContent';

interface PopoverProps {
  children: React.ReactNode;
}

export function Popover({ children }: PopoverProps) {
  return (
    <PopoverRadix.Root>
      {children}
    </PopoverRadix.Root>
  )
}

export const PopoverTrigger = PopoverRadix.Trigger;